import React from 'react';
import { Circle } from '@chakra-ui/react';

interface NumIconProps {
    value: number;
    variant?: 'dark' | 'light';
}

export default function NumIcon({
    value,
    variant = 'light',
    ...props
}: NumIconProps) {
    return (
        <Circle
            size='36px'
            bg={variant === 'dark' ? 'black' : 'white'}
            color={variant === 'dark' ? 'white' : 'black'}
            fontWeight='black'
            fontSize='lg'
            border='4px solid black'
        >
            {value}
        </Circle>
    );
}
