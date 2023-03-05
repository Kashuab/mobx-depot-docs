import {Box, Image, Link, Text} from "@chakra-ui/react";
import {BsGithub} from "react-icons/bs";

export function Navigation() {
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
      <Link href="/" display="flex" alignItems="center">
        <Image src="/mobx-depot-flat.svg" height={12} alt="MobX Depot Logo" mr={4} />

        <Text color="white" fontSize="xl" fontWeight="bold">MobX Depot</Text>
      </Link>

      <Box ml="auto">
        <Link href="https://github.com/Kashuab/mobx-depot" isExternal>
          <BsGithub size="3rem" color="white" />
        </Link>
      </Box>
    </Box>
  )
}