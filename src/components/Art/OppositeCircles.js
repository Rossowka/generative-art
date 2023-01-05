import React from 'react';
import { getColors, randomChoiceFrom } from '../../utils';

function OppositeCircles({ props }) {

    const { boxSize, indexY, indexX } = props;
    const [ foregroundColor, backgroundColor ] = getColors(props.colorPalette);

    const offset = randomChoiceFrom([
        [0, 0, boxSize, boxSize],
        [0, boxSize, boxSize, 0],
    ]);

    return (
        <g className='opposite-circles'>
            <rect
                x={boxSize * indexX}
                y={boxSize * indexY}
                width={boxSize}
                height={boxSize}
                fill={`#${backgroundColor}`}
                />
            <mask id={`mask${indexY}-${indexX}`}>
                <rect
                    x={boxSize * indexX}
                    y={boxSize * indexY}
                    width={boxSize}
                    height={boxSize}
                    fill='white'
                    />
            </mask>
            <g mask={`url(#mask${indexY}-${indexX})`}>
                <circle
                    cx={(boxSize * indexX) + offset[0]}
                    cy={(boxSize * indexY) + offset[1]}
                    r={boxSize/2}
                    fill={`#${foregroundColor}`}
                    />
                <circle
                    cx={(boxSize * indexX) + offset[2]}
                    cy={(boxSize * indexY) + offset[3]}
                    r={boxSize/2}
                    fill={`#${foregroundColor}`}
                    />
            </g>
        </g>
    );
}

export default OppositeCircles;