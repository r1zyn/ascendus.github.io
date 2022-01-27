const isProduction = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
module.exports = {
    assetPrefix: isProduction ? "https://cdn.statically.io/gh/Ascendus/ascendus.github.io/gh-pages/" : "",
    // images: {
    //     loader: "custom"
    // },
    reactStrictMode: true
}