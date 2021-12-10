import { Head, Image } from "../structures/NextComponents";
import { Header } from "../components/Header";
import { Meta } from "../components/Meta";
import type { NextPage } from "next";

import styles from "../styles/App.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Meta />

            <main className={styles.main}>
                <Header />
            </main>
        </div>
    )
}

export default Home
