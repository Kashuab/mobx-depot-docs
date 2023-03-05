import Head from 'next/head'
import {Box, Button, Heading, Image, Text} from "@chakra-ui/react";
import {Section} from "~/components/Section";
import {Codegen} from "~/components/Codegen";

export default function Home() {
  return (
    <>
      <Head>
        <title>MobX Depot</title>
        <meta name="description" content="Scaffold your GraphQL schema with MobX powered models." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box display="flex" flexDirection="column">
        <Section alignItems="center" fullWidth>
          <Image src="/MobX Depot Logo.svg" />

          <Heading
            color="white"
            fontSize={{ base: "2xl", md: "7xl" }}
            background="linear-gradient(to bottom right, #5801E3 0%, #FC4646 100%)"
            backgroundClip="text"
            textAlign="center"
            margin={0}
          >
            MobX Depot
          </Heading>

          <Text color="white" fontSize="2xl">
            Supercharge your GraphQL API interactions with MobX
          </Text>

          <Box display="flex" alignItems="center" gap={8}>
            <Button
              as="a"
              color="white"
              size="lg"
              href="/docs/get-started"
            >
              Get started
            </Button>
          </Box>

          <Box display="flex" alignItems="center" gap={8}>
            <Image src="https://img.shields.io/npm/v/mobx-depot?style=for-the-badge" />
            <Image src="https://img.shields.io/github/last-commit/Kashuab/mobx-depot?style=for-the-badge" />
          </Box>
        </Section>

        <Codegen />
      </Box>
    </>
  )
}
