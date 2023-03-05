import {Box, Heading, Icon, Image, Text} from "@chakra-ui/react";
import {Section} from "./Section";
import { BsArrow90DegRight } from 'react-icons/bs';

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

      <Box display="flex" flexDirection="column" gap={16} mt={6}>
        <Box display="flex" gap={12} alignItems="start">
          <Box
            padding={12}
            border="1px solid"
            borderColor="gray.600"
            borderRadius={12}
            display="flex"
            gap={12}
            justifyContent="start"
          >
            <Image src="/GraphQL.svg" height={16} alt="GraphQL Logo" />

            <Box
              borderColor="gray.600"
              fontFamily="monospace"
              fontSize="xl"
              color="pink.200"
              paddingTop={2}
            >
              <Heading color="pink.400" mb={4} fontFamily="monospace">Post</Heading>

              <Text>id: ID!</Text>
              <Text>title: String!</Text>
              <Text>content: String!</Text>
            </Box>
          </Box>

          <Box
            padding={12}
            border="1px solid"
            borderColor="gray.600"
            borderRadius={12}
            display="flex"
            gap={12}
            justifyContent="start"
            mt={32}
            position="relative"
          >
            <Icon
              position="absolute"
              width={16}
              height={16}
              top={-16}
              left={-8}
              transform="rotate(90deg)"
              color="pink.400"
            >
              <BsArrow90DegRight />
            </Icon>

            <Image src="/mobx.svg" height={16} alt="MobX Logo" />

            <Box
              borderColor="gray.600"
              fontFamily="monospace"
              fontSize="xl"
              color="pink.200"
              paddingTop={2}
            >
              <Heading color="pink.400" mb={4} fontFamily="monospace">class PostModel</Heading>

              <Text>id: string</Text>
              <Text>title: string</Text>
              <Text>content: string</Text>
            </Box>
          </Box>
        </Box>

        <Box display="flex" gap={12} alignItems="start">
          <Box
            padding={12}
            border="1px solid"
            borderColor="gray.600"
            borderRadius={12}
            display="flex"
            gap={12}
            justifyContent="start"
          >
            <Image src="/GraphQL.svg" height={16} alt="GraphQL Logo" />

            <Box
              borderColor="gray.600"
              fontFamily="monospace"
              fontSize="xl"
              color="pink.200"
              paddingTop={2}
            >
              <Heading color="pink.400" fontFamily="monospace">createPost</Heading>
              <Text color="pink.400">post: Post</Text>
              <Text color="pink.400" mb={4}>userErrors: [UserError]</Text>

              <Text>input: CreatePostInput!</Text>
            </Box>
          </Box>

          <Box
            padding={12}
            border="1px solid"
            borderColor="gray.600"
            borderRadius={12}
            display="flex"
            gap={12}
            justifyContent="start"
            mt={32}
            position="relative"
          >
            <Icon
              position="absolute"
              width={16}
              height={16}
              top={-16}
              left={-8}
              transform="rotate(90deg)"
              color="pink.400"
            >
              <BsArrow90DegRight />
            </Icon>

            <Image src="/mobx.svg" height={16} alt="MobX Logo" />

            <Box
              borderColor="gray.600"
              fontFamily="monospace"
              fontSize="xl"
              color="pink.200"
              paddingTop={2}
            >
              <Heading color="pink.400" mb={4} fontFamily="monospace">class CreatePostMutation</Heading>

              <Text>args: CreatePostMutationArguments</Text>
              <Text>loading: boolean</Text>
              <Text>async mutate(): {"Promise<CreatePostMutationPayload>"}</Text>
            </Box>
          </Box>
        </Box>

        <Box display="flex" gap={12} alignItems="start">
          <Box
            padding={12}
            border="1px solid"
            borderColor="gray.600"
            borderRadius={12}
            display="flex"
            gap={12}
            justifyContent="start"
          >
            <Image src="/GraphQL.svg" height={16} alt="GraphQL Logo" />

            <Box
              borderColor="gray.600"
              fontFamily="monospace"
              fontSize="xl"
              color="pink.200"
              paddingTop={2}
            >
              <Heading color="pink.400" fontFamily="monospace">posts</Heading>
              <Text color="pink.400" mb={4}>posts: [Post]</Text>
              <Text>sortBy: String</Text>
            </Box>
          </Box>

          <Box
            padding={12}
            border="1px solid"
            borderColor="gray.600"
            borderRadius={12}
            display="flex"
            gap={12}
            justifyContent="start"
            mt={32}
            position="relative"
          >
            <Icon
              position="absolute"
              width={16}
              height={16}
              top={-16}
              left={-8}
              transform="rotate(90deg)"
              color="pink.400"
            >
              <BsArrow90DegRight />
            </Icon>

            <Image src="/mobx.svg" height={16} alt="MobX Logo" />

            <Box
              borderColor="gray.600"
              fontFamily="monospace"
              fontSize="xl"
              color="pink.200"
              paddingTop={2}
            >
              <Heading color="pink.400" mb={4} fontFamily="monospace">class PostsQuery</Heading>

              <Text>args: PostsQueryArguments</Text>
              <Text>loading: boolean</Text>
              <Text>async query(): {"Promise<PostsQueryPayload>"}</Text>
            </Box>
          </Box>
        </Box>

      </Box>
    </Section>
  )
}