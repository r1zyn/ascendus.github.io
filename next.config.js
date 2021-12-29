const isProduction = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
module.exports = {
    assetPrefix: isProduction ? "/ascendus.github.io/" : "",
    images: {
        loader: "custom"
    },
    reactStrictMode: true
}