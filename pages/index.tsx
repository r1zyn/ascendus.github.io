import { Character } from "../components/Character";
import { Fragment } from "react";
import { Header } from "../components/Header";
import { Meta } from "../components/Meta";
import type { NextPage } from "next";

import styles from "../styles/App.module.scss";

const Home: NextPage = () => {
    return (
        <Fragment>
            <Meta />

            <main>
                <Header />
                {/*
                    <div className={styles["section-one-container"]} id="about">
                        <div className={styles["header-info-container"]}>
                            <span className={styles["header-info-header"]}>
                                Developer
                                &nbsp;
                                &nbsp;
                                ⎯⎯⎯⎯⎯⎯⎯⎯⎯
                            </span>

                            <h2 className={styles["header-info-subheader"]}>I<Character unicode={"'"} />m a full-stack web, application and Discord bot developer.</h2>
                            <p className={styles["header-info-text"]}>
                                I<Character unicode={"'"} />ve had experience with full-stack web <Character unicode={"("} />including web design and API development<Character unicode={")"} />, Discord bot development, application development and some game developed over the past two years.
                            </p>
                        </div>
                    </div>
                */}
            </main>
        </Fragment>
    );
}

export default Home
