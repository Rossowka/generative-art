import React from 'react';
import { randomChoiceFrom } from '../../utils';

import {
    Box,
    Circle,
    Triangle,
    OppositeCircles
    } from '../Art';

function DrawShape( props ) {
    const shapes = [
        <Box props={props}/>,
        <Circle props={props}/>,
        <Triangle props={props}/>,
        <OppositeCircles props={props}/>,
    ];
    let shape = shapes[randomChoiceFrom(shapes)];

    return shape;
}

export default DrawShape;