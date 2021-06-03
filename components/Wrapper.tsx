import React from "react"
import { Box } from "@chakra-ui/react"

export default function Wrapper({ description, children, ...props }) {

    return (
        <Box {...props} >
            <Box 
                bg="gray.200"
                fontWeight="bold"
                textTransform="uppercase"
                px={4}
                py={1}
                width="fit-content"
                maxWidth="50%"
                isTruncated>
                {description}
            </Box>
            <Box
                borderLeft="6px solid"
                borderColor="gray.200"
                p={2}>
                {children}
            </Box>
        </Box>
    )
}