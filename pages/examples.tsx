import Head from 'next/head'
import {
  Heading,
  Flex,
  Stack,
  HStack,
  Text, 
  Image
} from '@chakra-ui/react'

import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import NumIcon from '../components/NumIcon'
import ArticleContainer from '../components/ArticleContainer'

export default function Examples() {
    return (

      <Container>
        <Head>
          <title>Test Page</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 20px 4rem 20px">
            <Flex
              w="100%"
              justifyContent="center"
              alignItems="flex-start">
              <Heading as="h1">Test Page</Heading>
            </Flex>
            <Wrapper description="Before">
              <Image src="/assets/map.png" />
            </Wrapper>
            <Wrapper description="After" width={["100%", "100%", "640px"]}>
              <Image src="/assets/map2.png" />
            </Wrapper>
            <HStack>
              <NumIcon value="2" variant="light"/> <NumIcon value="4" variant="dark"/> 
            </HStack>

            <ArticleContainer title="Article Container">Hello world</ArticleContainer>

        </Stack>
        
      </Container>
      
    )
}