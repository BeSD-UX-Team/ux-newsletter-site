import React from "react"
import { Flex, Heading, Box, Link, Text, Stack, StackDivider } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons' 

// resources = [ { url, title, source }]

export default function ResourcesCard({ resources, ...props }) {

    return (
        <Box
         maxWidth="320px"
         p={2}>
             <Stack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}>
                    <Heading size="sm">
                        External Resources</Heading>
                    {
                     resources.map(({ url, title, source }) => {
                         return (
                            <Box>
                                <Link
                                    href={url}
                                    isExternal
                                    fontWeight="semibold">
                                    {title} <ExternalLinkIcon/>
                                </Link>
                                <Text>
                                    {source}
                                </Text>
                            </Box>
                         )
                     })
                    }
             </Stack>
        </Box>
    )
    
}