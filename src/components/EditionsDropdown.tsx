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
            <Text>What's inside this issue?</Text>
            {articles.map((article) => (
                <Link href={article.link}>{article.title}</Link>
            ))}
        </Stack>
    );
}

export default function EditionsDropdown({ editions }) {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {editions.map((edition) => {
                return (
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
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
