import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Bars } from "../components/Bars";
import { Dispatch, Fragment, SetStateAction } from "react";
import { Loader } from "../components/Loader";

import { useEffect, useState } from "react";

function App({ Component, pageProps, router }: AppProps): JSX.Element {
    const [isLoading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>]
    const handleStart = (): void => setLoading(true);

    const handleComplete = (): void => {
        setTimeout((): void => {
            return setLoading(false);
        }, 5000)
    };

    useEffect((): (() => void) => {
        router.events.on("routeChangeStart", (): void => handleStart());
        router.events.on("routeChangeComplete", (): void => handleComplete());
        router.events.on("routeChangeError", (): void => handleComplete());

        return (): void => {
            router.events.on("routeChangeStart", (): void => handleStart());
            router.events.on("routeChangeComplete", (): void => handleComplete());
            router.events.on("routeChangeError", (): void => handleComplete());
        };
    }, [router]);

    return (
        <Fragment>
            {
                isLoading ? <Loader isLoading={isLoading} /> : <>
                    <Component {...pageProps} />
                    <Bars className="bars" />
                </>
            }
        </Fragment>
    );
}

export default App;