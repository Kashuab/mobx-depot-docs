import {ComponentStyleConfig} from "@chakra-ui/react";

export const buttonTheme: ComponentStyleConfig = {
  variants: {
    gradient: {
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom right, #5801E3 0%, #42e59a 100%)",
        opacity: 1,
        transition: "opacity 0.2s",
        zIndex: -1,
      },
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom right, #42e59a 0%, #5801E3 100%)",
        opacity: 0,
        transition: "opacity 0.2s",
        zIndex: -1,
      },
      _hover: {
        "&::after": {
          opacity: 0
        },
        "&::before": {
          opacity: 1
        }
      }
    }
  },
  defaultProps: {
    variant: "gradient"
  }
}