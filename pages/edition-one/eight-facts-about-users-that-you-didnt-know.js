import Head from 'next/head'
import {
    Heading, 
    Text,
    Stack,
    List,
    ListItem,
} from "@chakra-ui/react"

import Container from '../../components/Container'
import ArticleContainer from '../../components/ArticleContainer'
import NumIcon from '../../components/NumIcon'
import ResourcesCard from '../../components/ResourcesCard'

export default function Article() {
    return (
        <Container>
            <Head>
                <title>8 facts about users you didn't know</title>
            </Head>
            <ArticleContainer title="8 Facts about users that you didn't know">
                <Text>...secrets told from a UX desgner</Text>
                <Stack
                    direction={["column", "row"]}
                    spacing={16}
                >
                    <List 
                    as="ol" 
                    spacing={12}
                    maxWidth="800px" 
                    >
                        {
                        data.map(({ fact, description }, i) => {
                            return (
                            <ListItem>
                                <Stack
                                spacing={4}>
                                    <NumIcon value={i + 1}/>
                                    <Heading
                                        size="lg">
                                        {fact}
                                    </Heading>
                                    <Text>
                                        {description}
                                    </Text>
                                </Stack>
                            </ListItem>
                            )
                        })
                        }
                    </List>
                    <ResourcesCard resources={externalResources}/>
                </Stack>

            </ArticleContainer>
        </Container>
    )
}

const data = [
    {
        fact: "Users just learn enough to do their job",
        description: "Users aren’t interested in all the functionality and features offered by your application! They want to complete their desired task and find a solution to their problem, while avoiding as much extra work as possible. Try to keep features independent of each other and ensure they are easy to navigate and use."

    },
    {
        fact: "Users often rely on familiar patterns",
        description: "Users are intuitive beings, driven by their prior knowledge and association with systems. Users expect your application to work in a similar way to others that they use. Hence, adhere to common design patterns that have been adopted across the web to keep your website sane."
    },
    {
        fact: "Users will take off quickly if unsatisfied",
        description: "When users land on your website, they are looking for a solution to their problem. If they can’t find what they need or can’t figure it out quickly enough, they’re out of there. Make sure you provide users with valuable content or tools that are easy to understand. Also, prioritize having fast performance and page loading."
    },
    {
        fact: "Users don’t use your website the way you want",
        description: "Your assumptions about how your users use your application may not be correct. They don't always follow the path you predicted for them. Research and understand how users behave, and be prepared for those chaotic users whose paths may zigzag across your website."
    },
    {
        fact: "Users are not always in the mood to read",
        description: "Readers have short attention spans, so don’t expect them to drudge through lengthy body of texts. Try to make long text more concise, and use graphical elements wherever appropriate to condense the amount of content. Also, try to avoid relying on a long instruction manual by making your website intuitive to use. However, if a manual is necessary, make your instructions clear and short."
    },
    {
        fact: "Users don't see everything",
        description: "Web users tend to be impatient and are not likely to spend a lot of time exploring your application, hunting for hidden functionality and features. They notice what's conspicuous, so it is imperative to display all important sections at the beginning and highlight key information so that users can easily notice them."
    },
    {
        fact: "Users don't always want what they say they want",
        description: "The features that users say they’d like are not always the same features that they would actually use. Why? Because users cannot predict their future behaviours. Don’t ask users what features they want. Instead, seek to understand their needs and behaviours. Then, place an example solution in front of users and examine how they interact with it."
    },
    {
        fact: "More does not always equal better for your users",
        description: "Providing users with more options or more features can overwhelm them, doing more harm than good. More choices often means that it takes longer for the user to make a decision, which can lead to frustration, and giving up or abandoning the task (and your application) completely. Minimize and simplify wherever possible."
    }

]

const externalResources = [
    { 
        url: 'https://google.ca',
        source: 'Google',
        title: "Google Home"
    }
]