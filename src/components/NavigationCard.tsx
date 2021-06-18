import React from 'react';
import { Box, Link, Text, Stack } from '@chakra-ui/react';

import { ArticleMeta, Edition } from './types';

// articles = [ { title, slug }]
interface NavigationCardProps {
    edition: Edition;
    currArticle: ArticleMeta;
}

export default function NavigationCard({
    edition,
    currArticle,
    ...props
}: NavigationCardProps) {
    return (
        <Box
            minWidth='200px'
            maxWidth='420px'
            p={6}
            border={'2px solid black'}
            height='fit-content'
            {...props}
        >
            <Text mb={6} fontWeight='medium'>
                {`Edition ${edition.num}: `}{' '}
                <Text as='span' fontStyle='italic'>
                    What's inside this issue?
                </Text>
            </Text>

            <Stack spacing={1}>
                {edition.articles.map(({ title, slug }) => {
                    return (
                        <Box>
                            {currArticle.slug === slug ? (
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
