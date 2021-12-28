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
            </main>
        </Fragment>
    );  
}

export default Home
