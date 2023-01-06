import React from 'react';
import { getColors, randomChoiceFrom } from '../../utils';

function OppositeCircles({ props }) {

    const { boxSize, indexY, indexX } = props;
    const [ firstColor, secondColor, thirdColor ] = getColors(props.colorPalette);

    const PosX = boxSize * indexX;
    const PosY = boxSize * indexY;

    const offset = randomChoiceFrom([
        [0, 0, boxSize, boxSize, randomChoiceFrom([0, 1])],
        [0, boxSize, boxSize, 0, randomChoiceFrom([0, 1])],
    ]);

    return (
        <g className='opposite-circles'>
            <rect
                x={PosX}
                y={PosY}
                width={boxSize}
                height={boxSize}
                fill={`#${firstColor}`}
                />
            <mask id={`mask${indexY}-${indexX}`}>
                <rect
                    x={PosX}
                    y={PosY}
                    width={boxSize}
                    height={boxSize}
                    fill='white'
                    />
            </mask>
            <g mask={`url(#mask${indexY}-${indexX})`}>
                <circle
                    cx={(PosX) + offset[0]}
                    cy={(PosY) + offset[1]}
                    r={boxSize/2}
                    fill={`#${secondColor}`}
                    />
                <circle
                    cx={(PosX) + offset[2]}
                    cy={(PosY) + offset[3]}
                    r={boxSize/2}
                    fill={`#${randomChoiceFrom([secondColor, thirdColor])}`}
                    />
                {offset[4] && <circle
                    cx={(PosX) + offset[0]}
                    cy={(PosY) + offset[3]}
                    r={boxSize/2}
                    fill={`#${secondColor}`}
                    />}
                {offset[4] && <circle
                    cx={(PosX) + offset[2]}
                    cy={(PosY) + offset[1]}
                    r={boxSize/2}
                    fill={`#${secondColor}`}
                    />}
            </g>
        </g>
    );
}

export default OppositeCircles;