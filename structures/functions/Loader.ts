import { ImageLoader } from "next/image";
import { ImageLoaderProps } from "../Interfaces";

const Loader: ImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    if (typeof window !== "undefined") {
        if (window.location.hostname === "localhost") {
            return `http://localhost:3000${src}?w=${width}&q=${quality || 75}` as string;
        } else if (window.location.hostname === "ascendus.github.io") {
            return `https://ascendus.github.io${src}?w=${width}&q=${quality || 75}` as string;
        } else {
            return `http://localhost:3000${src}?w=${width}&q=${quality || 75}` as string;
        };
    } else return `https://ascendus.github.io${src}?w=${width}&q=${quality || 75}` as string;
};

export default Loader;

"http://localhost:3000/assets/img/afb9f72545ce10d34cbdefbc2b805fe1.png"
"https://localhost:3000/assets/img/afb9f72545ce10d34cbdefbc2b805fe1.png"