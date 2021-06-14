import Link from 'next/link';
import { Flex, Button, Box, HStack } from '@chakra-ui/react';
// import { useTranslation } from 'react-i18next';
import { useTranslation } from 'next-i18next';

import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

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
    const { t } = useTranslation('global');
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
                    <NavLink to='/about' label={t('pages.about')} />
                    <NavLink to='/projects' label={t('pages.projects')} />
                    <NavLink to='/contact' label={t('pages.contact')} />
                    <NavLink to='/examples' label='Examples' />
                </Box>
                <HStack w='100%' mt={4} spacing={12}>
                    <Logo />
                    <LanguageSwitcher />
                </HStack>
            </Flex>
        </Flex>
    );
}
