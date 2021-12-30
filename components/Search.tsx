import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "./BaseComponents"
import type { NextComponent } from "../structures/Types";
import type { SearchBarProps } from "../structures/Interfaces";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/App.module.scss";
import { SearchModal } from "./SearchModal";

export const Search: NextComponent<SearchBarProps> = ({ height, width, color, className }: SearchBarProps) => {
    const [openModal, toggleModal]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false) as [boolean, Dispatch<SetStateAction<boolean>>];
    
    useEffect((): void => {
        document.addEventListener("keydown", (event: KeyboardEvent): boolean | void => {
            if (event.key === "Escape" && openModal) toggleModal(false);
            if (event.ctrlKey && event.key === "k") {
                toggleModal(!openModal);
                event.preventDefault();
                return false;
            };

            // Use collection for cooldowns
        });
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