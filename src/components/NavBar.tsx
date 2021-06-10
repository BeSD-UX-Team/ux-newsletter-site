import Link from 'next/link';
import styled from '@emotion/styled';
import { Flex, Button, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Logo from './Logo';

const NavLink = ({ to, label, ...props }) => {
    return (
        <Link href={to}>
            <Button
                as='a'
                bg='none'
                borderRadius={0}
                px={0}
                mx={4}
                _hover={{
                    borderBottom: '2px solid black',
                    borderRadius: 0,
                }}
                {...props}
            >
                {label}
            </Button>
        </Link>
    );
};

const NavBar = (props) => {
    const { t } = useTranslation();
    const NavContainer = styled(Flex)`
        z-index: 10;
        top: 0;
    `;
    return (
        <Flex width='100%' justifyContent='center'>
            <NavContainer
                as='nav'
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
                width='100%'
                maxWidth='1200px'
                m={8}
                mx={12}
                bg='white'
            >
                <Link href='/'>
                    <Logo />
                </Link>
                <Box>
                    <NavLink to='/' label='Home' />
                    <NavLink to='/about' label={t('pages.about')} />
                    <NavLink to='/projects' label={t('pages.projects')} />
                    <NavLink to='/contact' label={t('pages.contact')} />
                    <NavLink to='/examples' label='Examples' />
                </Box>
            </NavContainer>
        </Flex>
    );
};

export default NavBar;
