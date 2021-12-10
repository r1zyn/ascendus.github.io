import { Bars } from "./Bars";
import type { CSSProperties } from "react";
import { Nav } from "./Nav";
import type { NextComponent } from "../structures/Types";

import styles from "../styles/App.module.scss";

export const Header: NextComponent = () => {
    return (
        <div className={styles["header-container"]}>
            <Nav />
            <div className={styles["header-container-content"]}>
                <Bars className={styles["header-bars"]} />
                <div className={styles["header-items"]}>
                    <h1 className={styles["header-title"]}>Imagining great things.</h1>
                    <p className={styles["header-text"]}>Hey there, I&apos;m Ascendus, a full-stack website, application and partial game developer.</p>
                </div>
            </div>
        </div>
    );
}