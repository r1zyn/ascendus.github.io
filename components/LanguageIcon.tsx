import type { LanguageIconProps } from "../src/Interfaces";
import type { NextComponent } from "../src/Types";

import styles from "../styles/App.module.scss";

export const LanguageIcon: NextComponent<LanguageIconProps> = ({ iconURL }) => {
    return <div className={styles["language-icon"]}></div>
};