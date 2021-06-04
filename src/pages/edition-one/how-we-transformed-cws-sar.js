import Head from 'next/head'
import {
    Flex,
    Heading, 
    HStack, 
    Text,
    Image,
    Stack
} from "@chakra-ui/react"

import Container from '../../components/Container'
import ArticleContainer from '../../components/ArticleContainer'
import NumIcon from '../../components/NumIcon'
import Wrapper from '../../components/Wrapper'

export default function Article() {
    return (
        <Container>
            <Head>
                <title>How we transformed CWS-SAR</title>
            </Head>
            <ArticleContainer title="How we transformed the Canadian Wildlife Service Species at Risk public registry (CWS-SAR)">
                <Heading
                    size="lg">
                    Project overview
                </Heading>
                <Text>
                    The SAR (Species at Risk) Renewal Initiative was started by the Canadian Wildlife Service (CWS) with the goal of replacing old databases and data models. The original application was written in ColdFusion, which was being decommissioned. As the application was being migrated to use newer technologies, it was about time to re-evaluate the user experience of the application, and give it a long overdue re-design.
                </Text>
                <Text>
                    SAR public registry is a searchable database of all species in Canada, which is available to the public. Its purpose is not only to meet a legal requirement under the Species at Risk Act, but to act as an extensive resource for scientists, academic researchers, and ECCC and other Government of Canada employees. Given its ongoing relevance, it was important that the re-designed application addressed the needs of its various users.
                </Text>
                <Heading
                    size="lg">
                    Our role
                </Heading>
                <Text>
                    Our team identified pain points in the old CWS-SAR public registry webpage and provided expertise in user-centric design to make improvements. We communicated extensively with clients by presenting them with many mock-ups, which illustrated proposed changes to the design of the webpage. We iteratively modified our mock-ups, adapting when the needs of our clients and potential users changed. Ultimately, we re-designed the application to improve its usability and intuitiveness, as well as added new features that would aid users in achieving their goals more effectively.
                </Text>
                <Heading
                    size="lg">
                    The Defining Changes
                </Heading>
                <HStack alignItems="baseline">
                    <NumIcon value="1" variant="dark" />
                    <Heading
                        as="h3"
                        size="md">
                        Keyword Search
                    </Heading>
                </HStack>
                <Stack
                    direction={["column", "column", "row"]}
                    spacing={12}>
                    <Wrapper description="before">
                        <Image src="/assets/map.png" />
                    </Wrapper>
                    <Wrapper description="after">
                        <Image width="500px"src="/assets/map2.png" />
                    </Wrapper>
                </Stack>
                <Text>
                    A feature of the SAR public registry website is its keyword search of species recorded in the database.
                </Text>
                <Text>
                    Before, there was no specification on what types of “keywords” should be entered. The term “keywords” is too ambiguous. Users might require multiple attempts before being able to use the search function to achieve their goals.
                </Text>
                <Text>
                    As a modification, a gray label was added below the search box that specifies that users can search by name or population. Additionally, there is an information button, which when clicked, opens instructions for conducting more complex searches. The guiding text and information button clears up any ambiguity.
                </Text>
                <Text
                    fontWeight="bold">
                    Key takeaway: provide simple guidelines for potentially confusing features
                </Text>
                <HStack alignItems="baseline">
                    <NumIcon value="2" variant="dark" />
                    <Heading
                        as="h3"
                        size="md">
                        Filtering for species
                    </Heading>
                </HStack>
            </ArticleContainer>
        </Container>
    )
}