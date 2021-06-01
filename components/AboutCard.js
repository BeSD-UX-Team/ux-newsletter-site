import React from "react"
import { Box, Flex, Image, Text, Heading} from "@chakra-ui/react"

export default function AboutCard({image, name, position, message, ...props}) {
  return (
    <Flex {...props}>
      <Flex
        direction="column"
        alignItems="center"
        maxW="100px"
        flexBasis="space-between">
        <Image w="100%" src="/assets/Avatar.png" alt="avatar"/>
        <Heading 
          as="h3"
          size="sm"
          mt={4}
          mb={1}>
          Name
        </Heading>
        <Text>
          Position
        </Text>
      </Flex>
      <Box
        p={4}
        px={6}
        ml={6}
        border="1px solid black"
        borderRadius="lg">
        <Text>
          Hey there! I'm super excited to be sharing my undying love for UX.
        </Text>
      </Box>
    </Flex>
  )
}