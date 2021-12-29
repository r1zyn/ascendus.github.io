import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Bars } from "../components/Bars";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";
import { Loader } from "../components/Loader";

function App({ Component, pageProps, router }: AppProps): JSX.Element {
    const [isLoading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>]

    useEffect((): (() => void) => {
        setLoading(true)
        setTimeout(() => setLoading(false), 5000);

        return (): void => {
            setLoading(true)
            setTimeout(() => setLoading(false), 5000);
        }
    }, []);

    return (
        <Fragment>
            {
                isLoading ?
                    <Loader isLoading={isLoading} />
                    :
                    <Fragment>
                        <Component {...pageProps} />
                        <Bars className="bars" />
                    </Fragment>
            }
        </Fragment>
    );
}

export default App;