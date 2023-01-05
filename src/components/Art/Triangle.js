import React from 'react';
import { getColors, randomChoiceFrom } from '../../utils';

function Triangle({ props }) {
    const { boxSize, indexY, indexX } = props;
    const [ foregroundColor, backgroundColor ] = getColors(props.colorPalette);

    const PosX = boxSize * indexX;
    const PosY = boxSize * indexY;

    const offset = randomChoiceFrom([boxSize, 0]);

    return (
        <g className='triangle'>
            <rect
                x={PosX}
                y={PosY}
                width={boxSize}
                height={boxSize}
                fill={`#${backgroundColor}`}
                />
            <path
                fill={`#${foregroundColor}`}
                d={`m ${PosX + offset} ${PosY} L ${PosX} ${PosY + boxSize} h ${boxSize} z`}
                />
        </g>
    )
}

export default Triangle;