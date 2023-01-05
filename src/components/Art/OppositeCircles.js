import React from 'react';
import { getColors } from '../../utils';

function OppositeCircles({ props }) {

    const { boxSize, indexY, indexX } = props;
    const [ foregroundColor, backgroundColor ] = getColors(props.colorPalette);

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
                    cx={(boxSize * indexX)}
                    cy={(boxSize * indexY)}
                    r={boxSize/2}
                    fill={`#${foregroundColor}`}
                    />
                <circle
                    cx={(boxSize * indexX) + boxSize}
                    cy={(boxSize * indexY) + boxSize}
                    r={boxSize/2}
                    fill={`#${foregroundColor}`}
                    />
            </g>
        </g>
    );
}

export default OppositeCircles;