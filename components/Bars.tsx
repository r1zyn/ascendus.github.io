import { BarsOptions } from "../structures/Interfaces";
import type { NextComponent } from "../structures/Types";

export const Bars: NextComponent<BarsOptions> = ({ className }: BarsOptions) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="291" viewBox="0 0 8 291" className={className}>
            <rect id="rectangle-one" data-name="Rectangle 1" width="8" height="91" fill="#ffffff" />
            <rect id="rectangle-two" data-name="Rectangle 2" width="8" height="91" transform="translate(0 100)" fill="#ffffff" />
            <rect id="rectangle-three" data-name="Rectangle 3" width="8" height="91" transform="translate(0 200)" fill="#ffffff" />
        </svg>
    );
}