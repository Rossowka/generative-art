import React from 'react';
import { randomChoiceFrom } from '../../utils';

import './styles.scss';

function Box({ props }) {
    const { boxSize, indexY, indexX, colorPalette } = props;
    const backgroundColor = colorPalette[randomChoiceFrom(colorPalette)];

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