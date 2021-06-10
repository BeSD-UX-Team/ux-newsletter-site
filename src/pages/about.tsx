import Head from 'next/head';
import Image from 'next/image';
import { Heading, Text, Flex, Stack, Box, SimpleGrid } from '@chakra-ui/react';

import AboutCard from '../components/AboutCard';

import Container from '../components/Container';

export default function About() {
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
                    <Heading as='h1'>About us</Heading>
                </Flex>
                <Box w='100%'>
                    <Heading
                        size='lg'
                        mb={4}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                    >
                        What we do
                    </Heading>
                    <Text>
                        Ut auctor, magna sit amet pulvinar facilisis, tellus
                        lectus convallis dolor, eget fringilla neque felis vel
                        sapien. Fusce aliquam libero sit amet sem dictum
                        accumsan. Fusce ultrices sapien gravida dui laoreet,
                        eget porttitor nisi convallis. Suspendisse arcu nibh,
                        pulvinar quis convallis quis, bibendum ac nibh. Mauris
                        eu lectus id urna varius euismod. Integer consectetur
                        nulla mi, consequat ultrices neque egestas vitae.
                        Quisque non mi ipsum. Mauris a egestas quam. Donec a
                        pretium lectus. Quisque vestibulum pharetra mi, ornare
                        dictum leo.
                    </Text>
                </Box>
                <Box w='100%'>
                    <Heading
                        size='lg'
                        mb={4}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                    >
                        Meet the team
                    </Heading>
                    <SimpleGrid columns={[1, null, 2]} spacing={12} p={4}>
                        <AboutCard
                            imgSrc='/assets/Avatar5.png'
                            name='Ron Handley'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar4.png'
                            name='Aleksui Riabtsev'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar3.png'
                            name='Raied Siddiqui'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar.png'
                            name='Jessie Lam'
                        />
                        <AboutCard
                            imgSrc='/assets/Avatar2.png'
                            name='Jenny Zhang'
                        />
                    </SimpleGrid>
                </Box>
            </Stack>
        </Container>
    );
}
