import {Box, BoxProps} from "@chakra-ui/react";

type SectionProps = BoxProps & {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export function Section(props: SectionProps) {
  const { children, fullWidth = false, ...boxProps } = props;

  return (
    <Box
      width="100%"
      borderBottom="1px solid"
      borderBottomColor="gray.600"
      display="flex"
    >
      <Box
        minHeight="60rem"
        width={fullWidth ? "100%" : "100rem"}
        maxWidth="100%"
        mx="auto"
        padding={{ base: 8, md: 16 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="start"
        gap={8}
        {...boxProps}
      >
        {children}
      </Box>
    </Box>
  )
}