import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

import NavBar from './NavBar';
import Logo from './Logo';

export default function Header(props) {
    const NavContainer = styled(Flex)`
        z-index: 10;
        top: 0;
    `;
    return (
        <Flex width='100%' justifyContent='center'>
            <NavContainer
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
                maxWidth='1200px'
                m={8}
                mx={12}
                bg='white'
            >
                <Logo as='a' href='/editions' />
                <NavBar />
            </NavContainer>
        </Flex>
    );
}
