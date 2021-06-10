import Link from 'next/link';
import styled from '@emotion/styled';
import { Flex, Button, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Logo from './Logo';

const NavLink = ({ to, label, ...props }) => {
    return (
        <Link href={to}>
            <Button as='a'>{label}</Button>
        </Link>
    );
};

const NavBar = (props) => {
    const { t } = useTranslation();
    const NavContainer = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
    `;
    return (
        <NavContainer
            as='nav'
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
            maxWidth='1024px'
            mx='auto'
            mt={8}
            mb={[0, 0, 8]}
        >
            <Logo />
            <Box>
                <NavLink to='/' label='Home' />
                <NavLink to='/about' label={t('about')} />
                <NavLink to='/contact' label='Contact Us' />
            </Box>
        </NavContainer>
    );
};

export default NavBar;
