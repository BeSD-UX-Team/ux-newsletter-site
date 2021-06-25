import Head from 'next/head';
import { Stack, Flex, Heading, HStack, Box } from '@chakra-ui/layout';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Markdown from '../../components/Markdown';
import NumIcon from '../../components/NumIcon';
import ArticleNavigationBar from '../../components/ArticleNavigationBar';
import NavigationCard from '../../components/NavigationCard';

export default function Article({ edition }) {
    const { t } = useTranslation('edition-one');
    const article = edition.articles[1];
    return (
        <Container>
            <Head>
                <title>Article - BeSD UX Team</title>
            </Head>
            <Stack
                as='main'
                spacing={4}
                justifyContent='center'
                alignItems='flex-start'
                m='2rem 28px 4rem 28px'
                maxWidth='1200px'
                w='100%'
            >
                <NavigationCard
                    edition={editionMeta}
                    currArticle={currArticle}
                />
                <Flex w='100%' justifyContent='flex-start'>
                    <Heading
                        w='100%'
                        as='h1'
                        mb={2}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                        lineHeight='130%'
                    >
                        {t(article.title)}
                    </Heading>
                </Flex>
                <Stack spacing={12}>
                    {article.content.map((section) => {
                        return (
                            <Stack spacing='1rem'>
                                {section.map((component) => {
                                    return component.type ===
                                        'special-list-item' ? (
                                        <HStack
                                            spacing={4}
                                            key={component.id}
                                            alignItems='flex-start'
                                        >
                                            <NumIcon
                                                value={component.value}
                                            ></NumIcon>
                                            <Box>
                                                <Markdown>
                                                    {t(component.body)}
                                                </Markdown>
                                            </Box>
                                        </HStack>
                                    ) : component.type === 'wrapper-item' ? (
                                        <Wrapper
                                            key={component.id}
                                            description={t(component.title)}
                                        >
                                            <Markdown>
                                                {t(component.body)}
                                            </Markdown>
                                        </Wrapper>
                                    ) : (
                                        <Markdown key={component.id}>
                                            {t(component.body)}
                                        </Markdown>
                                    );
                                })}
                            </Stack>
                        );
                    })}
                </Stack>
                <ArticleNavigationBar
                    nextArticle={mockNextArticle}
                    prevArticle={mockPrevArticle}
                />
            </Stack>
        </Container>
    );
}

const mockPrevArticle = {
    title: 'Previous Article',
    slug: 'prev-article',
    editionNum: 1,
};

const mockNextArticle = {
    title: 'Next Article',
    slug: 'next-article',
    editionNum: 1,
};

const currArticle = {
    title: 'How we transformed the Canadian Wildlife Service Species at Risk public registry (CWS-SAR)',
    slug: 'example-article',
    editionNum: 1,
};

const editionMeta = {
    num: 1,
    date: 'June 30, 2021',
    articles: [mockPrevArticle, currArticle, mockNextArticle],
};

export async function getStaticPaths() {
    const { editions } = await import(`../../content/data.json`);
    const locales = ['en', 'fr'];

    const paths = editions.reduce((accumulator, edition) => {
        let articleSlugs = edition.articles.map((article) => article.slug);
        let params = articleSlugs.map((slug) => ({
            params: { edition: `edition${edition.num}`, slug: slug },
        }));
        return accumulator.concat(params);
    }, []);

    // We have to generate paths with both the params and different locales specified
    const pathsWithLocale = locales.reduce((accumulator, locale) => {
        let currLocalePaths = paths.map((path) => {
            return { params: path.params, locale: locale };
        });
        return accumulator.concat(currLocalePaths);
    }, []);

    return {
        paths: pathsWithLocale,
        fallback: false,
    };
}

export async function getStaticProps({ locale }) {
    const edition1 = {
        editionNum: 1,
        datePublished: 'Jan 12, 2021',
        articles: [
            {
                title: 'article-one.title',
                content: [
                    [
                        {
                            id: 1,
                            type: 'normal',
                            body: 'article-one.section-one',
                        },
                    ],
                    [
                        {
                            id: 2,
                            type: 'normal',
                            body: 'article-one.section-two-title',
                        },
                        {
                            id: 3,
                            type: 'special-list-item',
                            value: 1,
                            body: 'article-one.section-two-first',
                        },
                        {
                            id: 4,
                            type: 'special-list-item',
                            value: 2,
                            body: 'article-one.section-two-second',
                        },
                        {
                            id: 5,
                            type: 'special-list-item',
                            value: 3,
                            body: 'article-one.section-two-third',
                        },
                    ],
                    [
                        {
                            id: 6,
                            type: 'normal',
                            body: 'article-one.section-three-title',
                        },
                        {
                            id: 7,
                            type: 'special-list-item',
                            value: 1,
                            body: 'article-one.section-three-first',
                        },
                        {
                            id: 7,
                            type: 'special-list-item',
                            value: 2,
                            body: 'article-one.section-three-second',
                        },
                    ],
                ],
                externalResources: [
                    {
                        url: 'www.google.com',
                        title: 'Google Home',
                        source: 'Google',
                    },
                ],
            },
            {
                title: 'article-two.title',
                content: [
                    [
                        {
                            id: 8,
                            type: 'normal',
                            body: 'article-two.section-one',
                        },
                    ],
                    [
                        {
                            id: 9,
                            type: 'normal',
                            body: 'article-two.section-two',
                        },
                    ],
                    [
                        {
                            id: 10,
                            type: 'normal',
                            body: 'article-two.section-three.title',
                        },
                        {
                            id: 11,
                            type: 'wrapper-item',
                            title: 'article-two.section-three.first-wrapper-one',
                            body: 'article-two.section-three.first-wrapper-one-body',
                        },
                        {
                            id: 12,
                            type: 'wrapper-item',
                            title: 'article-two.section-three.first-wrapper-two',
                            body: 'article-two.section-three.first-wrapper-two-body',
                        },
                        {
                            id: 13,
                            type: 'normal',
                            body: 'article-two.section-three.first-content',
                        },
                    ],
                ],
            },
        ],
    };

    return {
        props: {
            edition: edition1,
            ...(await serverSideTranslations(locale, [
                'edition-one',
                'global',
            ])),
        },
    };
}
