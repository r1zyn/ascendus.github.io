import { Head } from "../structures/NextComponents";
import { MetaData } from "../structures/Constants";
import type { NextComponentType } from "next";
import { URL } from "../structures/Constants";

export const Meta: NextComponentType = () => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="title" content={MetaData["MetaTitle"]} />
            <meta name="description" content={MetaData["MetaDescription"]} />

            <meta name="theme-color" content={MetaData["MetaColor"]} />
            <meta name="apple-mobile-web-app-status-bar-style" content={MetaData["MetaColor"]} />
            <meta name="msapplication-navbutton-color" content={MetaData["MetaColor"]} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={URL} />
            <meta property="og:title" content={MetaData["MetaTitle"]} />
            <meta property="og:description" content={MetaData["MetaDescription"]} />
            <meta property="og:image" content={MetaData["MetaImage"]} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={URL} />
            <meta property="twitter:title" content={MetaData["MetaTitle"]} />
            <meta property="twitter:description" content={MetaData["MetaDescription"]} />
            <meta property="twitter:image" content={MetaData["MetaImage"]} />

            <title>{MetaData["MetaTitle"]}</title>
            <link rel="icon" type={MetaData["MetaFaviconType"]} href={MetaData["MetaFavicon"]} />
            <link rel="shortcut icon" type={MetaData["MetaFaviconType"]} href={MetaData["MetaFavicon"]} />
            <link rel="apple-touch-icon" type={MetaData["MetaFaviconType"]} href={MetaData["MetaFavicon"]} />
        </Head>
    );
}