import {Box, BoxProps, Button} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useState} from "react";
import {FiMenu, FiX} from "react-icons/fi";

type NavigationProps = {
  children: React.ReactNode
}

export function Navigation(props: NavigationProps) {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box flexShrink={0} flexGrow={1}>
      <Button
        display={{ base: "block", md: "none" }}
        p={3}
        position="fixed"
        top={20}
        left={0}
        onClick={() => setIsOpen(c => !c)}
        sx={{ svg: { margin: 'auto' } }}
        variant="plain"
        backgroundColor="blackAlpha.200"
        borderRight="1px"
        borderBottom="1px"
        borderColor="gray.600"
        height="auto"
        zIndex={8}
        borderTopRightRadius={0}
        backdropFilter="auto"
        backdropBlur="20px"
      >
        <FiMenu color="white" size={32} />
      </Button>

      <Box
        width="20rem"
        borderRight="1px solid"
        borderRightColor="gray.600"
        display="flex"
        flexDirection="column"
        position={{ base: "fixed", md: "static" }}
        backgroundColor="blackAlpha.200"
        backdropFilter="auto"
        backdropBlur="20px"
        transform={{ base: isOpen ? "translateX(0)" : "translateX(-100%)", md: "none" }}
        zIndex={9}
        height="100%"
        transition="transform 0.2s ease-out"
      >
        {children}

        <NavigationItem onClick={() => setIsOpen(false)} display={{ base: 'block', md: 'none' }}>
          <FiX size={20} />
          Close
        </NavigationItem>
      </Box>
    </Box>
  )
}

type NavigationItemProps = BoxProps & {
  href?: string
  onClick?: () => void;
  children: React.ReactNode
}

export function NavigationItem(props: NavigationItemProps) {
  const { href, onClick, children, ...otherBoxProps } = props;

  const router = useRouter();

  const isActive = href === router.pathname;

  const boxProps = {
    as: onClick ? "button" : "a",
    href: href || undefined,
    onClick,
    color: isActive ? "helium.green.500" : "white",
    fontWeight: isActive ? "bold" : "normal",
    borderBottomColor: "gray.600",
    ...otherBoxProps,
  }

  return (
    <Box {...boxProps as any}>
      <Box
        py={4}
        px={4}
        backgroundColor={isActive ? "whiteAlpha.100" : "none"}
        display="flex"
        alignItems="center"
        gap={4}
        lineHeight={1}
      >
        {children}
      </Box>
    </Box>
  )
}