import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "./BaseComponents"
import type { NextComponent } from "../structures/Types";
import type { SearchBarProps } from "../structures/Interfaces";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/App.module.scss";
import { SearchModal } from "./SearchModal";

export const SearchBar: NextComponent<SearchBarProps> = ({ height, width, color, className }: SearchBarProps) => {
    const [openModal, toggleModal]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>];
    
    SearchBar.prototype.toggleModal = toggleModal;

    useEffect((): (() => void) => {
        const overlay: HTMLElement = document.getElementById("overlay") as HTMLElement;

        overlay.addEventListener("click", (_event: MouseEvent): void => {
            if (openModal) return toggleModal(false);
        });

        document.addEventListener("keydown", (event: KeyboardEvent): void => {
            if (event.key === "Escape" && openModal) return toggleModal(false);
        });

        return () => {
            overlay.addEventListener("click", (_event: MouseEvent): void => {
                if (openModal) return toggleModal(false);
            });

            document.addEventListener("keydown", (event: KeyboardEvent): void => {
                if (event.key === "Escape" && openModal) return toggleModal(false);
            });
        };
    }, [openModal]);

    return (
        <div>
            <Icon icon={faSearch} height={height} width={width} color={color} className={className} onClick={(): void => toggleModal(!openModal)} />

            <div className={openModal ? styles["search-overlay"] : styles["hidden"]} id="overlay">
                <SearchModal openModal={openModal} toggleModal={toggleModal} />
            </div>
        </div>
    );
}