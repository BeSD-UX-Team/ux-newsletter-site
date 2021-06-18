import React from 'react';
import { Flex, Box, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';

interface ProjectCardProps {
    projectName: string;
    img: {
        src: string;
        alt: string;
    };
    to: string;
}

export default function ProjectCard({
    projectName,
    img,
    to,
    ...props
}: ProjectCardProps) {
    return (
        <LinkBox w='fit-content' {...props}>
            <Box w='300px' h='300px' overflow='hidden'>
                <Image h='100%' src='/assets/map.png' objectFit='cover' />
            </Box>

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
                        <LinkOverlay>{projectName}</LinkOverlay>
                    </Box>
                </Link>
            </Flex>
        </LinkBox>
    );
}
