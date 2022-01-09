import type { LanguageIconProps } from "../src/Interfaces";
import type { NextComponent } from "../src/Types";

import styles from "../styles/App.module.scss";

export const Icon: NextComponent<LanguageIconProps> = ({ iconURL }) => {
    return <div className={styles["icon"]} style={{ backgroundImage: `url(${iconURL})`, backgroundPosition: "center", backgroundSize: "7rem"}}></div>
};