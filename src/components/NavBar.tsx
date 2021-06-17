import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

function NavLink({ to, label, ...props }) {
    const router = useRouter();
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
                }}
                fontWeight={router.pathname === to ? 'bold' : 'medium'}
                borderBottom={
                    router.pathname === to ? '2px solid black' : 'none'
                }
                {...props}
            >
                {label}
            </Button>
        </Link>
    );
}

export default function NavBar(props) {
    const { t } = useTranslation('global');

    return (
        <Box as='nav'>
            <NavLink to='/' label='Home' />
            <NavLink to='/about' label={t('pages.about')} />
            <NavLink to='/editions' label={t('pages.editions')} />
            <NavLink to='/projects' label={t('pages.projects')} />
            <NavLink to='/contact' label={t('pages.contact')} />
            <NavLink to='/examples' label='Examples' />
        </Box>
    );
}
