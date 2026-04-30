import { MsalProvider, useMsal } from "@azure/msal-react";
import type { PublicClientApplication } from "@azure/msal-browser";
import { useEffect, useState } from "react";
import {
    getProfilePhoto,
    handleRedirect,
    initialiseMsal,
    loginWithPopup,
    loginWithRedirect,
    logout,
} from "../auth/Auth";

import styles from "./AuthExample.module.css";

/**
 * Modify these values - see AAD_AUTHENTICATION.md for more info.
 */
const aadAppId = "";
const tenantId = "";

const AuthExample = () => {
    const [msalInstance, setMsalInstance] =
        useState<PublicClientApplication | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!aadAppId || !tenantId) {
            return;
        }
        let cancelled = false;
        (async () => {
            try {
                const instance = await initialiseMsal({ aadAppId, tenantId });
                if (cancelled) return;
                await handleRedirect();
                if (!cancelled) setMsalInstance(instance);
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : String(err));
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, []);

    if (!aadAppId || !tenantId) {
        return (
            <p>
                Azure Active Directory and Tenant ID config not set - see{" "}
                <a href="https://github.com/microsoft/BabylonJS-React-Template/blob/main/AAD_AUTHENTICATION.md">
                    AAD_AUTHENTICATION.md
                </a>{" "}
                for more info
            </p>
        );
    }

    if (error) {
        return <p>Failed to initialise MSAL: {error}</p>;
    }

    if (!msalInstance) {
        return <p>Initialising authentication…</p>;
    }

    return (
        <MsalProvider instance={msalInstance}>
            <AuthExampleContent />
        </MsalProvider>
    );
};

const AuthExampleContent = () => {
    const { instance, accounts } = useMsal();
    const [profilePhoto, setProfilePhoto] = useState<string | undefined>();

    useEffect(() => {
        (async () => {
            if (instance.getActiveAccount()) {
                try {
                    const photo = await getProfilePhoto(120);
                    setProfilePhoto(photo);
                } catch (err) {
                    console.warn("Failed to fetch profile photo", err);
                }
            }
        })();
    }, [instance, accounts]);

    const activeAccount = instance.getActiveAccount();
    if (activeAccount) {
        return (
            <div className={styles.authExampleContainer}>
                <div className={styles.profileCard}>
                    <section className={styles.profileSection}>
                        <div
                            className={styles.profilePhoto}
                            style={{ backgroundImage: `url(${profilePhoto})` }}
                        ></div>
                        <section>
                            <p>{activeAccount.name}</p>
                            <p>{activeAccount.username}</p>
                        </section>
                    </section>
                    <section className={styles.buttonSection}>
                        <button type="button" onClick={() => void logout()}>
                            Logout
                        </button>
                    </section>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.authExampleContainer}>
            <div className={styles.profileCard}>
                <section className={styles.profileSection}>
                    <div>
                        <p>Sign-in with AAD</p>
                    </div>
                </section>
                <section className={styles.buttonSection}>
                    <button type="button" onClick={() => void loginWithPopup()}>
                        Login (popup)
                    </button>
                    <button
                        type="button"
                        onClick={() => void loginWithRedirect()}
                    >
                        Login (redirect)
                    </button>
                </section>
            </div>
        </div>
    );
};

export default AuthExample;
