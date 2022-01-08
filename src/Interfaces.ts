import { Dispatch, SetStateAction } from "react";

export interface ActivityData {
    type?: number;
    state?: string;
    name?: string;
    id?: string;
    created_at?: number;
    timestamps?: ActivityTimestamp;
    sync_id?: string;
    session_id?: string;
    party?: ActivityParty;
    flags?: number;
    details?: string;
    assets?: ActivityAssets;
    buttons?: string[];
    application_id?: string;
};

export interface ActivityAssets {
    large_text?: string;
    large_image?: string;
    small_image?: string;
    small_text?: string;
};

export interface ActivityParty {
    id?: string;
};

export interface ActivityTimestamp {
    start?: number;
    end?: number;
};

export interface BackgroundProps {
    className?: string | undefined;
};

export interface BarsProps {
    className?: string | undefined;
};

export interface CharacterProps {
    unicode: string;
};

export interface HomeProps {
    user: User;
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

export interface LoaderProps {
    isLoading: boolean;
};

export interface NavLinks {
    scrollToHome: () => void;
    scrollToAbout: () => void;
    scrollToExperience: () => void;
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

export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: string;
    system?: string;
    mfa_enabled?: string;
    banner?: string;
    accent_color: string;
    locale?: string;
    verified?: string;
    email?: string;
    flags?: string;
    premium_type?: string;
    public_flags?: string;
    platform?: "web" | "mobile" | "desktop";
    presence: {
        activities: ActivityData[];
        status: string;
    }
};

export interface PresenceData {
    "success": boolean;
    "data"?: {
        "spotify"?: {
            "track_id"?: string;
            "timestamps"?: {
                "start"?: number;
                "end"?: number;
            },
            "song"?: string;
            "artist"?: string;
            "album_art_url"?: string;
            "album"?: string;
        },
        "listening_to_spotify"?: boolean;
        "kv"?: {},
        "discord_user"?: {
            "username"?: string;
            "public_flags"?: number;
            "id"?: string;
            "discriminator"?: string;
            "avatar"?: string;
        },
        "discord_status"?: string;
        "activities": ActivityData[];
        "active_on_discord_web": boolean;
        "active_on_discord_mobile": boolean;
        "active_on_discord_desktop": boolean;
    }
}