import { PublicClientApplication } from "@azure/msal-browser";

const createConfig = ({ aadAppId, tenantId }) => ({
    auth: {
        clientId: aadAppId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        redirectUri: window.location.origin
    },
    cache: {
        cacheLocation: "sessionStorage",    // This configures where your cache will be stored
        storeAuthStateInCookie: false,      // Set this to "true" if you are having issues on IE11 or Edge
    }
});

const loginRequestOptions = {
    scopes: ["User.Read"]
};

let msalInstance = null;

/**
 * Initialises the MSAL instance and ensures proper auth functionality from within your React components.
 * This method should be called from the first React component that gets mounted, i.e <App>
 * 
 * - Creates the instance of PublicClientApplication, a dependency for MSAL React,
 * - Looks for cached users (from a previous login) and calls setActiveAccount 
 * - Handles any redirect promises
 * 
 * @param {string} aadAppId - Azure AD Application ID 
 * @param {string} tenantId - Azure Tenant ID 
 * 
 * @returns {PublicClientApplication} MSAL instance
 */
export const initialiseMsal = ({ aadAppId, tenantId }) => {
    msalInstance = new PublicClientApplication(createConfig({ aadAppId, tenantId }));

    const accounts = msalInstance.getAllAccounts();
    if (accounts && accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
    }

    return msalInstance;
}

/**
 * Call this method if user logged in/out via redirect method. As the browser navigates away from this site
 * on these workflows, the post login state has to be handled when the page next loads.
 * 
 * Call this method inside useEffect
 * 
 * @param {PublicClientApplication} MSAL instance 
 */
export const handleRedirect = async () => {
    checkInstance();

    const redirectResponse = await msalInstance.handleRedirectPromise();
    if (redirectResponse) {
        console.log("Redirect respone", redirectResponse);
        msalInstance.setActiveAccount(redirectResponse.account);
    }
}

/**
 * Queries the Microsoft graph for the active user's profile photo
 *  
 * @param {Number} size - See https://learn.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0 for supported sizes
 * @returns {Promise<string>} The data URL which can be used as a `src` parameter for <img> tags
 */
export const getProfilePhoto = async (size) => {
    checkInstance();

    const url = `https://graph.microsoft.com/v1.0/me/photos/${size}x${size}/$value`;

    const token = await getToken(msalInstance);
    const bearer = `Bearer ${token.accessToken}`;
    const headers = new Headers();
    headers.append("Authorization", bearer)

    const options = {
        method: "GET",
        headers: headers
    };
    const response = await fetch(url, options);
    const blob = await response.blob();

    // FileReader uses callbacks - wrapping it with a Promise means our caller can "await" this function call
    return new Promise((resolve, reject) => {
        var fileReader = new FileReader();
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = reject;
        fileReader.readAsDataURL(blob);
    });
}

export const loginWithPopup = async () => {
    const loginResponse = await msalInstance.loginPopup(loginRequestOptions);
    msalInstance.setActiveAccount(loginResponse.account);
}

export const loginWithRedirect = async () => {
    const loginResponse = await msalInstance.loginRedirect(loginRequestOptions);
    msalInstance.setActiveAccount(loginResponse.account);
}

export const logout = () => {
    msalInstance.logout();
}

/**
 * Obtains a token for the active account
 * 
 * @returns {AuthenticationResult} Object containing account info and accessToken
 */
const getToken = async () => {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        console.warn("No active account - either user isn't logged in or instance.setActiveAccount was never called");
        return;
    }

    const request = {
        ...loginRequestOptions,
        account: account
    };
    const token = await msalInstance.acquireTokenSilent(request)
    return token;
}

const checkInstance = () => {
    if (!msalInstance) {
        throw "Auth: msalInstance is null - have you called initialiseMsal yet?";
    }
}