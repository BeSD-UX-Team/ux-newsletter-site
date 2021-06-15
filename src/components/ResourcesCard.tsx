import React from 'react';
import {
    Heading,
    Box,
    Link,
    Text,
    Stack,
    StackDivider,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// resources = [ { url, title, source }]

export default function ResourcesCard({ resources, ...props }) {
    return (
        <Box
            minWidth='200px'
            maxWidth='320px'
            p={[0, 6]}
            border={['none', '1px solid #C4C4C4']}
            height='fit-content'
            borderRadius='16px'
        >
            <Stack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={2}
            >
                <Heading size='sm'>External Resources</Heading>
                {resources.map(({ url, title, source }) => {
                    return (
                        <Box>
                            <Link href={url} isExternal fontWeight='semibold'>
                                {title} <ExternalLinkIcon />
                            </Link>
                            <Text mt={1} fontSize='sm'>
                                {source}
                            </Text>
                        </Box>
                    );
                })}
            </Stack>
        </Box>
    );
}
