import { Character } from "./Character";
import { Nav } from "./Nav";
import type { NextComponent } from "../structures/Types";

import { useEffect } from "react";

import styles from "../styles/App.module.scss";

export const Header: NextComponent = () => {
    useEffect((): void => {
        const scrollBtn: HTMLSpanElement = document.getElementById("scroll-btn") as HTMLSpanElement;
        const about: HTMLElement = document.getElementById("about") as HTMLElement;
        scrollBtn.addEventListener("click", (_event: MouseEvent): void => {
            about.scrollIntoView({
                behavior: "smooth"
            });
        });
    })

    return (
        <div className={styles["header-container"]} id="header">
            <Nav />

            <div className={styles["header-container-content"]}>
                <div className={styles["header-title-container"]}>
                    <h1 className={`${styles["header-title-first"]} text`}>Ascendus</h1>
                    <h1 className={`${styles["header-title-second"]} text`}>Ascendus</h1>
                    <h1 className={`${styles["header-title-third"]} text`}>Ascendus</h1>
                    <h1 className={`${styles["header-title-fourth"]} text`}>Ascendus</h1>
                    <h1 className={`${styles["header-title-fifth"]} text`}>Ascendus</h1>
                </div>
                
                <div className={styles["header-info-container"]}>
                    <span className={`${styles["header-info-header"]} text`}>
                        Developer
                        &nbsp;
                        &nbsp;
                        ⎯⎯⎯⎯⎯⎯⎯⎯⎯
                    </span>

                    <h2 className={`${styles["header-info-subheader"]} text`}>I<Character unicode={"'"} />m a full-stack web, application and Discord bot developer.</h2>
                    <p className={`${styles["header-info-text"]} text`}>
                        I<Character unicode={"'"} />ve had experience with full-stack web <Character unicode={"("} />including web design and API development<Character unicode={")"} />, Discord bot development, application development and some game developed over the past two years.
                    </p>
                </div>

                <span className={styles["scroll-btn"]} id="scroll-btn">
                    <span className={styles["mouse"]}>
                        <span></span>
                    </span>
                </span>
            </div>
        </div>
    );
}