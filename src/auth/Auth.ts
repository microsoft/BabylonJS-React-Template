import {
    PublicClientApplication,
    type AuthenticationResult,
    type Configuration,
} from "@azure/msal-browser";

interface AuthInit {
    aadAppId: string;
    tenantId: string;
}

const createConfig = ({ aadAppId, tenantId }: AuthInit): Configuration => ({
    auth: {
        clientId: aadAppId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        redirectUri: window.location.origin,
    },
    cache: {
        cacheLocation: "sessionStorage",
    },
});

const loginRequestOptions = {
    scopes: ["User.Read"],
};

let msalInstance: PublicClientApplication | null = null;
let initPromise: Promise<PublicClientApplication> | null = null;

/**
 * Initialise (or return the existing) MSAL instance.
 *
 * MSAL v4+ requires `await msalInstance.initialize()` before any other call,
 * so this method is async. It is idempotent and safe to call from multiple
 * components — subsequent calls return the same instance.
 */
export const initialiseMsal = async ({
    aadAppId,
    tenantId,
}: AuthInit): Promise<PublicClientApplication> => {
    if (msalInstance) {
        return msalInstance;
    }
    if (!initPromise) {
        initPromise = (async () => {
            const instance = new PublicClientApplication(
                createConfig({ aadAppId, tenantId })
            );
            await instance.initialize();
            const accounts = instance.getAllAccounts();
            if (accounts.length > 0) {
                instance.setActiveAccount(accounts[0]);
            }
            msalInstance = instance;
            return instance;
        })();
    }
    return initPromise;
};

/**
 * Call this after a redirect-based login so the post-login state is processed.
 * Should be invoked from a useEffect on app mount.
 */
export const handleRedirect = async (): Promise<void> => {
    const instance = checkInstance();
    const redirectResponse = await instance.handleRedirectPromise();
    if (redirectResponse) {
        instance.setActiveAccount(redirectResponse.account);
    }
};

/**
 * Queries the Microsoft Graph for the active user's profile photo.
 * @param size Supported sizes: 48, 64, 96, 120, 240, 360, 432, 504, 648
 */
export const getProfilePhoto = async (size: number): Promise<string> => {
    checkInstance();

    const url = `https://graph.microsoft.com/v1.0/me/photos/${size}x${size}/$value`;

    const token = await getToken();
    if (!token) {
        throw new Error("getProfilePhoto: failed to acquire access token");
    }
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token.accessToken}`);

    const response = await fetch(url, { method: "GET", headers });
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.onerror = reject;
        fileReader.readAsDataURL(blob);
    });
};

export const loginWithPopup = async (): Promise<void> => {
    const instance = checkInstance();
    const loginResponse = await instance.loginPopup(loginRequestOptions);
    instance.setActiveAccount(loginResponse.account);
};

export const loginWithRedirect = async (): Promise<void> => {
    const instance = checkInstance();
    await instance.loginRedirect(loginRequestOptions);
};

export const logout = async (): Promise<void> => {
    const instance = checkInstance();
    await instance.logoutRedirect();
};

const getToken = async (): Promise<AuthenticationResult | undefined> => {
    const instance = checkInstance();
    const account = instance.getActiveAccount();
    if (!account) {
        console.warn(
            "Auth: no active account - either user isn't logged in or setActiveAccount was never called"
        );
        return undefined;
    }
    return instance.acquireTokenSilent({
        ...loginRequestOptions,
        account,
    });
};

const checkInstance = (): PublicClientApplication => {
    if (!msalInstance) {
        throw new Error(
            "Auth: msalInstance is null - have you awaited initialiseMsal?"
        );
    }
    return msalInstance;
};
