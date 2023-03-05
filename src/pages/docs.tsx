import {Box, Text, Heading, UnorderedList, ListItem, Link, Code} from "@chakra-ui/react";
import {MDXProvider} from "@mdx-js/react";

type DocsProps = {
  children: React.ReactNode;
}

const components = {
  h1: (props: any) => <Heading as="h1" size="2xl" mb={8} mt={12} lineHeight={1.4}
                               background="linear-gradient(to bottom right, #FC4646 0%, #5801E3 100%)"
                               backgroundClip="text" {...props} />,
  h2: (props: any) => <Heading as="h2" size="lg" mb={6} mt={10} color="helium.green.500" {...props} />,
  h3: (props: any) => <Heading as="h3" size="md" mb={4} mt={6} {...props} />,
  h4: (props: any) => <Heading as="h4" size="sm" mb={4} mt={6} {...props} />,
  p: (props: any) => <Text my={4} {...props} />,
  ul: (props: any) => <UnorderedList {...props} my={8} pl={4} sx={{ 'ul': { my: 0 }}} />,
  li: (props: any) => <ListItem {...props} mb={2} />,
  a: (props: any) => <Link color="helium.blue.500" {...props} />,
  code: (props: any) => <Code backgroundColor="whiteAlpha.100" color="helium.red.300" {...props} />,
}

export default function Docs(props: DocsProps) {
  return (
    <Box pt={20} display="flex" flex={1}>
      <Box p={4} width="20rem" borderRight="1px solid" borderRightColor="gray.600" flexShrink={0}>
        <Box as="a" href="/docs/get-started" color="white">
          Get started
        </Box>
      </Box>

      <Box
        p={8}
        minHeight="100%"
        color="white"
        sx={{ '.ch-code code': { display: 'block' } }}
      >
        <MDXProvider components={components}>
          <main>
            {props.children}
          </main>
        </MDXProvider>
      </Box>
    </Box>
  )
}