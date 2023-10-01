import React from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import logo from "../../assets/images/logo.png";
import './Header.scss'; 

function Header() {
  return (
    <Box color="white">
      <Flex align="center" justify="space-between" mt={4}ml={8} mr={8}>
        <Button className="custom-button">Sobre mi</Button>
        <Image alt="Logo" w="sm" src={logo} />
        <Button className="custom-button">Porfolio</Button>
      </Flex>
      <hr className="header-line" />
    </Box>
  );
}

export default Header;
