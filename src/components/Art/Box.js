import React from 'react';
import { getColors } from '../../utils';

import './styles.scss';

function Box({ props }) {
    const { boxSize, indexY, indexX } = props;
    const [ backgroundColor ] = getColors(props.colorPalette);

    return (
        <g>
            <rect
                x={boxSize * indexX}
                y={boxSize * indexY}
                width={boxSize}
                height={boxSize}
                fill={`#${backgroundColor}`}
                />
        </g>
    );
}

export default Box;