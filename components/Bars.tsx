import { BarsProps } from "../src/Interfaces";
import type { NextComponent } from "../src/Types";
import { Util } from "../src/functions/Utils";

import { useEffect } from "react";

import styles from "../styles/App.module.scss";

export const Bars: NextComponent<BarsProps> = ({ className }: BarsProps) => {
    useEffect((): void => {
        const rectangleOne: HTMLElement = document.getElementById("rectangle-one") as HTMLElement;
        const rectangleTwo: HTMLElement = document.getElementById("rectangle-two") as HTMLElement;
        const rectangleThree: HTMLElement = document.getElementById("rectangle-three") as HTMLElement;

        const header: HTMLElement = document.getElementById("header") as HTMLElement;
        const about: HTMLElement = document.getElementById("about") as HTMLElement;
        const experience: HTMLElement = document.getElementById("experience") as HTMLElement;

        if (Util.elementIsInView(header)) {
            rectangleOne.style.cssText += "filter: brightness(55%);";
            rectangleTwo.style.cssText = "bar:hover { filter: brightness(55%); cursor: pointer; }";
            rectangleThree.style.cssText = "bar:hover { filter: brightness(55%); cursor: pointer; }";
        };

        if (Util.elementIsInView(about)) {
            rectangleOne.style.cssText = "bar:hover { filter: brightness(55%); cursor: pointer; }";
            rectangleTwo.style.cssText += "filter: brightness(55%);";
            rectangleThree.style.cssText = "bar:hover { filter: brightness(55%); cursor: pointer; }";
        };

        if (Util.elementIsInView(experience)) {
            rectangleOne.style.cssText = "bar:hover { filter: brightness(55%); cursor: pointer; }";
            rectangleTwo.style.cssText = "bar:hover { filter: brightness(55%); cursor: pointer; }";
            rectangleThree.style.cssText += "filter: brightness(55%);";
        };

        const bars: HTMLElement[] = [rectangleOne, rectangleTwo, rectangleThree];
        bars.forEach((bar: HTMLElement): void => {
            bar.addEventListener("click", (_event: MouseEvent): void => {
                switch (bar.id) {
                    case "rectangle-one":
                        header.scrollIntoView({
                            behavior: "smooth"
                        });

                        break;

                    case "rectangle-two":
                        about.scrollIntoView({
                            behavior: "smooth"
                        });

                        break;

                    case "rectangle-three":
                        experience.scrollIntoView({
                            behavior: "smooth"
                        });

                        break;
                }
            });
        });
    }, []);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="291" viewBox="0 0 8 291" className={className}>
            <rect id="rectangle-one" data-name="Rectangle 1" width="4" height="50" fill="#F26C4F" className={styles["bar"]} />
            <rect id="rectangle-two" data-name="Rectangle 2" width="4" height="50" transform="translate(0 60)" fill="#F26C4F" className={styles["bar"]} />
            <rect id="rectangle-three" data-name="Rectangle 3" width="4" height="50" transform="translate(0 120)" fill="#F26C4F" className={styles["bar"]} />
        </svg>
    );
}