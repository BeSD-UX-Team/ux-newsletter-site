import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link as ChakraLink,
    Stack,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import { ArticleMeta, Edition } from './types';
import { useRouter } from 'next/router';

interface ArticleListProps {
    articles: ArticleMeta[];
    linkPrefix: string;
}

interface EditionsDropdownProps {
    editions: Edition[];
}

function ArticleList({ articles, linkPrefix }: ArticleListProps) {
    const router = useRouter();
    return (
        <Stack spacing={2}>
            <Text color='#ADADAD' fontWeight='medium' fontStyle='italic'>
                What's inside this issue?
            </Text>
            {articles.map((article) => (
                <Link
                    href={`${linkPrefix}/${article.slug}`}
                    locale={router.locale}
                    key={article.title}
                    passHref
                >
                    <Text
                        as='a'
                        _hover={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        {article.title}
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
                    <AccordionItem key={edition.num}>
                        <h2>
                            <AccordionButton
                                _expanded={{
                                    bg: '#E5E5E5',
                                    fontWeight: 'medium',
                                }}
                                _focus={{ outline: 'none', boxShadow: 'none' }}
                            >
                                <Box flex='1' textAlign='left'>
                                    {`Edition ${edition.num} - ${edition.date}`}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <ArticleList
                                articles={edition.articles}
                                linkPrefix={`/edition${edition.num}`}
                            ></ArticleList>
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
