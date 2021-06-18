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

interface ArticleListProps {
    articles: ArticleMeta[];
}

interface EditionsDropdownProps {
    editions: Edition[];
}

function ArticleList({ articles }: ArticleListProps) {
    return (
        <Stack spacing={2}>
            <Text color='#ADADAD' fontWeight='medium' fontStyle='italic'>
                What's inside this issue?
            </Text>
            {articles.map((article) => (
                <ChakraLink
                    as={Link}
                    href={`/${article.slug}`}
                    key={article.title}
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
                </ChakraLink>
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
                            ></ArticleList>
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
