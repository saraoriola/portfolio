import React from "react";
import { Box, Flex, Link, Text, Button, IconButton, Spacer } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="blue.500" color="white" p={4}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Mi Portfolio
        </Text>
        <Spacer />
        <Box>
          <Link to="/" marginRight={4}>
            Inicio
          </Link>
          <Link to="/proyectos" marginRight={4}>
            Proyectos
          </Link>
          <Link to="/contacto" marginRight={4}>
            Contacto
          </Link>
        </Box>
        <Spacer />
        <Button colorScheme="teal" size="sm">
          Iniciar sesión
        </Button>
        <IconButton
          aria-label="Toggle dark mode"
          icon={<i className="fa fa-moon"></i>}
          size="sm"
          ml={2}
        />
      </Flex>
    </Box>
  );
};

export default Header;
