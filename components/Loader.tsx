import type { LoaderOptions } from "../structures/Interfaces";
import type { NextComponent } from "../structures/Types";

import styles from "../styles/Loader.module.css";

export const Loader: NextComponent<LoaderOptions> = ({ isLoading }: LoaderOptions) => {
    return (
        <div className={isLoading ? styles["loader"] : styles["hidden"]}>
            <div className={styles["circle"]}></div>
            <div className={styles["circle"]}></div>
            <div className={styles["circle"]}></div>
            <div className={styles["circle"]}></div>
            <div className={styles["circle"]}></div>
        </div>
    );
}