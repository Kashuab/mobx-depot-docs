import Head from 'next/head'
import {Box, Button, Heading, Image, Link, Text} from "@chakra-ui/react";
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
            fontSize={{ base: "4xl", xl: "7xl" }}
            background="linear-gradient(to bottom right, #5801E3 0%, #FC4646 100%)"
            backgroundClip="text"
            textAlign="center"
            margin={0}
          >
            MobX Depot
          </Heading>

          <Text color="white" fontSize="2xl" textAlign="center">
            Scaffold a reactive data store with your GraphQL schema.
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

          <Box display="flex" alignItems="center" gap={8} flexWrap="wrap" justifyContent="center">
            <Link isExternal href="https://npmjs.com/package/mobx-depot">
              <Image
                alt="NPM version"
                src="https://img.shields.io/npm/v/mobx-depot?style=for-the-badge"
              />
            </Link>

            <Link isExternal href="https://github.com/Kashuab/mobx-depot">
              <Image
                alt="Last commit date"
                src="https://img.shields.io/github/last-commit/Kashuab/mobx-depot?style=for-the-badge"
              />
            </Link>


            <Link isExternal href="https://bundlephobia.com/package/mobx-depot">
              <Image
                alt="GZipped size"
                src="https://img.shields.io/bundlephobia/minzip/mobx-depot?style=for-the-badge"
              />
            </Link>
          </Box>
        </Section>

        <Codegen />
      </Box>
    </>
  )
}
