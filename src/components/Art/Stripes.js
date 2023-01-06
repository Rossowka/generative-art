import React from 'react';
import { getColors, randomChoiceFrom } from '../../utils';

import './styles.scss';

function Stripes({ props }) {
    const { boxSize, indexY, indexX } = props;
    const [ firstColor, secondColor, thirdColor ] = getColors(props.colorPalette);

    const PosX = boxSize * indexX;
    const PosY = boxSize * indexY;

    const offset = randomChoiceFrom([
        [boxSize, 0],
        [0, boxSize],
    ])

    return (
        <g className='stripes'>
            <rect
                x={PosX}
                y={PosY}
                width={boxSize}
                height={boxSize}
                fill={`#${firstColor}`}
                />
            <line
                x1={PosX + 0.25 * offset[0]}
                y1={PosY + 0.25 * offset[1]}
                x2={PosX + 0.25 * offset[0] + offset[1]}
                y2={PosY + 0.25 * offset[1] + offset[0]}
                stroke={`#${secondColor}`}
                strokeWidth='4'
                />
            <line
                x1={PosX + 0.5 * offset[0]}
                y1={PosY + 0.5 * offset[1]}
                x2={PosX + 0.5 * offset[0] + offset[1]}
                y2={PosY + 0.5 * offset[1] + offset[0]}
                stroke={`#${thirdColor}`}
                strokeWidth='3'
                />
            <line
                x1={PosX + 0.75 * offset[0]}
                y1={PosY + 0.75 * offset[1]}
                x2={PosX + 0.75 * offset[0] + offset[1]}
                y2={PosY + 0.75 * offset[1] + offset[0]}
                stroke={`#${secondColor}`}
                strokeWidth='4'
                />
        </g>
    );
}

export default Stripes;