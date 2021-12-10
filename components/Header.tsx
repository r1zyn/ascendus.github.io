import type { NextComponent } from "../structures/Types";

import styles from "../styles/App.module.scss";

export const Header: NextComponent = () => {
    return (
        <div className={styles["header-container"]}>
            <div className={styles["header-container-content"]}>
                <h1 className={styles["header-title"]}>Imagining great things.</h1>
            </div>
        </div>
    );
}