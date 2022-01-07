import { Dispatch, Fragment, SetStateAction, useState, useEffect } from "react";
import { Icon, Links } from "../structures/Constants";
import { Head, Image, Link, Loader } from "./BaseComponents";
import type { NavLinks } from "../structures/Interfaces";
import type { NextComponentType } from "next";
import type { PageSection } from "../structures/Types";
import { Search } from "./Search";
import { Util } from "../structures/functions/Utils";

import styles from "../styles/App.module.scss";

export const Nav: NextComponentType = () => {
    const [hasMounted, setMounted]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>];
    const [isMobile, toggleMobile]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>];
    const [position, setPosition]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const [section, setSection]: [PageSection, Dispatch<SetStateAction<PageSection>>] = useState("Home") as [PageSection, Dispatch<SetStateAction<PageSection>>];
    const [navLinks, setNavLinks]: [NavLinks, Dispatch<SetStateAction<NavLinks>>] = useState({ scrollToHome: (): void => { }, scrollToAbout: (): void => { } }) as [NavLinks, Dispatch<SetStateAction<NavLinks>>];

    useEffect((): (() => void) => {
        const header: HTMLElement = document.getElementById("header") as HTMLElement;
        const about: HTMLElement = document.getElementById("about") as HTMLElement;

        window.addEventListener("scroll", (event: Event): void => {
            if (Util.elementIsInView(header)) setSection("Home");
            if (Util.elementIsInView(about)) setSection("About");
        });

        setNavLinks({
            scrollToHome: (): void => {
                header.scrollIntoView({
                    behavior: "smooth"
                });

                setSection("Home");
            },
            scrollToAbout: (): void => {
                about.scrollIntoView({
                    behavior: "smooth"
                });

                setSection("About");
            }
        });

        setMounted(true);

        document.addEventListener("scroll", (_e: Event): void => {
            setPosition(document.body.scrollTop || document.documentElement.scrollTop);
        });

        return (): void => {
            setNavLinks({} as NavLinks);
            setMounted(false);
            setPosition(0);
        }
    }, []);

    const navStyle: string = hasMounted && !isMobile ?
        position > 1 ?
            styles["nav-sticky"]
            : styles["nav-stationary"]
        : styles["nav-stationary"];

    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
            </Head>

            <section>
                <nav className={navStyle} style={{ zIndex: 199 }}>
                    <div className={styles["nav-header"]} style={{ zIndex: 197 }}>
                        <Link href="/" passHref>
                            <a className={styles["nav-icon-section"]}>
                                <Image className={styles["nav-icon"]} src={Icon} alt="Ascendus's logo" height={45} width={45} loader={Loader} />
                            </a>
                        </Link>
                    </div>

                    <ul className={styles["nav-links"]}>
                        {/* Add click events for smooth scrolling to sections */}
                        <li>
                            <a className={section === "Home" ? `${styles["nav-link-active"]} text` : `${styles["nav-link"]} text`} id="home-link" onClick={(): void => navLinks["scrollToHome"]()}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a className={section === "About" ? `${styles["nav-link-active"]} text` : `${styles["nav-link"]} text`} id="about-link" onClick={(): void => navLinks["scrollToAbout"]()}>
                                About
                            </a>
                        </li>
                        <li>
                            <Link href="/#applications" passHref>
                                <a className={`${styles["nav-link"]} text`}>
                                    Applications
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#partners" passHref>
                                <a className={`${styles["nav-link"]} text`}>
                                    Partners
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#resources" passHref>
                                <a className={`${styles["nav-link"]} text`}>
                                    Resources
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <div className={styles["nav-right-container"]}>
                        <Search color="#898991" className={styles["search-bar-button"]} />

                        <button className={styles["nav-menu-button"]} onClick={(): void => toggleMobile(!isMobile)}>
                            <svg className={styles["nav-menu-icon"]} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                </nav>

                <div className={isMobile ? styles["nav-menu-container"] : styles["nav-menu-container-hidden"]} style={{ zIndex: 2000 }}>
                    <div className={styles["nav-menu-screen-cover"]} />

                    <nav className={styles["nav-menu"]}>
                        <div className={styles["nav-menu-header"]}>
                            <Link href="/" passHref>
                                <a className={styles["nav-icon-container"]}>
                                    <Image className={styles["nav-icon"]} src={Icon} alt="Ascendus's logo" height={45} width={45} loader={Loader} />
                                </a>
                            </Link>
                            <button className={styles["nav-menu-close-container"]} onClick={(): void => toggleMobile(!isMobile)}>
                                <svg className={styles["nav-menu-close-icon"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div>
                            <ul className={styles["nav-menu-links"]}>
                                <li className="mb-1">
                                    <a className={section === "Home" ? `${styles["nav-link-active"]} text` : `${styles["nav-link"]} text`} id="home-link" onClick={(): void => navLinks["scrollToHome"]()}>
                                        Home
                                    </a>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <a className={section === "About" ? `${styles["nav-link-active"]} text` : `${styles["nav-link"]} text`} id="about-link" onClick={(): void => navLinks["scrollToAbout"]()}>
                                        About
                                    </a>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <Link href="/" passHref>
                                        <a className={styles["nav-link"]}>
                                            Applications
                                        </a>
                                    </Link>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <Link href="/" passHref>
                                        <a className={styles["nav-link"]}>
                                            Partners
                                        </a>
                                    </Link>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <Link href="/" passHref>
                                        <a className={styles["nav-link"]}>
                                            Resources
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={styles["nav-menu-bottom"]}>
                            {/* Social Links Note: Added SVG so they load when no wifi */}
                            <div className={`${styles["nav-menu-socials"]} text`}>
                                <a href="https://twitter.com/MatrixDevelopm3" target="_blank" rel="noreferrer">
                                    <button className={styles["twitter"]} type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                </a>
                                <a href="https://reddit.com/" target="_blank" rel="noreferrer">
                                    <button className={styles["reddit"]} type="button">
                                        <i className="fab fa-reddit"></i>
                                    </button>
                                </a>
                                <a href="https://www.instagram.com/official_matrix_development/" target="_blank" rel="noreferrer">
                                    <button className={styles["instagram"]} type="button">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                </a>
                                <a href={Links["github"]} target="_blank" rel="noreferrer">
                                    <button className={styles["github"]} type="button">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </Fragment>
    );
}