import { Dispatch, SetStateAction } from "react";

export interface BackgroundProps {
    className?: string | undefined;
};

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
};

export interface Links {
    website: string;
    github: string;
    discord: string;
    bio: string;
    astura: string;
    matrix: string;
    email: string;
};

export interface MetaDataOptions {
    MetaTitle: string;
    MetaDescription: string;
    MetaImage: string;
    MetaColor: string;
    MetaFavicon: string;
    MetaFaviconType: string;
};

export interface NavLinks {
    scrollToHome: () => void;
    scrollToAbout: () => void;
    scrollToExperience: () => void;
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