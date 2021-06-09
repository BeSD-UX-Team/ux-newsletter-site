import Head from 'next/head';
import React from 'react';

import Container from '../components/Container';
import ReactMarkdown from 'react-markdown';

import {
    Heading,
    OrderedList,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react';

export default function MarkdownExample() {
    const markdown = `
# Header 1
    
## Header 2
    
*italic*
    
**bold**
  
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

* Thing 1\n
But there is a lot more to be said in this body
* Thing 2
* Thing 3
`;

    const components = {
        h1: Heading,
        h2: ({ node, ...props }) => <Heading fontSize='xl' {...props} />,
        ol: OrderedList,
        ul: UnorderedList,
        li: ListItem,
    };

    return (
        <Container>
            <Head>
                <title>Markdown</title>
            </Head>
            <ReactMarkdown components={components}>{markdown}</ReactMarkdown>
        </Container>
    );
}
