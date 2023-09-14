import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactGoogleFonts from "react-google-fonts";
import theme from "./styles/theme";
import "./styles/typography.scss";
import Home from "./components/Home/Home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ReactGoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
<Home/>
      <h1>Título de prueba</h1>
      <p>Párrafo de prueba.</p>
      <p className="small">Texto pequeño de prueba.</p>
    </ChakraProvider>
  );
}

export default App;
