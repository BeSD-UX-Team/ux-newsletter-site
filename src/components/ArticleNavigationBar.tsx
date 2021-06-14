import React from 'react';
import { Flex, Spacer, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

// This is the bar at the bottom of an article to navigate to the Next and Prev articles
export default function ArticleNavigationBar({
    nextArticle = '',
    prevArticle = '',
    ...props
}) {
    return (
        <Flex {...props}>
            <Button as='a' leftIcon={<ArrowBackIcon />} variant='ghost'>
                <Link href={`/${prevArticle}`}> PREV </Link>
            </Button>
            <Spacer />
            <Button as='a' rightIcon={<ArrowForwardIcon />} variant='ghost'>
                <Link href={`/${nextArticle}`}> NEXT </Link>
            </Button>
        </Flex>
    );
}
