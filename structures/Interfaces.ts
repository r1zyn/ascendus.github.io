import { Dispatch, SetStateAction } from "react";

export interface BarsProps {
    className?: string | undefined;
};

export interface CharacterProps {
    unicode: string;
};

export interface ImageLoaderProps {
    src: string;
    width: number;
    quality?: number;
}

export interface MetaDataOptions {
    MetaTitle: string;
    MetaDescription: string;
    MetaImage: string;
    MetaColor: string;
    MetaFavicon: string;
    MetaFaviconType: string;
};

export interface LoaderProps {
    isLoading: boolean;
};

export interface SearchBarProps {
    height?: string | number;
    width?: string | number;
    color?: string;
    className?: string;
};

export interface SearchModalProps {
    openModal: boolean;
    toggleModal: Dispatch<SetStateAction<boolean>>;
};

export interface TextElement {
    id: string;
    text: string;
};