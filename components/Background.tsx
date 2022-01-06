import type { BackgroundProps } from "../structures/Interfaces";
import type { NextComponent } from "../structures/Types";

export const Background: NextComponent<BackgroundProps> = ({ className }: BackgroundProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x={0} y={0} width={1232} height={616} viewBox="0 0 1165.4054054054054 582.7027027027027" className={className}>
            <rect x="0px" y="0px" width="100%" height="100%" opacity={0} />
            <defs>
                <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717    L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859    c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287    l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285    L284.286,256.002z" transform="matrix(0.02467871819169629 -0.013461119357587684 0.013461119357587684 0.02467871819169629 31.236142459575685 166.1282355706606)" id="L1_0" />
                <path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z" transform="matrix(0.02787698619067669 0 0 0.02787698619067669 273.86349153518677 253.86349153518677)" id="L1_1" />
                <path d="M72.72,65.686H0L36.36,7.034L72.72,65.686z M5.388,62.686h61.943L36.36,12.727L5.388,62.686z" transform="matrix(0.23121275653325699 0.06606078569855867 -0.06606078569855867 0.23121275653325699 96.781280390949 316.21491450222476)" id="L1_2" />
                <path d="m489.609 506.1h-473.118c-9.108 0-16.491-7.384-16.491-16.491v-473.118c0-9.108 7.383-16.491 16.491-16.491h473.119c9.107 0 16.49 7.383 16.49 16.491v473.118c0 9.107-7.383 16.491-16.491 16.491zm-456.628-32.982h440.138v-440.137h-440.138z" transform="matrix(0.02371541459900623 0.009881422977626666 -0.009881422977626666 0.02371541459900623 194.4940725347256 63.494072508046514)" id="L1_4" />
            </defs>
            <g>
                <pattern id="pattern_L1_0" width={350} height={550} patternUnits="userSpaceOnUse" fill="#F26C4F">
                    <use xlinkHref="#L1_0" x={0} y={-40} />
                </pattern>
                <rect x={0} y={0} width="100%" height="100%" fill="url(#pattern_L1_0)" />
                <rect x={10} y={100} width="100%" height="100%" fill="url(#pattern_L1_0)" />
            </g>
            <g>
                <pattern id="pattern_L1_1" width={350} height={350} patternUnits="userSpaceOnUse" fill="#F26C4F">
                    <use xlinkHref="#L1_1" x={0} y={70} />
                </pattern>
                <rect x={0} y={0} width="100%" height="100%" fill="url(#pattern_L1_1)" />
            </g>
            <g>
                <pattern id="pattern_L1_2" width={350} height={350} patternUnits="userSpaceOnUse" fill="#F26C4F">
                    <use xlinkHref="#L1_2" x={-10} y={0} />
                </pattern>
                <rect x={0} y={0} width="100%" height="100%" fill="url(#pattern_L1_2)" />
            </g>
            <g>
                <pattern id="pattern_L1_4" width={350} height={350} patternUnits="userSpaceOnUse" fill="#F26C4F">
                    <use xlinkHref="#L1_4" x={30} y={100} />
                </pattern>
                <rect x={0} y={0} width="100%" height="100%" fill="url(#pattern_L1_4)" />
            </g>
        </svg>
    );
};