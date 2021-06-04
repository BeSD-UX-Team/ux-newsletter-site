import React from "react"
import { Box, Text } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        BeSD UX Team 
        { /** Will replace this with an SVG of our actual logo */
        }
      </Text>
    </Box>
  )
}
