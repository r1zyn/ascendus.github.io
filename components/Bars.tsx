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
        const bars: HTMLElement[] = [rectangleOne, rectangleTwo, rectangleThree];

        if (Util.elementIsInView(header)) {
            rectangleOne.classList.toggle("bar-active");
            rectangleTwo.classList.toggle("bar");
            rectangleThree.classList.toggle("bar");
        } else if (Util.elementIsInView(about)) {
            rectangleOne.classList.toggle("bar");
            rectangleTwo.classList.toggle("bar-active");
            rectangleThree.classList.toggle("bar");
        } if (Util.elementIsInView(experience)) {
            rectangleOne.classList.toggle("bar");
            rectangleTwo.classList.toggle("bar");
            rectangleThree.classList.toggle("bar-active");
        };

        window.onscroll = (_event: Event): void => {
            if (Util.elementIsInView(header)) {
                rectangleOne.classList.toggle("bar-active");
                rectangleTwo.classList.toggle("bar");
                rectangleThree.classList.toggle("bar");
            } else if (Util.elementIsInView(about)) {
                rectangleOne.classList.toggle("bar");
                rectangleTwo.classList.toggle("bar-active");
                rectangleThree.classList.toggle("bar");
            } if (Util.elementIsInView(experience)) {
                rectangleOne.classList.toggle("bar");
                rectangleTwo.classList.toggle("bar");
                rectangleThree.classList.toggle("bar-active");
            };
        };

        bars.forEach((bar: HTMLElement): void => {
            bar.addEventListener("click", (_event: MouseEvent): void => {
                switch (bar.id) {
                    case "rectangle-one":
                        header.scrollIntoView({
                            behavior: "smooth"
                        });

                        rectangleOne.classList.toggle("bar-active");
                        rectangleTwo.classList.toggle("bar");
                        rectangleThree.classList.toggle("bar");

                        break;

                    case "rectangle-two":
                        about.scrollIntoView({
                            behavior: "smooth"
                        });

                        rectangleOne.classList.toggle("bar");
                        rectangleTwo.classList.toggle("bar-active");
                        rectangleThree.classList.toggle("bar");

                        break;

                    case "rectangle-three":
                        experience.scrollIntoView({
                            behavior: "smooth"
                        });

                        rectangleOne.classList.toggle("bar");
                        rectangleTwo.classList.toggle("bar");
                        rectangleThree.classList.toggle("bar-active");

                        break;
                }
            });
        });
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="291" viewBox="0 0 8 291" className={className}>
            <rect id="rectangle-one" data-name="Rectangle 1" width="4" height="50" fill="#F26C4F" className={styles["bar"]} />
            <rect id="rectangle-two" data-name="Rectangle 2" width="4" height="50" transform="translate(0 60)" fill="#F26C4F" className={styles["bar"]} />
            <rect id="rectangle-three" data-name="Rectangle 3" width="4" height="50" transform="translate(0 120)" fill="#F26C4F" className={styles["bar"]} />
        </svg>
    );
}