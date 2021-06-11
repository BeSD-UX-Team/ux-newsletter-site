import React from 'react';
import { Box, Link, Text, Stack } from '@chakra-ui/react';

// articles = [ { title, slug }]

export default function NavigationCard({
    editionNum,
    articles,
    currArticle,
    ...props
}) {
    return (
        <Box
            minWidth='200px'
            maxWidth='400px'
            p={6}
            border={'2px solid black'}
            height='fit-content'
            {...props}
        >
            <Text mb={6} fontWeight='medium'>
                {`Edition ${editionNum}: `}{' '}
                <Text as='span' fontStyle='italic'>
                    What's inside this issue?
                </Text>
            </Text>

            <Stack spacing={1}>
                {articles.map(({ title, slug }) => {
                    return (
                        <Box>
                            {currArticle === slug ? (
                                <Text fontWeight='semibold'>{title}</Text>
                            ) : (
                                <Link href={`/editions/${slug}`}>{title}</Link>
                            )}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}
