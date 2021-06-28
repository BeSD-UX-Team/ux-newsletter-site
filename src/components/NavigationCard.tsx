import React from 'react';
import NextLink from 'next/link';
import { Box, Link, Text, Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { ArticleMeta, Edition } from './types';

interface NavigationCardProps {
    edition: Edition;
    currSlug: string;
}

export default function NavigationCard({
    edition,
    currSlug,
    ...props
}: NavigationCardProps) {
    const { t } = useTranslation(`edition${edition.editionNum}`);
    return (
        <Box
            minWidth='200px'
            maxWidth='420px'
            p={6}
            border={'2px solid black'}
            height='fit-content'
            mb='4rem'
            {...props}
        >
            <Text mb={6} fontWeight='medium'>
                {`Edition ${edition.editionNum}: `}{' '}
                <Text as='span' fontStyle='italic'>
                    What's inside this issue?
                </Text>
            </Text>

            <Stack spacing={1}>
                {edition.articles.map(({ title, slug }) => {
                    return (
                        <Box key={slug}>
                            {currSlug === slug ? (
                                <Text fontWeight='semibold' noOfLines={2}>
                                    {t(title)}
                                </Text>
                            ) : (
                                <Link
                                    as={NextLink}
                                    href={`/edition${edition.editionNum}/${slug}`}
                                    passHref
                                    textDecoration='underline'
                                >
                                    <Text
                                        as='a'
                                        textDecoration='underline'
                                        noOfLines={2}
                                    >
                                        {t(title)}
                                    </Text>
                                </Link>
                            )}
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}
