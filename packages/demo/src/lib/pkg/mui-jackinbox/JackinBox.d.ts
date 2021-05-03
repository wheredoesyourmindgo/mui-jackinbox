import React from 'react';
import { BoxProps } from '@material-ui/core';
export declare type Props = {
    children?: React.ReactNode;
    animate?: boolean;
    name: string;
    hideUntilAnimate?: boolean;
    speed?: 'slow' | 'slower' | 'fast' | 'faster';
    delay?: boolean | 1 | 2 | 3 | 4 | 5;
    repeat?: boolean | 1 | 2 | 3;
    infinite?: boolean;
} & BoxProps;
export default function JackinBox({ children, className: classNameProp, animate, name, hideUntilAnimate, speed, infinite, delay: delayProp, repeat: repeatProp, ...rest }: Props): JSX.Element;
