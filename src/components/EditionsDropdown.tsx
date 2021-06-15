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

function ArticleList({ articles }) {
    return (
        <Stack spacing={2}>
            <Text color='#ADADAD' fontWeight='medium' fontStyle='italic'>
                What's inside this issue?
            </Text>
            {articles.map((article) => (
                <Text key={article.title} textDecorationLine='underline'>
                    <Link href={article.link}>{article.title}</Link>
                </Text>
            ))}
        </Stack>
    );
}

export default function EditionsDropdown({ editions }) {
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
