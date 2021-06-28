import Head from 'next/head';
import { Stack, Heading, Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import Container from '../components/Container';
import EditionsDropdown from '../components/EditionsDropdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Editions({ editionsData }) {
    const { t } = useTranslation('global');
    return (
        <Container>
            <Head>
                <title>All Editions</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Stack
                as='main'
                spacing={8}
                justifyContent='center'
                alignItems='flex-start'
                m='0 20px 4rem 20px'
                maxWidth='1220px'
            >
                <Box mt={2} w='80vw' maxWidth='1220px'>
                    <Heading
                        size='lg'
                        mb={4}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                    >
                        {t('pages.editions')}
                    </Heading>
                    <EditionsDropdown editions={editionsData} />
                </Box>
            </Stack>
        </Container>
    );
}

export async function getStaticProps({ locale }) {
    const data = await import(`../content/data.json`);
    const namespaces = data.editions.map(
        (edition) => `edition${edition.editionNum}`
    );
    return {
        props: {
            editionsData: data.editions,
            ...(await serverSideTranslations(locale, [
                'global',
                ...namespaces,
            ])),
        },
    };
}
