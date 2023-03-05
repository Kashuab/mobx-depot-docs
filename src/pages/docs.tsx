import {Box, Text, Heading, UnorderedList, ListItem, Link, Code, OrderedList} from "@chakra-ui/react";
import {MDXProvider} from "@mdx-js/react";
import {Navigation, NavigationItem} from "~/components/Navigation";
import Head from "next/head";

type DocsProps = {
  children: React.ReactNode;
}

const components = {
  h1: (props: any) => <Heading as="h1" size="2xl" mb={8} mt={12} lineHeight={1.4}
                               background="linear-gradient(to bottom right, #FC4646 0%, #5801E3 100%)"
                               backgroundClip="text" {...props} />,
  h2: (props: any) => <Heading as="h2" size="lg" mb={6} mt={10} color="helium.green.500" {...props} />,
  h3: (props: any) => <Heading as="h3" size="md" mb={4} mt={8} {...props} />,
  h4: (props: any) => <Heading as="h4" size="sm" mb={4} mt={6} {...props} />,
  p: (props: any) => <Text my={4} maxW="50rem" {...props} />,
  ul: (props: any) => <UnorderedList {...props} my={8} pl={4} sx={{ 'ul': { my: 0 }}} />,
  ol: (props: any) => <OrderedList {...props} my={8} pl={4} sx={{ 'ol': { my: 0 }}} />,
  li: (props: any) => <ListItem {...props} mb={2} />,
  a: (props: any) => <Link color="helium.blue.500" {...props} />,
  code: (props: any) => <Code backgroundColor="whiteAlpha.100" color="helium.red.300" fontSize="inherit" {...props} />,
  blockquote: (props: any) => (
    <Box
      as="blockquote"
      borderLeft="4px solid"
      borderColor="helium.purple.500"
      pl={4}
      color="gray.400"
      {...props}
    />
  ),
}

export default function Docs(props: DocsProps) {
  return (
    <Box pt={20} display="flex" flex={1}>
      <Head>
        <title>MobX Depot</title>
        <meta name="description" content="Scaffold your GraphQL schema with MobX powered models." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation>
        <NavigationItem href="/docs/get-started">Get started</NavigationItem>
        <NavigationItem href="/docs/models">Models</NavigationItem>
        <NavigationItem href="/docs/queries">Queries</NavigationItem>
        <NavigationItem href="/docs/mutations">Mutations</NavigationItem>
        <NavigationItem href="/docs/root-store">Root store</NavigationItem>
        <NavigationItem href="/docs/react-hooks">React hooks</NavigationItem>
      </Navigation>

      <Box
        px={{ base: 8, xl: 16 }}
        pt={{ base: 8, xl: 0 }}
        pb={16}
        minHeight="100%"
        maxWidth="100%"
        color="white"
        sx={{
          '.ch-code': {
            overflow: 'auto',
            code: {
              display: 'block'
            }
          }
      }}
      >
        <Box as="main" maxWidth="100%">
          <MDXProvider components={components}>
            {props.children}
          </MDXProvider>
        </Box>
      </Box>
    </Box>
  )
}