import { extendTheme } from "@chakra-ui/react";
import "./colors.scss"

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  initialColorMode: "light", 
  useSystemColorMode: false, 
  colors: {
    light: {
      primary:"#dcd9d8", 
      secondary: "#b3bdca", 
    },
    dark: {
      primary: "#182434", 
      secondary: "#6d829b", 
    },
  },
});

export default theme;
