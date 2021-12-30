import type { NextComponent } from "../structures/Types";
import type { TextElement } from "../structures/Interfaces";

import styles from "../styles/App.module.scss";

export const SearchResult: NextComponent<TextElement> = ({ id, text }: TextElement) => {
    return (
        <div className={styles["search-result"]}>
            {text.length > 60 ? `${text.slice(0, 60)}...` : text}
        </div>
    );
}