import { Fragment } from "react";
import { Header } from "../components/Header";
import { Icon } from "../structures/Constants";
import { Image, Loader } from "../components/BaseComponents";
import { Meta } from "../components/Meta";
import type { NextPage } from "next";

import styles from "../styles/App.module.scss";

const Home: NextPage = () => {
    return (
        <Fragment>
            <Meta />

            <main>
                <Header />
                {
                    <div className={styles["section-one-container"]} id="about">
                        <div className={styles["section-one-content"]}>
                            <div className={styles["section-one-info-container"]}>
                                <span className={`${styles["section-one-info-header"]} text`}>
                                    About Me
                                    &nbsp;
                                    &nbsp;
                                    ⎯⎯⎯⎯⎯⎯⎯⎯⎯
                                </span>

                                <h2 className={`${styles["section-one-info-subheader"]} text`}>The developer imagining great things.</h2>
                                <p className={`${styles["section-one-info-text"]} text`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                        {/*<Image src={Icon} alt="Image of Ascendus" loader={Loader} height={150} width={150} />*/}
                    </div>
                }
            </main>
        </Fragment>
    );
}

export default Home
