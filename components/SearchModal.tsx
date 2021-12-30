import { NextComponent } from "../structures/Types";
import { SearchModalProps } from "../structures/Interfaces";

import styles from "../styles/App.module.scss";

export const SearchModal: NextComponent<SearchModalProps> = ({ openModal, toggleModal }: SearchModalProps) => {
    return (
        <div className={openModal ? styles["search-modal"] : styles["hidden"]}>
            <button className={styles["overlay-close-button"]} onClick={(): void => toggleModal(!openModal)}>
                <svg className={styles["overlay-close-button-icon"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <form>
                <input type="text" placeholder="Search" className={styles["search-bar"]} name="q" />
            </form>
        </div>
    );
}