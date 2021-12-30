import { CharacterProps } from "../structures/Interfaces";
import { NextComponent } from "../structures/Types";

export const Character: NextComponent<CharacterProps> = ({ unicode }: CharacterProps) => {
    return (
        <span style={{ fontFamily: "sans-serif"}}>{unicode}</span>
    );
}