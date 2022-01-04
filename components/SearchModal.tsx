import { FormEvent, useEffect } from "react";
import { NextComponent } from "../structures/Types";
import { SearchModalProps, TextElement } from "../structures/Interfaces";
import { SearchResult } from "./SearchResult";

import styles from "../styles/App.module.scss";

export const SearchModal: NextComponent<SearchModalProps> = ({ openModal, toggleModal }: SearchModalProps) => {
    const searchResults: TextElement[] = [];
    
    useEffect((): void => {
        const searchBar: HTMLElement = document.getElementById("search-bar") as HTMLElement;

        searchBar.addEventListener("input", (event: Event): void => {
            const elements: TextElement[] = [];
            document.querySelectorAll(".text").forEach((element: Element, _key: number, _parent: NodeListOf<Element>): void => {
                elements.push({
                    id: element.id,
                    text: (element as HTMLElement).innerText
                });
            });

            elements.forEach((element: TextElement): void => {
                if (element.text.toLowerCase().split(" ").includes((event.target as HTMLInputElement).value.toLowerCase())) {
                    searchResults.push(element);
                };
            });
        });
    }, [searchResults]);
    return (
        <div className={openModal ? styles["search-modal"] : styles["hidden"]}>
            <button className={styles["overlay-close-button"]} onClick={(): void => toggleModal(!openModal)}>
                <svg className={styles["overlay-close-button-icon"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <form onSubmit={(event: FormEvent<HTMLFormElement>): void => event.preventDefault()}>
                <input type="text" placeholder="Search" className={styles["search-bar"]} name="q" id="search-bar" />
            </form>

            <div className={styles["search-results-container"]}>
                {
                    searchResults.length === 0 ?
                        <SearchResult id="none" text="No search results found." />
                        : searchResults.map((result: TextElement): JSX.Element => {
                            return (
                                <SearchResult key={result.id} id={result.id} text={result.text} />
                            );
                        })
                }
            </div>
        </div>
    );
}