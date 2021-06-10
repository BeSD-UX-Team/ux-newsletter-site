import { useTranslation } from 'react-i18next';
import { Button, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';

const style = {};

export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    const LangButton = styled(Button)`
        border-radius: 0;
    `;

    return (
        <Stack direction='row' spacing={0}>
            <LangButton
                variant='ghost'
                p={0}
                onClick={() => i18n.changeLanguage('en')}
                border={i18n.language === 'en' ? '1px solid black' : 'none'}
                bg={i18n.language === 'en' ? 'gray.100' : 'none'}
                fontWeight={i18n.language === 'en' ? 'bold' : 'medium'}
                color={i18n.language === 'en' ? 'black' : '#747474'}
                _hover={{
                    color: 'black',
                }}
            >
                EN
            </LangButton>
            <LangButton
                variant='ghost'
                p={0}
                onClick={() => i18n.changeLanguage('fr')}
                border={i18n.language === 'fr' ? '1px solid black' : 'none'}
                bg={i18n.language === 'fr' ? 'gray.100' : 'none'}
                fontWeight={i18n.language === 'fr' ? 'bold' : 'medium'}
                color={i18n.language === 'fr' ? 'black' : '#747474'}
                _hover={{
                    color: 'black',
                }}
            >
                FR
            </LangButton>
        </Stack>
    );
}
