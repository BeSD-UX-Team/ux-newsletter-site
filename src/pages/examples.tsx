import Head from 'next/head';
import { Heading, Flex, Stack, HStack, Text, Image } from '@chakra-ui/react';

import Wrapper from '../components/Wrapper';
import Container from '../components/Container';
import NumIcon from '../components/NumIcon';
import ArticleContainer from '../components/ArticleContainer';
import ProjectCard from '../components/ProjectCard';
import NavigationCard from '../components/NavigationCard';
import ResourcesCard from '../components/ResourcesCard';

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
                    <NumIcon value='2' variant='light' />{' '}
                    <NumIcon value='4' variant='dark' />
                </HStack>

                <ArticleContainer title='Article Container'>
                    Hello world
                </ArticleContainer>

                <HStack spacing={8}>
                    <ProjectCard
                        name='Project X'
                        img={{ src: '/assets/map.png', alt: 'Image of Map' }}
                        to='/about'
                    />
                    <ProjectCard
                        name='Project Y'
                        img={{ src: '/assets/map.png', alt: 'Image of Map' }}
                        to='/about'
                    />
                </HStack>

                <NavigationCard
                    editionNum={1}
                    articles={mockArticleData}
                    currArticle={'project-x'}
                />
                <ResourcesCard resources={mockResourcesData} />
            </Stack>
        </Container>
    );
}

const mockArticleData = [
    {
        title: 'What are you losing out on without UX?',
        slug: 'what-are-you-losing-without-UX',
    },
    {
        title: 'How we transformed Project X',
        slug: 'project-x',
    },
    {
        title: 'Facts you should know about users',
        slug: 'facts-about-users',
    },
];

const mockResourcesData = [
    {
        url: 'https://google.com',
        title: 'Google Home',
        source: 'Google',
    },
];
