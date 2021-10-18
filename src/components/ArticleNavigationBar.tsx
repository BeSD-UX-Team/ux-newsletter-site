import React from 'react';
import { Flex, Spacer, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { ArticleMeta } from './types';
import { useTranslation } from 'next-i18next';

interface ArticleNavBarProps {
    nextArticle?: ArticleMeta;
    prevArticle?: ArticleMeta;
    editionNum?: number;
}

// This is the bar at the bottom of an article to navigate to the Next and Prev articles
export default function ArticleNavigationBar({
    nextArticle,
    prevArticle,
    editionNum,
    ...props
}: ArticleNavBarProps) {
    const { t } = useTranslation('global');
    // We only want to render the prev and next buttons if there
    // exists prevArticle and nextArticle rsespectively
    return (
        <Flex {...props} w='100%' pt='4rem'>
            {prevArticle && (
                <Link
                    href={`/edition${editionNum}/${prevArticle.slug}`}
                    passHref
                >
                    <Button as='a' leftIcon={<ArrowBackIcon />} variant='ghost'>
                        {t('labels.prev')}
                    </Button>
                </Link>
            )}
            <Spacer />
            {nextArticle && (
                <Link
                    href={`/edition${editionNum}/${nextArticle.slug}`}
                    passHref
                >
                    <Button
                        as='a'
                        rightIcon={<ArrowForwardIcon />}
                        variant='ghost'
                    >
                        {t('labels.next')}
                    </Button>
                </Link>
            )}
        </Flex>
    );
}
