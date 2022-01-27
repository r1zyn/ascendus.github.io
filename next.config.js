const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        /** @type {import("next").NextConfig} */
        const nextDevConfig = {
            assetPrefix: "http://localhost:3000/",
            basePath: "./",
            pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
            reactStrictMode: true
        }

        return nextDevConfig;
    } else {
        /** @type {import("next").NextConfig} */
        const nextProdConfig = {
            assetPrefix: "https://cdn.statically.io/gh/Ascendus/ascendus.github.io/main/",
            basePath: "./",
            pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
            reactStrictMode: true
        }

        return nextProdConfig;
    }
}