import React from 'react';
import { Flex, Stack, useColorMode } from '@chakra-ui/react';

import NavBar from './NavBar';
import Footer from './Footer';

const Container = ({ children }) => {
    const { colorMode } = useColorMode();

    const bgColor = { light: 'white', dark: 'gray.900' };
    const color = { light: 'black', dark: 'white' };

    return (
        <>
            <NavBar />
            <Flex
                mb='4rem'
                mx={['6%', '8%']}
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
};

export default Container;
