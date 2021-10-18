import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';

export default function LanguageSwitcher() {
    const router = useRouter();
    const LangButton = styled(Button)`
        border-radius: 0;
    `;
    const locale = router.locale;

    return (
        <Stack direction='row' spacing={0}>
            <Link href={router.asPath} locale='en'>
                <LangButton
                    variant='ghost'
                    p={0}
                    border={locale === 'en' ? '1px solid black' : 'none'}
                    bg={locale === 'en' ? 'gray.100' : 'none'}
                    fontWeight={locale === 'en' ? 'bold' : 'medium'}
                    color={locale === 'en' ? 'black' : '#747474'}
                    _hover={{
                        color: 'black',
                    }}
                >
                    EN
                </LangButton>
            </Link>
            <Link href={router.asPath} locale='fr'>
                <LangButton
                    variant='ghost'
                    p={0}
                    border={locale === 'fr' ? '1px solid black' : 'none'}
                    bg={locale === 'fr' ? 'gray.100' : 'none'}
                    fontWeight={locale === 'fr' ? 'bold' : 'medium'}
                    color={locale === 'fr' ? 'black' : '#747474'}
                    _hover={{
                        color: 'black',
                    }}
                >
                    FR
                </LangButton>
            </Link>
        </Stack>
    );
}
