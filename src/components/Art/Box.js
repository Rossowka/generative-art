import React from 'react';
import { getColors } from '../../utils';

import './styles.scss';

function Box({ props }) {
    const { boxSize, indexY, indexX } = props;
    const [ firstColor, secondColor, thirdColor ] = getColors(props.colorPalette);

    const PosX = boxSize * indexX;
    const PosY = boxSize * indexY;

    return (
        <g className='box'>
            <rect
                x={PosX}
                y={PosY}
                width={boxSize}
                height={boxSize}
                fill={`#${firstColor}`}
                />
            <rect
                x={PosX + 0.2 * boxSize}
                y={PosY + 0.2 * boxSize}
                width={0.6 * boxSize}
                height={0.6 * boxSize}
                fill={`#${secondColor}`}
                />
            <rect
                x={PosX + 0.4 * boxSize}
                y={PosY + 0.4 * boxSize}
                width={0.2 * boxSize}
                height={0.2 * boxSize}
                fill={`#${thirdColor}`}
                />
        </g>
    );
}

export default Box;