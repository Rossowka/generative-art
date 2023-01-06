import React from 'react';
import { randomChoiceFrom } from '../../utils';

import {
    Box,
    Circle,
    Triangle,
    OppositeCircles,
    Diamond,
    } from '../Art';

function DrawShape( props ) {
    const shape = randomChoiceFrom([
        <Box props={props}/>,
        <Circle props={props}/>,
        <Triangle props={props}/>,
        <OppositeCircles props={props}/>,
        <Diamond props={props}/>,
    ]);

    return shape;
}

export default DrawShape;