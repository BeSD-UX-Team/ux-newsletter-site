import Head from 'next/head';
import { Heading, Flex, Stack, HStack, Image } from '@chakra-ui/react';

import Wrapper from '../components/Wrapper';
import Container from '../components/Container';
import NumIcon from '../components/NumIcon';
import ArticleContainer from '../components/ArticleContainer';
import ProjectCard from '../components/ProjectCard';
import NavigationCard from '../components/NavigationCard';
import ResourcesCard from '../components/ResourcesCard';
import ArticleNavigationBar from '../components/ArticleNavigationBar';

export default function Examples() {
    return (
        <Container>
            <Head>
                <title>Test Page</title>
            </Head>
            <Stack
                as='main'
                spacing={8}
                justifyContent='center'
                alignItems='flex-start'
                m='0 20px 4rem 20px'
            >
                <Flex w='100%' justifyContent='center' alignItems='flex-start'>
                    <Heading as='h1'>Test Page</Heading>
                </Flex>
                <Wrapper description='Before'>
                    <Image src='/assets/map.png' />
                </Wrapper>
                <Wrapper description='After' width={['100%', '100%', '640px']}>
                    <Image src='/assets/map2.png' />
                </Wrapper>
                <HStack>
                    <NumIcon value={2} variant='light' />{' '}
                    <NumIcon value={4} variant='dark' />
                </HStack>

                <ArticleContainer title='Article Container'>
                    Hello world
                </ArticleContainer>

                <HStack spacing={8}>
                    <ProjectCard
                        projectName='Project X'
                        img={{ src: '/assets/map.png', alt: 'Image of Map' }}
                        to='/about'
                    />
                    <ProjectCard
                        projectName='Project Y'
                        img={{ src: '/assets/map.png', alt: 'Image of Map' }}
                        to='/about'
                    />
                </HStack>

                <NavigationCard
                    edition={{
                        num: 1,
                        date: 'June 21, 2021',
                        articles: mockArticleData,
                    }}
                    currArticle={{
                        title: 'Project X',
                        slug: 'project-x',
                        editionNum: 1,
                    }}
                />
                <ResourcesCard resources={mockResourcesData} />

                <ArticleNavigationBar w='100%' />
            </Stack>
        </Container>
    );
}

const mockArticleData = [
    {
        title: 'What are you losing out on without UX?',
        slug: 'what-are-you-losing-without-UX',
        editionNum: 1,
    },
    {
        title: 'How we transformed Project X',
        slug: 'project-x',
        editionNum: 1,
    },
    {
        title: 'Facts you should know about users',
        slug: 'facts-about-users',
        editionNum: 1,
    },
];

const mockResourcesData = [
    {
        url: 'https://google.com',
        title: 'Google Home',
        source: 'Google',
    },
];
