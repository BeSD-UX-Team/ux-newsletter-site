import React from 'react';
import { Flex, Image, Text, Box, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';

export default function ProjectCard({ name, img, to, ...props }) {
    const { src, alt } = img;
    return (
        <LinkBox w='fit-content' {...props}>
            <Box
                w='300px'
                h='300px'
                bgImage={`url("${src}")`}
                bgPosition='center'
                bgRepeat='no-repeat'
            />
            {/* <Image w='300px' h='300px' src='/assets/map.png' /> */}
            <Flex
                position='absolute'
                zIndex={2}
                bottom={-4}
                width='100%'
                justifyContent='center'
            >
                <Link href={to}>
                    <Box
                        p={2}
                        w='160px'
                        border='2px solid black'
                        bg='white'
                        textAlign='center'
                        fontWeight='semibold'
                        _hover={{
                            // bg: 'gray.200',
                            boxShadow: '-2px 4px 2px rgba(0, 0, 0, 0.20)',
                        }}
                    >
                        <LinkOverlay>{name}</LinkOverlay>
                    </Box>
                </Link>
            </Flex>
        </LinkBox>
    );
}
