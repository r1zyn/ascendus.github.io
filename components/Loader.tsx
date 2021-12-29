import type { LoaderOptions } from "../structures/Interfaces";
import type { NextComponent } from "../structures/Types";

import styles from "../styles/Loader.module.scss";

export const Loader: NextComponent<LoaderOptions> = ({ isLoading }: LoaderOptions) => {
    return (
        <div className={isLoading ? styles["background"] : styles["hidden"]}>
            <div className={isLoading ? styles["loader"] : styles["hidden"]}>
                <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
                <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
                <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
                <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
                <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
            </div>
        </div>
    );
}