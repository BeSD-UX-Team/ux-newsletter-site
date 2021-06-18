import Head from 'next/head';
import React from 'react';

import Container from '../components/Container';
import ReactMarkdown from 'react-markdown';

import {
    Heading,
    OrderedList,
    ListItem,
    UnorderedList,
    Stack,
    Text,
} from '@chakra-ui/react';

import Wrapper from '../components/Wrapper';

/**
<b> bold Html </b>

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`


![Fullstack React](https://dzxbosgk90qga.cloudfront.net/fit-in/504x658/n/20190131015240478_fullstack-react-cover-medium%402x.png)

## Here is a list:

1. # Thing 1\n
    But there is a lot more to be said in this body
2. Thing 2
3. Thing 3
 */

export default function MarkdownExample() {
    const markdown = `
# Project overview

The SAR (Species at Risk) Renewal Initiative was started by the Canadian Wildlife Service (CWS) with the goal of replacing old databases and data models. The original application was written in ColdFusion, which was being decommissioned. As the application was being migrated to use newer technologies, it was about time to re-evaluate the user experience of the application, and give it a long overdue re-design.

SAR Public Registry is a searchable database of all species in Canada available to the public. Its purpose is not only to meet a legal requirement under the Species at Risk Act, but to act as an extensive resource that is used by scientists, academic researchers, ECCC and other Government of Canada employees. Given its ongoing relevance, it was important that the application addressed the various users' needs.

# Our role

Our team identified pain points in the old CWS-SAR webpage and provided expertise in user-centric design to make improvements. We communicated extensively with clients by presenting them with many mockups, which illustrated proposed changes to the design of the webpage. We iteratively modified our mockups to reflect the wants and needs of our clients and potential users, and adapting when these needs changed. Ultimately, we re-designed the website to improve its visibility and intuitiveness, as well as added new features that would aid users in completing their goals more effectively.
    
# The Defining Changes

## 1. Keyword search
`;

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

    const components = {
        h1: ({ node, ...props }) => (
            <Heading as='h2' fontSize='3xl' py={4} {...props} />
        ),
        h2: ({ node, ...props }) => (
            <Heading as='h3' fontSize='2xl' py={2} {...props} />
        ),
        p: ({ node, ...props }) => (
            <Text as='p' fontSize='lg' fontWeight='light' {...props} />
        ),
        ol: OrderedList,
        ul: UnorderedList,
        li: ListItem,
    };

    return (
        <Container>
            <Head>
                <title>Markdown</title>
            </Head>
            <Stack
                as='main'
                spacing={4}
                justifyContent='center'
                alignItems='flex-start'
                m='0 auto 4rem auto'
                maxWidth='1000px'
            >
                {content.map((section) => {
                    return section.type === 'wrapper-item' ? (
                        <Wrapper description={section.title}>
                            <ReactMarkdown components={components}>
                                {section.content}
                            </ReactMarkdown>
                        </Wrapper>
                    ) : (
                        <ReactMarkdown components={components}>
                            {section.content}
                        </ReactMarkdown>
                    );
                })}
            </Stack>
        </Container>
    );
}
