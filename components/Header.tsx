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
                <Bars className={styles["header-bars"]}/>
                <h1 className={styles["header-title"]}>Imagining great things.</h1>
            </div>
        </div>
    );
}