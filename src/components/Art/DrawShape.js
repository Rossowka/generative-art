import React from 'react';
import { randomChoiceFrom } from '../../utils';

import Box from './Box';
import Circle from './Circle';

function DrawShape( props ) {
    const shapes = [
        <Box props={props}/>,
        <Circle props={props}/>,
    ];
    let shape = shapes[randomChoiceFrom(shapes)];

    return shape;
}

export default DrawShape;