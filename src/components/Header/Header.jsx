import React from "react";
import { Link } from "react-router-dom";

import { Box, Flex, Text, Button, IconButton, useColorMode, Spacer } from "@chakra-ui/react";
import { Switch } from '@chakra-ui/react'
import { FaMoon, FaSun } from "react-icons/fa";
import "./Header.scss";


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
        <Box bg={colorMode === "light" ? "blue.500" : "gray.800"} color="white" p={4}>
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
            <Button colorScheme="teal" size="sm">
              Iniciar sesión
            </Button>
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