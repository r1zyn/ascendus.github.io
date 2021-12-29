import { ImageLoader } from "next/image";
import { ImageLoaderOptions } from "../Interfaces"

const loader: ImageLoader = ({ src, width, quality }: ImageLoaderOptions) => {
    return `https://ascendus.github.io/${src}?w=${width}&q=${quality || 75}`;
};

export default loader;