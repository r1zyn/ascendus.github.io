import { CharacterOptions } from "../structures/Interfaces";
import { NextComponent } from "../structures/Types";

export const Character: NextComponent<CharacterOptions> = ({ unicode }: CharacterOptions) => {
    return (
        <span style={{ fontFamily: "sans-serif"}}>{unicode}</span>
    );
}