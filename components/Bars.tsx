import { BarsOptions } from "../structures/Interfaces";
import { Link } from "../structures/NextComponents";
import type { NextComponent } from "../structures/Types";

export const Bars: NextComponent<BarsOptions> = ({ className }: BarsOptions) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="291" viewBox="0 0 8 291" className={className}>
            <Link href="/#header" passHref>
                <rect id="rectangle-one" data-name="Rectangle 1" width="4" height="50" fill="#F26C4F"/>
            </Link>

            <rect id="rectangle-two" data-name="Rectangle 2" width="4" height="50" transform="translate(0 60)" fill="#F26C4F" />
            <rect id="rectangle-three" data-name="Rectangle 3" width="4" height="50" transform="translate(0 120)" fill="#F26C4F" />
        </svg>
    );
}