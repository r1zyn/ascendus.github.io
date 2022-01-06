import { Background } from "../components/Background";
import { Fragment } from "react";
import { Header } from "../components/Header";
import { Meta } from "../components/Meta";
import type { NextPage } from "next";

import styles from "../styles/App.module.scss";

const Home: NextPage = () => {
    return (
        <Fragment>
            <Meta />

            <main>
                <Background className={styles["background"]} />
                <Header />
                {
                    <div className={styles["section-one-container"]} id="about">
                        <div className={styles["section-one-content"]}>
                            <div className={styles["section-one-info-container"]}>
                                <span className={`${styles["section-one-info-header"]} text`}>
                                    About Me
                                    &nbsp;
                                    &nbsp;
                                    ⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                </span>

                                <h2 className={`${styles["section-one-info-subheader"]} text`}>The developer imagining great things.</h2>
                                <p className={`${styles["section-one-info-text"]} text`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>

                            <div className={styles["section-one-stats-container"]}>
                                <div className={styles["section-one-stat-card"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="182.024" height="168.718" viewBox="0 0 182.024 168.818">
                                        <rect id="Rectangle_2" data-name="Rectangle 2" width="230" height="250" fill="#f26c4f" />
                                        <polygon points="280,150 280,190 240,190" transform="translate(-95 -20)" fill="#1f1f1f" strokeWidth={1} stroke="#1f1f1f" />
                                        <text id="stat" transform="translate(40 100)" fill="#ffffff" fontFamily="Montserrat" fontSize="100">
                                            <tspan x="0" y="0">15</tspan>
                                        </text>
                                        <text id="stat-2" transform="translate(40 135)" fill="#ffffff" fontFamily="Montserrat" fontSize="20">
                                            <tspan x="0" y="0">Websites</tspan>
                                        </text>
                                    </svg>
                                </div>

                                <div className={styles["section-one-stat-card"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="182.024" height="168.718" viewBox="0 0 182.024 168.818">
                                        <rect id="Rectangle_2" data-name="Rectangle 2" width="230" height="250" fill="#f26c4f" />
                                        <polygon points="280,150 280,190 240,190" transform="translate(-95 -20)" fill="#1f1f1f" strokeWidth={1} stroke="#1f1f1f" />
                                        <text id="stat" transform="translate(40 100)" fill="#ffffff" fontFamily="Montserrat" fontSize="100">
                                            <tspan x="0" y="0">15</tspan>
                                        </text>
                                        <text id="stat-2" transform="translate(40 135)" fill="#ffffff" fontFamily="Montserrat" fontSize="20">
                                            <tspan x="0" y="0">Websites</tspan>
                                        </text>
                                    </svg>
                                </div>
 
                                <div className={styles["section-one-stat-card"]}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="182.024" height="168.718" viewBox="0 0 182.024 168.818">
                                        <rect id="Rectangle_2" data-name="Rectangle 2" width="230" height="250" fill="#f26c4f" />
                                        <polygon points="280,150 280,190 240,190" transform="translate(-95 -20)" fill="#1f1f1f" strokeWidth={1} stroke="#1f1f1f" />
                                        <text id="stat" transform="translate(40 100)" fill="#ffffff" fontFamily="Montserrat" fontSize="100">
                                            <tspan x="0" y="0">15</tspan>
                                        </text>
                                        <text id="stat-2" transform="translate(40 135)" fill="#ffffff" fontFamily="Montserrat" fontSize="20">
                                            <tspan x="0" y="0">Websites</tspan>
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </main>
        </Fragment>
    );
}

export default Home;