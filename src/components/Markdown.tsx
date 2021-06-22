import ReactMarkdown from 'react-markdown';

import {
    Heading,
    OrderedList,
    ListItem,
    UnorderedList,
    Text,
} from '@chakra-ui/react';

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

const components = {
    h1: ({ node, ...props }) => (
        <Heading as='h2' fontSize='3xl' py={4} {...props} />
    ),
    h2: ({ node, ...props }) => (
        <Heading as='h3' fontSize='2xl' py={2} {...props} />
    ),
    p: ({ node, ...props }) => (
        <Text as='p' fontSize='lg' fontWeight='light' pb={2} {...props} />
    ),
    ol: OrderedList,
    ul: UnorderedList,
    li: ListItem,
};

const Markdown = ({ children }) => (
    <ReactMarkdown components={components}>{children}</ReactMarkdown>
);
export default Markdown;
