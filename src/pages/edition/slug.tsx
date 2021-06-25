import Head from 'next/head';
import { Stack, Flex, Heading, HStack } from '@chakra-ui/layout';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Markdown from '../../components/Markdown';
import NumIcon from '../../components/NumIcon';
import ArticleNavigationBar from '../../components/ArticleNavigationBar';
import NavigationCard from '../../components/NavigationCard';

const markdown = `
# Project overview

The SAR (Species at Risk) Renewal Initiative was started by the Canadian Wildlife Service (CWS) with the goal of replacing old databases and data models. The original application was written in ColdFusion, which was being decommissioned. As the application was being migrated to use newer technologies, it was about time to re-evaluate the user experience of the application, and give it a long overdue re-design.

SAR Public Registry is a searchable database of all species in Canada available to the public. Its purpose is not only to meet a legal requirement under the Species at Risk Act, but to act as an extensive resource that is used by scientists, academic researchers, ECCC and other Government of Canada employees. Given its ongoing relevance, it was important that the application addressed the various users' needs.

# Our role

Our team identified pain points in the old CWS-SAR webpage and provided expertise in user-centric design to make improvements. We communicated extensively with clients by presenting them with many mockups, which illustrated proposed changes to the design of the webpage. We iteratively modified our mockups to reflect the wants and needs of our clients and potential users, and adapting when these needs changed. Ultimately, we re-designed the website to improve its visibility and intuitiveness, as well as added new features that would aid users in completing their goals more effectively.
    
# The Defining Changes
`;

const listItems = [`## Keyword search`];

const wrapperMarkdown = `
![Fullstack React](https://dzxbosgk90qga.cloudfront.net/fit-in/504x658/n/20190131015240478_fullstack-react-cover-medium%402x.png)
`;

const markdown2 = `
A feature of the CWS-SAR website is keyword search of species recorded in the database. 

Before, there was no specification on what types of “keywords” should be entered. The term *keywords* is too ambiguous. Users may have to try a few things before being able to use the search function to achieve their goals. 

After modification, there is guiding gray text that specifies to users what they can search by specifically (i.e. name or population). Additionally, an information button is provided that contains instructions for more complicated searches. The guiding text and information button clears up the ambiguitiy on how to use the search function. 

**Takeaway: Provide simple guidelines for potentially confusing features**
`;

// Example of what the content object (contentObj) of an article where
// article = { title: string, content: contentObj }
const content = [
    {
        type: 'normal',
        content: markdown,
    },
    {
        type: 'special-list-item',
        value: 1,
        content: listItems[0],
    },
    {
        type: 'wrapper-item',
        title: 'Before',
        content: wrapperMarkdown,
    },
    {
        type: 'wrapper-item',
        title: 'After',
        content: wrapperMarkdown,
    },
    {
        type: 'normal',
        content: markdown2,
    },
];

export default function Article() {
    return (
        <Container>
            <Head>
                <title>Article - BeSD UX Team</title>
            </Head>
            <Stack
                as='main'
                spacing={4}
                justifyContent='center'
                alignItems='flex-start'
                m='2rem 28px 4rem 28px'
                maxWidth='1200px'
                w='100%'
            >
                <NavigationCard edition={edition} currArticle={currArticle} />
                <Flex w='100%' justifyContent='flex-start'>
                    <Heading
                        w='100%'
                        as='h1'
                        mb={2}
                        pb={4}
                        borderBottom='4px solid #E5E5E5'
                        lineHeight='130%'
                    >
                        {currArticle.title}
                    </Heading>
                </Flex>
                {content.map((section) => {
                    return section.type === 'special-list-item' ? (
                        <HStack spacing={4}>
                            <NumIcon value={section.value}></NumIcon>
                            <Markdown>{section.content}</Markdown>
                        </HStack>
                    ) : section.type === 'wrapper-item' ? (
                        <Wrapper description={section.title}>
                            <Markdown>{section.content}</Markdown>
                        </Wrapper>
                    ) : (
                        <Markdown>{section.content}</Markdown>
                    );
                })}
                <ArticleNavigationBar
                    nextArticle={mockNextArticle}
                    prevArticle={mockPrevArticle}
                />
            </Stack>
        </Container>
    );
}

const mockPrevArticle = {
    title: 'Previous Article',
    slug: 'prev-article',
    editionNum: 1,
};

const mockNextArticle = {
    title: 'Next Article',
    slug: 'next-article',
    editionNum: 1,
};

const currArticle = {
    title: 'How we transformed the Canadian Wildlife Service Species at Risk public registry (CWS-SAR)',
    slug: 'example-article',
    editionNum: 1,
};

const edition = {
    num: 1,
    date: 'June 30, 2021',
    articles: [mockPrevArticle, currArticle, mockNextArticle],
};
