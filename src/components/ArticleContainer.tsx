import React from 'react';
import { Heading, Box, Stack } from '@chakra-ui/react';

export default function ArticleComtainer({ title, children, ...props }) {
    return (
        <Box w='100%' {...props}>
            <Heading as='h1' mb={4} pb={4} borderBottom='8px solid #E5E5E5'>
                {title}
            </Heading>
            <Stack
                spacing={6}
                justifyContent='center'
                alignItems='flex-start'
                m='0 1rem 0 1rem'
            >
                {children}
            </Stack>
        </Box>
    );
}
