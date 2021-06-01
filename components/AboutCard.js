import React from "react"
import { Box, Flex, Image, Text, Heading} from "@chakra-ui/react"

export default function AboutCard({imgSrc, name, position, message, ...props}) {
  return (
    <Flex w="100%" {...props} >
      <Flex
        direction="column"
        alignItems="center"
        maxW="100px"
        flexBasis="space-between">
        <Image w="100%" src={imgSrc} alt="avatar"/>
        <Heading 
          as="h3"
          size="sm"
          mt={4}
          mb={1}
          textAlign="center">
          {name}
        </Heading>
        <Text textAlign="center">
          Position
        </Text>
      </Flex>
      <Flex
        p={4}
        px={6}
        ml={6}
        border="1px solid black"
        borderRadius="lg">
        <Text>
          Hey there! I'm super excited to be sharing my undying love for UX. Quisque et mauris rutrum, tristique urna vitae, placerat nisl. Donec semper ante egestas arcu aliquet venenatis. Proin at posuere nibh. In hac habitasse platea dictumst. Mauris feugiat nisl sapien, eu imperdiet ipsum molestie quis. Donec quam tortor, viverra sit amet iaculis eget, mollis at mi. Nam congue est diam, non sodales arcu sagittis quis.
        </Text>
      </Flex>
    </Flex>
  )
}