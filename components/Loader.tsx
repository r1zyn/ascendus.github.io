import type { LoaderProps } from "../structures/Interfaces";
import type { NextComponent } from "../structures/Types";

import styles from "../styles/Loader.module.scss";

export const Loader: NextComponent<LoaderProps> = ({ isLoading }: LoaderProps) => {
    return (
        <div className={isLoading ? styles["loader"] : styles["hidden"]}>
            <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
            <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
            <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
            <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
            <div className={`${styles["circle"]} ${styles["loader"]}`}></div>
        </div>
    );
}