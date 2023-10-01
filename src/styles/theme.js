import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    light: {
      primary: "#007bff",
      secondary: "#6c757d",
    },
    dark: {
      primary: "#64a0e6",
      secondary: "#ced4da",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#292929", 
      },
    },
  },
});

export default theme;
