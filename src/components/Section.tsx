import {Box, BoxProps} from "@chakra-ui/react";

type SectionProps = BoxProps & {
  children: React.ReactNode;
}

export function Section(props: SectionProps) {
  const { children, ...boxProps } = props;

  return (
    <Box
      minHeight="60rem"
      borderBottom="1px solid"
      borderBottomColor="gray.600"
      padding={16}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      gap={8}
      {...boxProps}
    >
      {children}
    </Box>
  )
}