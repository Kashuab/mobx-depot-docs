import {Box} from "@chakra-ui/react";
import {useRouter} from "next/router";

type NavigationProps = {
  children: React.ReactNode
}

export function Navigation(props: NavigationProps) {
  const { children } = props

  return (
    <Box
      width="20rem"
      borderRight="1px solid"
      borderRightColor="gray.600"
      flexShrink={0}
      display="flex"
      flexDirection="column"
    >
      {children}
    </Box>
  )
}

type NavigationItemProps = {
  href: string
  children: React.ReactNode
}

export function NavigationItem(props: NavigationItemProps) {
  const { href, children } = props

  const router = useRouter();

  const isActive = href === router.pathname;

  return (
    <Box
      as="a"
      href={href}
      color={isActive ? "helium.green.500" : "white"}
      fontWeight={isActive ? "bold" : "normal"}
      borderBottomColor="gray.600"
    >
      <Box py={3} px={4} backgroundColor={isActive ? "whiteAlpha.100" : "none"}>
        {children}
      </Box>
    </Box>
  )
}