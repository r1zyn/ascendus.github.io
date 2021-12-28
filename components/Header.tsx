import { Character } from "./Character";
import { Nav } from "./Nav";
import type { NextComponent } from "../structures/Types";

import styles from "../styles/App.module.scss";

export const Header: NextComponent = () => {
    return (
        <div className={styles["header-container"]}>
            <Nav />

            <div className={styles["header-container-content"]}>
                <div className={styles["header-title-container"]}>
                    <h1 className={styles["header-title-first"]}>Ascendus</h1>
                    <h1 className={styles["header-title-second"]}>Ascendus</h1>
                    <h1 className={styles["header-title-third"]}>Ascendus</h1>
                    <h1 className={styles["header-title-fourth"]}>Ascendus</h1>
                    <h1 className={styles["header-title-fifth"]}>Ascendus</h1>
                </div>
                
                <div className={styles["header-info-container"]}>
                    <span className={styles["header-info-header"]}>
                        Developer
                        &nbsp;
                        &nbsp;
                        ⎯⎯⎯⎯⎯⎯
                    </span>

                    <h2 className={styles["header-info-subheader"]}>I<Character unicode={"'"} />m a full-stack web, application and Discord bot developer.</h2>
                    <p className={styles["header-info-text"]}>
                        I<Character unicode={"'"} />ve had experience with full-stack web <Character unicode={"("} />including web design and API development<Character unicode={")"} />, Discord bot development, application development and some game developed over the past two years.
                    </p>
                </div>
            </div>
        </div>
    );
}