import React from 'react';
import { getColors } from '../../utils';

import './styles.scss';

function Diamond({ props }) {
    const { boxSize, indexY, indexX } = props;
    const [ firstColor, secondColor, thirdColor ] = getColors(props.colorPalette);

    const PosX = boxSize * indexX;
    const PosY = boxSize * indexY;

    return (
        <g className='diamond'>
            <rect
                x={PosX}
                y={PosY}
                width={boxSize}
                height={boxSize}
                fill={`#${firstColor}`}
                />
            <rect
                x={PosX + 0.5 * (boxSize - 0.5 * boxSize * Math.SQRT2)}
                y={PosY + 0.5 * (boxSize - 0.5 * boxSize * Math.SQRT2)}
                width={0.5 * boxSize * Math.SQRT2}
                height={0.5 * boxSize * Math.SQRT2}
                fill={`#${secondColor}`}
                transform={`rotate(45, ${PosX + boxSize/2}, ${PosY + boxSize/2})`}
                />
            <rect
                x={PosX + 0.5 * (boxSize - 0.5 * (0.5 * (0.5 * boxSize * Math.SQRT2) * Math.SQRT2) * Math.SQRT2)}
                y={PosY + 0.5 * (boxSize - 0.5 * (0.5 * (0.5 * boxSize * Math.SQRT2) * Math.SQRT2) * Math.SQRT2)}
                width={0.5 * (0.5 * (0.5 * boxSize * Math.SQRT2) * Math.SQRT2) * Math.SQRT2}
                height={0.5 * (0.5 * (0.5 * boxSize * Math.SQRT2) * Math.SQRT2) * Math.SQRT2}
                fill={`#${thirdColor}`}
                transform={`rotate(45, ${PosX + boxSize/2}, ${PosY + boxSize/2})`}
                />
        </g>
    );
}

export default Diamond;