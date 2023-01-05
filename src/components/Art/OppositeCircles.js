import React from 'react';
import { getColors, randomChoiceFrom } from '../../utils';

function OppositeCircles({ props }) {

    const { boxSize, indexY, indexX } = props;
    const [ foregroundColor, backgroundColor ] = getColors(props.colorPalette);

    const PosX = boxSize * indexX;
    const PosY = boxSize * indexY;

    const offset = randomChoiceFrom([
        [0, 0, boxSize, boxSize],
        [0, boxSize, boxSize, 0],
    ]);

    return (
        <g className='opposite-circles'>
            <rect
                x={PosX}
                y={PosY}
                width={boxSize}
                height={boxSize}
                fill={`#${backgroundColor}`}
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
                    fill={`#${foregroundColor}`}
                    />
                <circle
                    cx={(PosX) + offset[2]}
                    cy={(PosY) + offset[3]}
                    r={boxSize/2}
                    fill={`#${foregroundColor}`}
                    />
            </g>
        </g>
    );
}

export default OppositeCircles;