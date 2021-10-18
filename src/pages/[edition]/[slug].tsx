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

export default function Article({
    editionMeta,
    currArticle,
    currArticleIndex,
}) {
    // We want to use the namespace for this specific edition
    // This corresponds to the JSON file in /public/locales
    const { t } = useTranslation(`edition${editionMeta.editionNum}`);

    if (currArticle === null) {
        currArticle = {
            title: 'Work in progress',
            content: [],
        };
    }

    return (
        <Container>
            <Head>
                <title>{`${currArticle.title}`} - BeSD UX Team</title>
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
                    currSlug={editionMeta.articles[currArticleIndex].slug}
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
                        {t(currArticle.title)}
                    </Heading>
                </Flex>
                <Stack spacing={12}>
                    {currArticle.content.map((section, i) => {
                        return (
                            <Stack spacing='1rem' key={i}>
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
                    nextArticle={editionMeta.articles[currArticleIndex + 1]}
                    prevArticle={editionMeta.articles[currArticleIndex - 1]}
                    editionNum={editionMeta.editionNum}
                />
            </Stack>
        </Container>
    );
}

export async function getStaticPaths() {
    const { editions } = await import(`../../content/data.json`);
    const locales = ['en', 'fr'];

    const paths = editions.reduce((accumulator, edition) => {
        let articleSlugs = edition.articles.map((article) => article.slug);
        let params = articleSlugs.map((slug) => ({
            params: { edition: `edition${edition.editionNum}`, slug: slug },
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

export async function getStaticProps({ locale, params }) {
    // Obtain metadata about all editions
    const { editions } = await import(`../../content/data.json`);
    // Obtain all article data in this specific edition
    const { edition } = await import(`../../content/${params.edition}.json`);

    const currArticle =
        edition.articles.filter((article) => article.slug === params.slug)[0] ||
        null;

    // We need the index of this article to determine the prev and next articles
    const currArticleIndex = editions[
        edition.editionNum - 1
    ].articles.findIndex((article) => article.slug === params.slug);

    return {
        props: {
            editionMeta: editions[edition.editionNum - 1],
            currArticle,
            currArticleIndex,
            ...(await serverSideTranslations(locale, [
                params.edition,
                'global',
            ])),
        },
    };
}
