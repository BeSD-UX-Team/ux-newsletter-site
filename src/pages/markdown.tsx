import Head from 'next/head';
import React from 'react';

import Container from '../components/Container';
import ReactMarkdown from 'react-markdown';

import { Heading } from '@chakra-ui/react';

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
`;

    const components = {
        h1: Heading,
        h2: ({ node, ...props }) => <Heading fontSize='xl' {...props} />,
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
