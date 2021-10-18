import Head from 'next/head';
import Image from 'next/image';
import { Heading, Text, Flex, Stack, Box, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import AboutCard from '../components/AboutCard';

import Container from '../components/Container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function About() {
    const { t } = useTranslation('global');
    const about = useTranslation('about');

    return (
        <Container>
            <Head>
                <title>About Us - BeSD UX Team</title>
            </Head>
            <Stack
                as='main'
                spacing={8}
                justifyContent='center'
                alignItems='flex-start'
                m='0 20px 4rem 20px'
                maxWidth='1200px'
            >
                <Flex w='100%' justifyContent='center' alignItems='flex-start'>
                    <Heading as='h1'>{t('pages.about')}</Heading>
                </Flex>
                <Box w='100%'>
                    <Heading
                        size='lg'
                        mb={4}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                    >
                        {about.t('what-we-do.title')}
                    </Heading>
                    <Text>{about.t('what-we-do.body')}</Text>
                </Box>
                <Box w='100%'>
                    <Heading
                        size='lg'
                        mb={4}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                    >
                        {about.t('meet-the-team.title')}
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing={12} p={4}>
                        <AboutCard
                            imgSrc='/assets/Avatar5.png'
                            name='Ron Handley'
                            message='Hello world!'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar4.png'
                            name='Aleksui Riabtsev'
                            message='Hello world!'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar3.png'
                            name='Raied Siddiqui'
                            message='Hello world!'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar.png'
                            name='Jessie Lam'
                            message='Hello world!'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar2.png'
                            name='Jenny Zhang'
                            message='Hello world!'
                        />
                    </SimpleGrid>
                </Box>
            </Stack>
        </Container>
    );
}

export async function getStaticProps({ locale }) {
    // Obtain metadata about all editions
    const { members } = await import(`../content/team.json`);

    return {
        props: {
            ...(await serverSideTranslations(locale, ['about', 'global'])),
        },
    };
}
