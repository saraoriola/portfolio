import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Box, Flex, Text, Button, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import "./Header.scss";


const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Box bg={colorMode === "light" ? "blue.500" : "gray.800"} color="white" p={4}>
        <Flex align="center">
          <Text fontSize="xl" fontWeight="bold">
            Mi Portfolio
          </Text>
          <Spacer />
          <Box>
            <Link to="/" >
              Inicio
            </Link>
            <Link to="/proyectos" >
              Proyectos
            </Link>
            <Link to="/contacto" >
              Contacto
            </Link>
          </Box>
          <Spacer />
          <Button colorScheme="teal" size="sm">
            Iniciar sesión
          </Button>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <i className="fa fa-moon"></i> : <i className="fa fa-sun"></i>}
            size="sm"
            ml={2}
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
    );
  };
  
  export default Header;
  