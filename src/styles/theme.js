import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
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
});

export default theme;
