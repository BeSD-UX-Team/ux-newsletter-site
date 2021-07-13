import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';

import Header from './Header';
import Footer from './Footer';

export default function Container({ children }) {
    const { colorMode } = useColorMode();

    const bgColor = { light: 'white', dark: 'gray.900' };
    const color = { light: 'black', dark: 'white' };

    return (
        <>
            <Header />
            <Flex
                mb='4rem'
                mx={['4%', '4%']}
                justifyContent='center'
                alignItems='flex-start'
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                minHeight='80vh'
            >
                {children}
            </Flex>
            <Footer />
        </>
    );
}
