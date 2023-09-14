import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif", // Utiliza la fuente "Montserrat" que cargaste desde Google Fonts
    heading: "Montserrat, sans-serif", // Utiliza la misma fuente para encabezados
  },
  colors: {
    // Define tus colores personalizados aquí
  },
  // Otras configuraciones de tu tema
});

export default theme;
