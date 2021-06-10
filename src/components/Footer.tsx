import Link from 'next/link';
import styled from '@emotion/styled';
import { Flex, Button, Box, HStack } from '@chakra-ui/react';
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
                color='#747474'
                _hover={{
                    color: 'black',
                }}
                {...props}
            >
                {label}
            </Button>
        </Link>
    );
};

export default function Footer(props) {
    const { t } = useTranslation();
    return (
        <Flex justifyContent='center' bg='#E5E5E5' p={8}>
            <Flex
                as='footer'
                justifyContent='flex-start'
                bottom={0}
                flexWrap='wrap'
                width='72vw'
            >
                <Box as='nav'>
                    <NavLink to='/' label='Home' ml={0} />
                    <NavLink to='/about' label={t('about')} />
                    <NavLink to='/projects' label={'Projects'} />
                    <NavLink to='/contact' label='Contact Us' />
                    <NavLink to='/examples' label='Examples' />
                </Box>
                <HStack w='100%' mt={4}>
                    <Logo />
                </HStack>
            </Flex>
        </Flex>
    );
}
