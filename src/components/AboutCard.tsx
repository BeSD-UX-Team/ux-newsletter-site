import React from 'react';
import { Flex, Image, Text, Heading } from '@chakra-ui/react';

interface AboutCardProps {
    imgSrc: string;
    name: string;
    position?: string;
    message: string;
}

export default function AboutCard({
    imgSrc,
    name,
    position = 'Position',
    message,
    ...props
}: AboutCardProps) {
    return (
        <Flex w='100%' {...props}>
            <Flex
                direction='column'
                alignItems='center'
                maxW='100px'
                flexBasis='space-between'
            >
                <Image w='100%' src={imgSrc} alt='avatar' />
                <Heading as='h3' size='sm' mt={4} mb={1} textAlign='center'>
                    {name}
                </Heading>
                <Text textAlign='center'>{position}</Text>
            </Flex>
            <Flex
                p={4}
                px={6}
                ml={6}
                border='1px solid black'
                borderRadius='lg'
            >
                <Text>{message}</Text>
            </Flex>
        </Flex>
    );
}
