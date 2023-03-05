import {Box, Image, Text} from "@chakra-ui/react";
import {BsGithub} from "react-icons/bs";
import { Link } from '@chakra-ui/react';
import { default as NextLink } from "next/link";

export function NavigationBar() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      display="flex"
      alignItems="center"
      padding={4}
      backgroundColor="blackAlpha.200"
      borderBottom="1px solid"
      borderBottomColor="gray.600"
      backdropFilter="auto"
      backdropBlur="20px"
      zIndex={10}
    >
      <Link as={NextLink} href="/" display="flex" alignItems="center">
        <Image src="/mobx-depot-flat.svg" height={12} alt="MobX Depot Logo" mr={4} />

        <Text color="white" fontSize="xl" fontWeight="bold">MobX Depot</Text>
      </Link>

      <Box ml="auto" display="flex" alignItems="center" gap={8}>
        <Link as={NextLink} href="/docs/get-started" color="helium.blue.500">
          <Text fontSize="xl" fontWeight="bold">Docs</Text>
        </Link>

        <Link href="https://github.com/Kashuab/mobx-depot" isExternal>
          <BsGithub size="3rem" color="white" />
        </Link>
      </Box>
    </Box>
  )
}