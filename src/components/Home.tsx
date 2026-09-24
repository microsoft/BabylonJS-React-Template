import { Suspense, lazy, useState } from "react";

import { VIEW, type ViewType } from "../config/redux/constants/view";
import { setView } from "../config/redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "../config/redux/store";

// Lazy-load heavy views so Babylon, Cesium and MSAL each end up in their own
// chunk and aren't downloaded until the user actually navigates to that tab.
const BabylonCanvas = lazy(() => import("./BabylonCanvas"));
const CesiumCanvas = lazy(() => import("./CesiumCanvas"));
const AuthExample = lazy(() => import("./AuthExample"));

import illustration from "../assets/images/undraw_engineering_team_a7n2.svg";
import msLogo from "../assets/images/HeaderLogo.svg";
import expandMenuIcon from "../assets/images/e700.svg";
import closeMenuIcon from "../assets/images/e711.svg";

import styles from "./Home.module.css";

const docsUrl = "https://github.com/microsoft/BabylonJS-React-Template";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => (
    <button className={styles.button} onClick={onClick}>
        {text}
    </button>
);

const Header = () => {
    const dispatch = useAppDispatch();
    const currentView = useAppSelector((state) => state.app.view);
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    const menuItemClassName = (view: ViewType) =>
        view === currentView ? styles.active : undefined;

    const menuList = (
        <ul>
            <li
                onClick={() => dispatch(setView(VIEW.HOME))}
                className={menuItemClassName(VIEW.HOME)}
            >
                Home
            </li>
            <li
                onClick={() => dispatch(setView(VIEW.CESIUM))}
                className={menuItemClassName(VIEW.CESIUM)}
            >
                Cesium Example
            </li>
            <li
                onClick={() => dispatch(setView(VIEW.BABYLON))}
                className={menuItemClassName(VIEW.BABYLON)}
            >
                Babylon Example
            </li>
            <li
                onClick={() => dispatch(setView(VIEW.AUTH))}
                className={menuItemClassName(VIEW.AUTH)}
            >
                Auth Example
            </li>
            <li>
                <Button text="Read the docs" onClick={() => window.open(docsUrl)} />
            </li>
        </ul>
    );

    return (
        <header id={styles.header}>
            <div className={styles.headerContent}>
                <img
                    id={styles.logo}
                    onClick={() => dispatch(setView(VIEW.HOME))}
                    alt="Microsoft Customer Innovation logo"
                    src={msLogo}
                />

                {/* Desktop nav menu - shown/hidden via CSS media query */}
                <nav id={styles.rowNav}>{menuList}</nav>

                <button
                    id={styles.navExpandButton}
                    style={{
                        backgroundImage: `url(${
                            showDropdownMenu ? closeMenuIcon : expandMenuIcon
                        })`,
                    }}
                    onClick={() => setShowDropdownMenu(!showDropdownMenu)}
                />
                {showDropdownMenu && (
                    <>
                        <div
                            id={styles.clickCatcher}
                            onClick={() => setShowDropdownMenu(false)}
                        />
                        <nav id={styles.dropdownNav}>{menuList}</nav>
                    </>
                )}
            </div>
        </header>
    );
};

const HomeContent = () => (
    <main id={styles.homeContent}>
        <article className={styles.welcome}>
            <section className={styles.welcomeSection}>
                <h2>Hey, React + Babylon + Cesium Developers!</h2>
                <p>Thanks for choosing this project to build your web app.</p>
                <p>
                    This project provides a quick starting point to start
                    developing 3D web apps with Babylon.js and UI / state
                    management / component organisation with React.
                </p>
                <Button text="Read the docs" onClick={() => window.open(docsUrl)} />
            </section>
            <figure>
                <img
                    alt="Illustration of engineers collaborating"
                    src={illustration}
                />
            </figure>
        </article>
    </main>
);

const Home = () => {
    const view = useAppSelector((state) => state.app.view);

    const renderView = () => {
        switch (view) {
            case VIEW.HOME:
                return <HomeContent />;
            case VIEW.BABYLON:
                return <BabylonCanvas />;
            case VIEW.CESIUM:
                return <CesiumCanvas />;
            case VIEW.AUTH:
                return <AuthExample />;
            default:
                return <div>No view set</div>;
        }
    };

    return (
        <div id={styles.home}>
            <Header />
            <Suspense fallback={<p style={{ padding: "1rem" }}>Loading…</p>}>
                {renderView()}
            </Suspense>
        </div>
    );
};

export default Home;
