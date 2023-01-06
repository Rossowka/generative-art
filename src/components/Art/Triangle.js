import React from 'react';
import { getColors, randomChoiceFrom } from '../../utils';

function Triangle({ props }) {
    const { boxSize, indexY, indexX } = props;
    const [ firstColor, secondColor, thirdColor, fourthColor ] = getColors(props.colorPalette);

    const PosX = boxSize * indexX;
    const PosY = boxSize * indexY;

    const offset = randomChoiceFrom([
        [randomChoiceFrom([boxSize, 0]), randomChoiceFrom([boxSize, 0]), randomChoiceFrom([boxSize, 0])]
    ]);

    return (
        <g className='triangle'>
            <rect
                x={PosX}
                y={PosY}
                width={boxSize}
                height={boxSize}
                fill={`#${firstColor}`}
                />
            <path
                fill={`#${secondColor}`}
                d={`m ${PosX + offset[0]} ${PosY} L ${PosX} ${PosY + boxSize} h ${boxSize} z`}
                />
            <path
                fill={`#${thirdColor}`}
                d={`m ${PosX + 0.5 * boxSize} ${PosY + 0.5 * boxSize} L ${PosX} ${PosY + offset[1]} h ${boxSize} z`}
                />
            {offset[2] && <path
                fill={`#${fourthColor}`}
                d={`m ${PosX + 0.5 * boxSize} ${PosY + 0.5 * boxSize} L ${PosX} ${PosY + offset[2]} h ${boxSize} z`}
                />}
        </g>
    )
}

export default Triangle;