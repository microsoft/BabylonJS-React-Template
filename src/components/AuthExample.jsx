import { MsalProvider, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { getProfilePhoto, handleRedirect, initialiseMsal, loginWithPopup, loginWithRedirect, logout } from "../auth/Auth";

import styles from "./AuthExample.module.css";

/**
 * Modify these values - see AAD_AUTHENTICATION.md for more info
 */
const aadAppId = "";
const tenantId = "";

/**
 * Component to demonstrate authentication functionality
 * @returns 
 */
const AuthExample = () => {
    const msalInstance = initialiseMsal({ aadAppId, tenantId });

    useEffect(() => {
        handleRedirect();
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            <AuthExampleContent />
        </MsalProvider>
    );
}

const AuthExampleContent = () => {
    const { instance, accounts } = useMsal();
    const [profilePhoto, setProfilePhoto] = useState();

    useEffect(() => {
        (async () => {
            if (instance.getActiveAccount()) {
                const photo = await getProfilePhoto(120);
                setProfilePhoto(photo);
            }
        })();
    }, [accounts])

    const renderProfileContent = () => {
        const isLoggedIn = instance.getActiveAccount();
        if (isLoggedIn) {
            return <div className={styles.profileCard}>
                <section className={styles.profileSection}>
                    <div className={styles.profilePhoto} style={{ backgroundImage: `url(${profilePhoto})` }}></div>
                    <section>
                        <p>{instance.getActiveAccount().name}</p>
                        <p>{instance.getActiveAccount().username}</p>
                    </section>
                </section>
                <section className={styles.buttonSection}>
                    <button type="button" onClick={() => logout()}>Logout</button>
                </section>
            </div>
        }
        else {
            return <div className={styles.profileCard}>
                <section className={styles.profileSection}>
                    <div>
                        <p>Sign-in with AAD</p>
                    </div>
                </section>
                <section className={styles.buttonSection}>
                    <button type="button" onClick={() => loginWithPopup()}>Login (popup)</button>
                    <button type="button" onClick={() => loginWithRedirect()}>Login (redirect)</button>
                </section>
            </div>
        }
    }

    return (
        <div className={styles.authExampleContainer}>
            {renderProfileContent()}
        </div>
    )
}

export default AuthExample;