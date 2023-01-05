import React from 'react';
import { getColors } from '../../utils';

function Triangle({ props }) {
    const { boxSize, indexY, indexX } = props;
    const [ foregroundColor, backgroundColor ] = getColors(props.colorPalette);

    return (
        <g className='triangle'>
            <rect
                x={boxSize * indexX}
                y={boxSize * indexY}
                width={boxSize}
                height={boxSize}
                fill={`#${backgroundColor}`}
                />
            <path
                fill={`#${foregroundColor}`}
                d={`M ${boxSize * indexX} ${boxSize * indexY} v ${boxSize} h ${boxSize} Z`}
                />
        </g>
    )
}

export default Triangle;