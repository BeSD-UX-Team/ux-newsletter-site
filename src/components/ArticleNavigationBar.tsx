import React from 'react';
import { Flex, Spacer, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { ArticleMeta } from './types';

interface ArticleNavBarProps {
    nextArticle?: ArticleMeta;
    prevArticle?: ArticleMeta;
}

// This is the bar at the bottom of an article to navigate to the Next and Prev articles
export default function ArticleNavigationBar({
    nextArticle,
    prevArticle,
    ...props
}: ArticleNavBarProps) {
    return (
        <Flex {...props} w='100%' pt='4rem'>
            {prevArticle && (
                <Button as='a' leftIcon={<ArrowBackIcon />} variant='ghost'>
                    <Link href={`/${prevArticle.slug}`}> PREV </Link>
                </Button>
            )}
            <Spacer />
            {nextArticle && (
                <Button as='a' rightIcon={<ArrowForwardIcon />} variant='ghost'>
                    <Link href={`/${nextArticle.slug}`}> NEXT </Link>
                </Button>
            )}
        </Flex>
    );
}

// TO-DO: fix routes
