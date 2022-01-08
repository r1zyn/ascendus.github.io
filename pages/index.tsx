import { Background } from "../components/Background";
import { Character } from "../components/Character";
import { Fragment } from "react";
import { Header } from "../components/Header";
import type { HomeProps, User } from "../src/Interfaces";
import { Meta } from "../components/Meta";
import type { NextPage } from "next";

import { useEffect } from "react";

import styles from "../styles/App.module.scss";

const Home: NextPage<HomeProps> = ({ user }) => {
    useEffect((): void => {
        console.log(user);
        const viewProjectsButton: HTMLElement = document.getElementById("view-projects") as HTMLElement;
        const projectsSection: HTMLElement = document.getElementById("experience") as HTMLElement; // Change to projects section later
        viewProjectsButton.addEventListener("click", (_event: MouseEvent): void => {
            projectsSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    return (
        <Fragment>
            <Meta />

            <main>
                <Background className={styles["background"]} />

                <Header />

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
                                I started my programming journey during the <Character unicode="f"/>irst lockdown in New Zealand during March 2020, ambitious to begin creating Discord bots for both personal and public use. Ever since, I have continued to expand my knowledge to websites, applications, NPM packages, Command Line Interfaces, REST apis and some game development. I<Character unicode="'" />ve learnt several languages starting from JavaScript <Character unicode="(" />NodeJS<Character unicode=")" /> to TypeScript, Python, Lua, C<Character unicode="#" />, Go and much more.
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
                                    <text id="stat-2" transform="translate(30 135)" fill="#ffffff" fontFamily="Montserrat" fontSize="18">
                                        <tspan x="0" y="0">Discord Bots</tspan>
                                    </text>
                                </svg>
                            </div>

                            <div className={styles["section-one-stat-card"]}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="182.024" height="168.718" viewBox="0 0 182.024 168.818">
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width="230" height="250" fill="#f26c4f" />
                                    <polygon points="280,150 280,190 240,190" transform="translate(-95 -20)" fill="#1f1f1f" strokeWidth={1} stroke="#1f1f1f" />
                                    <text id="stat" transform="translate(60 100)" fill="#ffffff" fontFamily="Montserrat" fontSize="100">
                                        <tspan x="0" y="0">7</tspan>
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
                                    <text id="stat" transform="translate(50 100)" fill="#ffffff" fontFamily="Montserrat" fontSize="100">
                                        <tspan x="0" y="0">4</tspan>
                                    </text>
                                    <text id="stat-2" transform="translate(40 135)" fill="#ffffff" fontFamily="Montserrat" fontSize="20">
                                        <tspan x="0" y="0">Packages</tspan> 
                                    </text>
                                </svg>
                            </div>

                            <div className={styles["section-one-view-projects"]}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="182.024" height="168.718" viewBox="0 0 182.024 168.818">
                                    <rect id="Rectangle_2" data-name="Rectangle 2" width="230" height="250" fill="#1f1f1f" />
                                    <polygon points="280,150 280,190 240,190" transform="translate(-95 -20)" fill="#1f1f1f" strokeWidth={1} stroke="#1f1f1f" />
                                    <text id="view-projects" transform="translate(30 100)" fill="#f26c4f" fontFamily="Montserrat" fontSize="15">
                                        <tspan x="0" y="0">→ View projects</tspan> 
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["section-two-container"]} id="experience">
                    <div className={styles["section-two-content"]}>
                        <div className={styles["section-two-info-container"]}>
                            <span className={`${styles["section-two-info-header"]} text`}>
                                Languages
                                &nbsp;
                                &nbsp;
                                ⎯⎯⎯⎯⎯⎯⎯⎯⎯
                            </span>

                            <div className={styles["section-one-languages"]}>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

Home.getInitialProps = async ({ req }): Promise<HomeProps> => {
    const id: string = process.env.USER_ID as string;
    const response: Response = await fetch(`https://discord.com/api/v9/users/${id}`, {
        headers: {
            "Authorization": `Bot ${process.env.TOKEN as string}`
        }
    });

    if (!response.ok) throw new Error(`An error occured while attemping to fetch user "${id}" from Discord API. Status code: ${await response.text()}`);

    const user: User = await (response.json() as Promise<User>);

    return {
        user
    };
};

export default Home;