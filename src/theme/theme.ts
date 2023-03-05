import {buttonTheme} from "./components/buttonTheme";
import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    helium: {
      purple: {
        500: "#5801E3",
      },
      red: {
        500: "#FC4646",
        300: "#ff7272"
      },
      green: {
        500: "#42e59a",
      },
      blue: {
        500: "#40A5FF",
      }
    }
  },
  components: {
    Button: buttonTheme
  }
})