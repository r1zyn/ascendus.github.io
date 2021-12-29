import { CSSProperties } from "react";

export interface BarsOptions {
    className?: string | undefined;
};

export interface CharacterOptions {
    unicode: string;
};

export interface MetaDataOptions {
    MetaTitle: string;
    MetaDescription: string;
    MetaImage: string;
    MetaColor: string;
    MetaFavicon: string;
    MetaFaviconType: string;
};

export interface LoaderOptions {
    isLoading: boolean;
};