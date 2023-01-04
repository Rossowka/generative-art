import React from 'react';
import { getTwoColors } from '../../utils';

function Circle({ props }) {

    const { boxSize, indexY, indexX } = props;
    const { foregroundColor, backgroundColor } = getTwoColors(props.colorPalette);

    return (
        <g>
            <rect
                x={boxSize * indexX}
                y={boxSize * indexY}
                width={boxSize}
                height={boxSize}
                fill={`#${backgroundColor}`}
                />
            <circle
                cx={(boxSize * indexX) + 0.5 * boxSize}
                cy={(boxSize * indexY) + 0.5 * boxSize}
                r={boxSize/2}
                fill={`#${foregroundColor}`}
                />
        </g>
    );
}

export default Circle;