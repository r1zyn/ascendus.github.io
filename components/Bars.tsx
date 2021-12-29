import { BarsOptions } from "../structures/Interfaces";
import type { NextComponent } from "../structures/Types";

import { useEffect } from "react";

export const Bars: NextComponent<BarsOptions> = ({ className }: BarsOptions) => {
    useEffect((): void  => {
        const rectangleOne: HTMLElement = document.getElementById("rectangle-one") as HTMLElement;
        const rectangleTwo: HTMLElement = document.getElementById("rectangle-two") as HTMLElement;
        const rectangleThree: HTMLElement = document.getElementById("rectangle-three") as HTMLElement;

        const header: HTMLElement = document.getElementById("header") as HTMLElement;
        const about: HTMLElement = document.getElementById("about") as HTMLElement;

        const bars: HTMLElement[] = [rectangleOne, rectangleTwo, rectangleThree];

        bars.forEach((bar: HTMLElement): void => {
            bar.addEventListener("click", (_event: MouseEvent): void => {
                switch (bar.id) {
                    case "rectangle-one":
                        window.scrollTo({
                            top: header.scrollTop,
                            behavior: "smooth"
                        });
                        break;

                    case "rectangle-two": 
                        window.scrollTo({
                            top: about.scrollTop,
                            behavior: "smooth"
                        });
                        break;
                }
            });
        });
    }, []);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="291" viewBox="0 0 8 291" className={className}>
            <rect id="rectangle-one" data-name="Rectangle 1" width="4" height="50" fill="#F26C4F" />
            <rect id="rectangle-two" data-name="Rectangle 2" width="4" height="50" transform="translate(0 60)" fill="#F26C4F" />
            <rect id="rectangle-three" data-name="Rectangle 3" width="4" height="50" transform="translate(0 120)" fill="#F26C4F" />
        </svg>
    );
}