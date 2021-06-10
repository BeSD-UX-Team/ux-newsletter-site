import Head from 'next/head';
import { Stack, Flex, Heading, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Container from '../components/Container';
import EditionsDropdown from '../components/EditionsDropdown';

const editionsData = [
    {
        num: 1,
        date: 'June 2021',
        articles: [
            {
                title: 'What are you losing out on without UX?',
                link: '/',
            },
            {
                title: 'How we transformed Project X',
                link: '/',
            },
            {
                title: 'Facts you should know about users',
                link: '/',
            },
        ],
    },
    {
        num: 2,
        date: 'Sept 2021',
        articles: [
            {
                title: 'What are you losing out on without UX?',
                link: '/',
            },
            {
                title: 'How we transformed Project X',
                link: '/',
            },
            {
                title: 'Facts you should know about users',
                link: '/',
            },
        ],
    },
];

export default function Editions() {
    const { t } = useTranslation();
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
                <Box w='80vw' maxWidth='1220px'>
                    <Heading
                        size='lg'
                        mb={4}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                    >
                        All Previous Editions
                    </Heading>
                    <EditionsDropdown editions={editionsData} />
                </Box>
            </Stack>
        </Container>
    );
}