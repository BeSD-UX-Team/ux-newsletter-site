import Head from 'next/head';
import { Stack, Flex, Heading, Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import Container from '../components/Container';
import EditionsDropdown from '../components/EditionsDropdown';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const editionsData = [
    {
        num: 1,
        date: 'June 2021',
        articles: [
            {
                editionNum: 1,
                title: 'What are you losing out on without UX?',
                slug: 'some-article',
            },
            {
                editionNum: 1,
                title: 'How we transformed Project X',
                slug: 'some-article',
            },
            {
                editionNum: 1,
                title: 'Facts you should know about users',
                slug: 'some-article',
            },
        ],
    },
    {
        num: 2,
        date: 'Sept 2021',
        articles: [
            {
                editionNum: 2,
                title: 'What are you losing out on without UX?',
                slug: 'some-article',
            },
            {
                editionNum: 2,
                title: 'How we transformed Project X',
                slug: 'some-article',
            },
            {
                editionNum: 2,
                title: 'Facts you should know about users',
                slug: 'some-article',
            },
        ],
    },
];

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
    return {
        props: {
            editionsData: data.editions,
            ...(await serverSideTranslations(locale, ['global'])),
        },
    };
}
