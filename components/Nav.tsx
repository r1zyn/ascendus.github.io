import { Dispatch, Fragment, SetStateAction, useState, useEffect } from "react";
import { Icon } from "../structures/Constants";
import { Image } from "../structures/NextComponents";
import { Link } from "../structures/NextComponents";
import type { NextComponentType } from "next";

import styles from "../styles/App.module.scss";

export const Nav: NextComponentType = () => {
    const [hasMounted, setMounted]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>];
    const [isMobile, toggleMobile]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>];
    const [_position, setPosition]: [number, Dispatch<SetStateAction<number>>] = useState(0);

    useEffect((): void => {
        document.addEventListener("scroll", (_e: Event): void => {
            setPosition(document.body.scrollTop);
        });

        setMounted(true);
    }, []);

    const navStyle: string = hasMounted && !isMobile ?
        document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ?
            styles["nav-sticky"]
            : styles["nav-stationary"]
        : styles["nav-stationary"];

    return (
        <Fragment>
            <section>
                <nav className={navStyle} style={{ zIndex: 999 }}>
                    <div className={styles["nav-header"]} style={{ zIndex: 2000 }}>
                        <Link href="/" passHref>
                            <a>
                                <Image className={styles["nav-icon"]} src={Icon} alt="Ascendus's logo" height={45} width={45} />
                            </a>
                        </Link>

                        <Link href="/" passHref>
                            <a>
                                <span className={styles["nav-title"]}>Ascendus</span>
                            </a>
                        </Link>
                    </div>

                    <div className={styles["laptop-hidden"]}>
                        <button className={styles["nav-menu-button"]} onClick={() => toggleMobile(!isMobile)}>
                            <svg className={styles["nav-menu-icon"]} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Bar Links */}
                    <ul className="hidden absolute top-3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:relative lg:items-center lg:w-auto lg:space-x-8 flex-1 justify-center">
                        <li>
                            <Link href="/" passHref>
                                <a className={this.props.page.toLowerCase() === "home" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faHouseUser} />&nbsp;Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="about" passHref>
                                <a className={this.props.page.toLowerCase() === "about" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faInfoCircle} />&nbsp;About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="applications" passHref>
                                <a className={this.props.page.toLowerCase() === "applications" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faClipboard} />&nbsp;Applications</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="partners" passHref>
                                <a className={this.props.page.toLowerCase() === "partners" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faUsers} />&nbsp;Partners</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="resources" passHref>
                                <a className={this.props.page.toLowerCase() === "resources" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faWrench} />&nbsp;Resources</a>
                            </Link>
                        </li>
                    </ul>

                    {/* Login Button */}
                    <div className="hidden lg:inline-block" style={{ zIndex: 2001 }}>
                        {
                            this.props.user === null ?
                                <Link href="https://matrixwebsite.cssudii.tk/api/v1/oauth/login" passHref>
                                    <button className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 border rounded border-darkGrey hover:border-transparent text-darkGrey hover:text-white hover:bg-darkGrey text-xs font-semibold"><FontAwesomeIcon icon={faArrowRight} className="mr-2" />Login</button>
                                </Link>
                                :
                                <button className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 border rounded border-darkGrey hover:border-transparent text-darkGrey hover:text-white hover:bg-darkGrey text-xs font-semibold">{this.props.user.username}</button>
                        }
                    </div>

                    {/* Login Button Dropdown */}
                    <div className="absolute right-2 mt-10 py-2 w-36 bg-white rounded-lg shadow-xl hidden object-bottom text-left" style={{ display: this.state.userOptionsIsOpen ? "block" : "none" }}>
                        <Link href="/404" passHref><p className="text-left block px-4 py-2 text-gray-800 hover:bg-darkBlue hover:text-white"><FontAwesomeIcon icon={faUser} />&nbsp;Profile</p></Link>
                        <Link href="/404" passHref><p className="text-left block px-4 py-2 text-gray-800 hover:bg-darkBlue hover:text-white"><FontAwesomeIcon icon={faCog} />&nbsp;Settings</p></Link>
                        <Link href="https://matrixwebsite.cssudii.tk/api/v1/oauth/logout" passHref><p className="text-left block px-4 py-2 text-gray-800 hover:bg-darkBlue hover:text-white"><FontAwesomeIcon icon={faArrowRight} />&nbsp;Logout</p></Link>
                    </div>
                </nav>

                {/* Mobile Navigation Menu */}
                <div className={this.state.mobileMenuVisible ? "navbar-menu relative z-50 overflow-hidden" : "hidden navbar-menu relative z-50 overflow-hidden"} style={{ zIndex: 1000 }}>
                    {/* Screen Cover */}
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />

                    {/* Menu */}
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-hidden">
                        {/* Branding & Closing Button */}
                        <div className="flex items-center mb-8">
                            <Link href="/" passHref>
                                <a className="mr-auto text-3xl font-bold leading-none">
                                    <Image className="h-10 w-auto" src="https://matrix.anodyne8709.repl.co/assets/images/matrix-nobg.png" alt="" height={45} width={45} />
                                </a>
                            </Link>
                            <button className="navbar-close" onClick={() => this.toggleMobileMenu()}>
                                <svg className="h-6 w-6 text-darkBlue cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Links */}
                        <div>
                            <ul>
                                <li className="mb-1">
                                    <Link href="/" passHref>
                                        <a className={this.props.page.toLowerCase() === "home" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faHouseUser} />&nbsp;Home</a>
                                    </Link>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <Link href="about" passHref>
                                        <a className={this.props.page.toLowerCase() === "about" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faInfoCircle} />&nbsp;About</a>
                                    </Link>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <Link href="applications" passHref>
                                        <a className={this.props.page.toLowerCase() === "applications" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faClipboard} />&nbsp;Applications</a>
                                    </Link>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <Link href="partners" passHref>
                                        <a className={this.props.page.toLowerCase() === "partners" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faUsers} />&nbsp;Partners</a>
                                    </Link>
                                </li>
                                <br />
                                <li className="mb-1">
                                    <Link href="resources" passHref>
                                        <a className={this.props.page.toLowerCase() === "resources" ? "text-sm text-darkBlue" : "text-sm text-darkGrey hover:text-darkBlue"}><FontAwesomeIcon icon={faWrench} />&nbsp;Resources</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Bottom Components */}
                        <div className="mt-auto">
                            {/* Login */}
                            <div className="pt-6">
                                {
                                    this.props.user === null ?
                                        <Link href={this.props.APIOnline ? "https://matrixwebsite.cssudii.tk/api/v1/oauth/login" : "/500"} passHref>
                                            <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center border rounded border-darkGrey hover:border-transparent text-darkGrey hover:text-white hover:bg-darkGrey text-xs font-semibold"><FontAwesomeIcon icon={faArrowRight} className="mr-2" />Login</a>
                                        </Link>
                                        :
                                        <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center border rounded border-darkGrey hover:border-transparent text-darkGrey hover:text-white hover:bg-darkGrey text-xs font-semibold">{this.props.user.username}</a>
                                }
                            </div>

                            {/* Social Links */}
                            <div className="mt-3 lg:mb-0 mb-3 text-center">
                                <a href="https://twitter.com/MatrixDevelopm3" target="_blank" rel="noreferrer">
                                    <button className="transition duration-500 ease-in-out transform hover:-translate-y-3 bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-twitter"></i>
                                    </button>
                                </a>
                                <a href="https://reddit.com/" target="_blank" rel="noreferrer">
                                    <button className="transition duration-500 ease-in-out transform hover:-translate-y-3 bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-reddit"></i>
                                    </button>
                                </a>
                                <a href="https://www.instagram.com/official_matrix_development/" target="_blank" rel="noreferrer">
                                    <button className="transition duration-500 ease-in-out transform hover:-translate-y-3 bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fab fa-instagram"></i>
                                    </button>
                                </a>
                                <a href="https://github.com/MatrixDevelopment-GH" target="_blank" rel="noreferrer">
                                    <button className="transition duration-500 ease-in-out transform hover:-translate-y-3 bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
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