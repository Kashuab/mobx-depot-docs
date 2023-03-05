import type { AppProps } from 'next/app'
import {Box, ChakraProvider} from "@chakra-ui/react";
import {NavigationBar} from "~/components/NavigationBar";
import {theme} from "~/theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavigationBar />

      <Box
        backgroundColor="gray.900"
        width="100%"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}
