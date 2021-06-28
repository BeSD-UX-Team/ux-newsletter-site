import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import { ArticleMeta, Edition } from './types';
import { useRouter } from 'next/router';

interface ArticleListProps {
    articles: ArticleMeta[];
    editionNum: number;
}

interface EditionsDropdownProps {
    editions: Edition[];
}

function ArticleList({ articles, editionNum }: ArticleListProps) {
    const router = useRouter();
    const { t } = useTranslation(`edition${editionNum}`);

    return (
        <Stack spacing={2}>
            <Text color='#ADADAD' fontWeight='medium' fontStyle='italic'>
                What's inside this issue?
            </Text>
            {articles.map((article) => (
                <Link
                    href={`edition${editionNum}/${article.slug}`}
                    locale={router.locale}
                    key={article.slug}
                    passHref
                >
                    <Text
                        as='a'
                        _hover={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        {t(article.title)}
                    </Text>
                </Link>
            ))}
        </Stack>
    );
}

export default function EditionsDropdown({ editions }: EditionsDropdownProps) {
    return (
        <Accordion allowMultiple allowToggle>
            {editions.map((edition) => {
                return (
                    <AccordionItem key={edition.editionNum}>
                        <h2>
                            <AccordionButton
                                _expanded={{
                                    bg: '#E5E5E5',
                                    fontWeight: 'medium',
                                }}
                                _focus={{ outline: 'none', boxShadow: 'none' }}
                            >
                                <Box flex='1' textAlign='left'>
                                    {`Edition ${edition.editionNum} - ${edition.datePublished}`}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <ArticleList
                                articles={edition.articles}
                                editionNum={edition.editionNum}
                            ></ArticleList>
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
