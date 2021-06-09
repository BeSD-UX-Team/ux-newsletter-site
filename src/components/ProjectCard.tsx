import React from 'react';
import { Flex, Image, Text, Box, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function ProjectCard({ name, img, to, ...props }) {
    const { src, alt } = img;
    return (
        <LinkBox w='100%' {...props}>
            <Flex
                direction='column'
                alignItems='center'
                flexBasis='space-between'
                maxW='320px'
                width='fit-content'
            >
                <Image w='100%' src={src} alt={alt} />
                <Box
                    p={2}
                    w='160px'
                    border='2px solid black'
                    bg='white'
                    textAlign='center'
                >
                    <NextLink href={to}>
                        <LinkOverlay>{name}</LinkOverlay>
                    </NextLink>
                </Box>
            </Flex>
        </LinkBox>
    );
}
