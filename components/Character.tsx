import { CharacterProps } from "../src/Interfaces";
import { NextComponent } from "../src/Types";

export const Character: NextComponent<CharacterProps> = ({ unicode }: CharacterProps) => {
    return (
        <span style={{ fontFamily: "sans-serif"}}>{unicode}</span>
    );
}