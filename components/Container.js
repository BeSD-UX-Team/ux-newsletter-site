import React from 'react'
import {
    Flex,
    useColorMode
} from '@chakra-ui/react'

import NavBar from './NavBar'

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = { light: 'white', dark: 'gray.900' }
    const color = { light: 'black', dark: 'white' }

    return (
        <>
            <NavBar/>
            <Flex
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container;