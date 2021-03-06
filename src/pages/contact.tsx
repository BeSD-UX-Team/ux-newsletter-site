import Head from 'next/head';
import {
    Stack,
    Heading,
    Box,
    Text,
    Image,
    HStack,
    Center,
    Input,
    Textarea,
    Flex,
    Button,
} from '@chakra-ui/react';

import { useTranslation } from 'next-i18next';
import Container from '../components/Container';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Contact() {
    const { t } = useTranslation('global');
    const contact = useTranslation('contact');

    return (
        <Container>
            <Head>
                <title>{t('pages.contact')}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Stack
                as='main'
                spacing={8}
                justifyContent='center'
                alignItems='flex-start'
                m='0 20px 4rem 20px'
            >
                <Box w='100%' textAlign='center'>
                    <Heading size='xl'>{t('pages.contact')}</Heading>
                </Box>
                <Box w='100%'>
                    <HStack w='100%' justify='center' flexWrap='wrap'>
                        <Image
                            src='/assets/Avatar5.png'
                            alt='Ron Handley'
                            boxSize='100px'
                        />
                        <Image
                            src='/assets/Avatar4.png'
                            alt='Aleksui Riabtsev'
                            boxSize='100px'
                        />
                        <Image
                            src='/assets/Avatar3.png'
                            alt='Raied Siddiqui'
                            boxSize='100px'
                        />
                        <Image
                            src='/assets/Avatar.png'
                            alt='Jessie Lam'
                            boxSize='100px'
                        />
                        <Image
                            src='/assets/Avatar2.png'
                            alt='Jenny Zhang'
                            boxSize='100px'
                        />
                    </HStack>

                    <Heading size='lg' mt={7} pb={4} textAlign='center'>
                        {contact.t('contact-us.big-cta')}
                    </Heading>

                    <Center>
                        <Text width='60%' align='center'>
                            {contact.t('contact-us.cta-details')}
                        </Text>
                    </Center>
                </Box>

                <Box width='100%'>
                    <Flex
                        position='relative'
                        backgroundColor='#E5E5E5'
                        margin='auto'
                        maxWidth='500px'
                        minWidth='300px'
                        height='400px'
                        justifyContent='center'
                        flexWrap='wrap'
                        marginTop='40px'
                    >
                        <Flex
                            position='absolute'
                            top='-7'
                            justifyContent='center'
                            flexWrap='wrap'
                            width='100%'
                        >
                            <svg
                                width='104'
                                height='64'
                                viewBox='0 0 104 64'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <mask id='path-1-inside-1' fill='white'>
                                    <rect width='104' height='64' rx='2' />
                                </mask>
                                <rect
                                    width='104'
                                    height='64'
                                    rx='2'
                                    fill='white'
                                    stroke='black'
                                    stroke-width='7'
                                    mask='url(#path-1-inside-1)'
                                />
                                <path
                                    d='M1.82471 2L49.5709 31.5235C52.2973 33.2094 53.6605 34.0523 55.163 34.0068C56.6655 33.9613 57.9752 33.0374 60.5946 31.1896L101.263 2.5'
                                    stroke='black'
                                    stroke-width='3.5'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                                <path
                                    d='M2.5 61L42.5 28.5'
                                    stroke='black'
                                    stroke-width='3.5'
                                />
                                <path
                                    d='M101 61L65 29'
                                    stroke='black'
                                    stroke-width='3.5'
                                />
                            </svg>
                        </Flex>

                        <Input
                            placeholder='Email'
                            borderBottom='1px solid #747474'
                            borderRadius='0'
                            mt='50px'
                            width='80%'
                        />
                        <Textarea
                            placeholder='Message'
                            borderBottom='1px solid #747474'
                            borderRadius='0'
                            height='45%'
                            width='80%'
                            resize='none'
                        />
                        <Flex
                            width='100%'
                            justifyContent='center'
                            flexWrap='wrap'
                        >
                            <Button
                                backgroundColor='black'
                                color='#EEEDED'
                                size='md'
                                _hover={{
                                    backgroundColor: 'black',
                                    color: '#EEEDED',
                                }}
                            >
                                {t('labels.email-us')}
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Stack>
        </Container>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['contact', 'global'])),
        },
    };
}
