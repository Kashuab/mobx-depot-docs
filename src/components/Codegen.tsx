import {Box, Heading, Icon, Image, Text} from "@chakra-ui/react";
import {Section} from "./Section";
import { BsArrow90DegRight } from 'react-icons/bs';
import {PropsWithChildren} from "react";

export function Codegen() {
  return (
    <Section justifyContent="start">
      <Heading fontSize="lg" textTransform="uppercase" letterSpacing="0.2rem" color="helium.blue.500">Codegen</Heading>
      <Heading color="helium.green.500">
        You get the goods.
      </Heading>

      <Text color="white" fontSize="xl">
        When we receive your specs, {"you'll"} get blueprints delivered on-time or your money back.
      </Text>

      <Box display="flex" flexDirection="column" gap={16} mt={6} maxWidth="100%">
        <Box
          display="flex"
          gap={12}
          alignItems="start"
          flexDirection={{ base: "column", md: "row" }}
        >
          <CodeCard>
            <Image src="/GraphQL.svg" height={16} alt="GraphQL Logo" />

            <CodeCardContent>
              <Heading color="pink.400" mb={4} fontFamily="monospace" fontSize={{ base: 'xl', md: '3xl' }}>Post</Heading>

              <Text>id: ID!</Text>
              <Text>title: String!</Text>
              <Text>content: String!</Text>
            </CodeCardContent>
          </CodeCard>

          <CodeCard>
            <Icon
              position="absolute"
              width={16}
              height={16}
              top={-16}
              left={-8}
              transform="rotate(90deg)"
              color="pink.400"
              display={{ base: 'none', md: 'block' }}
            >
              <BsArrow90DegRight />
            </Icon>

            <Image src="/mobx.svg" height={16} alt="MobX Logo" />

            <CodeCardContent>
              <Heading color="pink.400" mb={4} fontFamily="monospace" fontSize={{ base: 'xl', md: '3xl' }}>class PostModel</Heading>

              <Text>id: string</Text>
              <Text>title: string</Text>
              <Text>content: string</Text>
            </CodeCardContent>
          </CodeCard>
        </Box>

        <Box
          display="flex"
          gap={12}
          alignItems="start"
          flexDirection={{ base: "column", md: "row" }}
        >
          <CodeCard>
            <Image src="/GraphQL.svg" height={16} alt="GraphQL Logo" />

            <CodeCardContent>
              <Heading color="pink.400" fontFamily="monospace" fontSize={{ base: 'xl', md: '3xl' }}>createPost</Heading>
              <Text color="pink.400">post: Post</Text>
              <Text color="pink.400" mb={4}>userErrors: [UserError]</Text>

              <Text>input: CreatePostInput!</Text>
            </CodeCardContent>
          </CodeCard>

          <CodeCard>
            <Icon
              position="absolute"
              width={16}
              height={16}
              top={-16}
              left={-8}
              transform="rotate(90deg)"
              color="pink.400"
              display={{ base: 'none', md: 'block' }}
            >
              <BsArrow90DegRight />
            </Icon>

            <Image src="/mobx.svg" height={16} alt="MobX Logo" />

            <CodeCardContent>
              <Heading color="pink.400" mb={4} fontFamily="monospace" fontSize={{ base: 'xl', md: '3xl' }}>class CreatePostMutation</Heading>

              <Text>args: CreatePostMutationArguments</Text>
              <Text>loading: boolean</Text>
              <Text>async mutate(): {"Promise<CreatePostMutationPayload>"}</Text>
            </CodeCardContent>
          </CodeCard>
        </Box>

        <Box
          display="flex"
          gap={12}
          alignItems="start"
          flexDirection={{ base: "column", md: "row" }}
        >
          <CodeCard>
            <Image src="/GraphQL.svg" height={16} alt="GraphQL Logo" />

            <CodeCardContent>
              <Heading color="pink.400" fontFamily="monospace" fontSize={{ base: 'xl', md: '3xl' }}>posts</Heading>
              <Text color="pink.400" mb={4}>posts: [Post]</Text>
              <Text>sortBy: String</Text>
            </CodeCardContent>
          </CodeCard>

          <CodeCard>
            <Icon
              position="absolute"
              width={16}
              height={16}
              top={-16}
              left={-8}
              transform="rotate(90deg)"
              color="pink.400"
              display={{ base: 'none', md: 'block' }}
            >
              <BsArrow90DegRight />
            </Icon>

            <Image src="/mobx.svg" height={16} alt="MobX Logo" />

            <CodeCardContent>
              <Heading color="pink.400" mb={4} fontFamily="monospace" fontSize={{ base: 'xl', md: '3xl' }}>class PostsQuery</Heading>

              <Text>args: PostsQueryArguments</Text>
              <Text>loading: boolean</Text>
              <Text>async query(): {"Promise<PostsQueryPayload>"}</Text>
            </CodeCardContent>
          </CodeCard>
        </Box>
      </Box>
    </Section>
  )
}

export function CodeCard({ children }: PropsWithChildren) {
  return (
    <Box
      padding={{ base: 6, md: 12 }}
      border="1px solid"
      borderColor="gray.600"
      borderRadius={{ base: 6, md: 12 }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: 4, md: 12 }}
      justifyContent="start"
      position="relative"
      width={{ base: '100%', md: 'auto' }}
      overflowX="auto"
      maxWidth="100%"
      sx={{
        'img': {
          width: { base: '32px', md: 'auto' },
          height: { base: '32px', md: 'auto' },
        }
      }}
    >
      {children}
    </Box>
  )
}

export function CodeCardContent({ children }: PropsWithChildren) {
  return (
    <Box
      borderColor="gray.600"
      fontFamily="monospace"
      fontSize={{ base: 'md', md: 'xl' }}
      color="pink.200"
      paddingTop={2}
    >
      {children}
    </Box>
  )
}