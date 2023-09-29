import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text,useColorMode, Spacer } from "@chakra-ui/react";
import { Switch } from '@chakra-ui/react'
import "./Header.scss";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = {
    light: "light.primary",
    dark: "dark.primary",
  };

  const textColor = {
    light: "#182434",
    dark: "#dcd9d8", 
  };

  return (
    <Box bg={bgColor[colorMode]} color={textColor[colorMode]} p={4}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Mi Portfolio
        </Text>
        <Box ml={4}>
          <Link to="/">Inicio</Link>
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/contacto">Contacto</Link>
        </Box>
        <Spacer/>
        <Box ml={2}>
          <Switch
            isChecked={colorMode === "dark"}
            onChange={() => toggleColorMode()}
            size="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
