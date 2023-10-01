import React, { useState } from 'react';
import { Box, Flex, Button, Spacer, Image, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa'; 
import logo from "../../assets/images/logo.png";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="#292929">
      <Flex
        flexWrap="wrap"
        justify="space-between"
        align="center"
        paddingY={4}
        paddingX={{ base: 4, md: 8 }}
      >
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={<FaBars />}
          variant="ghost"
          color="#fff"
          onClick={onToggle} 
        />
        <Button
          backgroundColor="#64a0e6"
          color="#fff"
          _hover={{ backgroundColor: '#007bff' }}
          onClick={() => console.log('Ir al portfolio')}
          borderRadius={20}
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="bold"
          display={{ base: 'none', md: 'block' }} 
        >
          Portfolio
        </Button>
        <Box flexShrink={1} flexGrow={2} textAlign="center" mt={{ base: 4, md: 0 }}>
          <Image
            src={logo}
            alt="Logo"
            style={{ width: '100%', height: 'auto', maxWidth: '200px', filter: 'invert(1)' }}
          />
        </Box>
        <Spacer />
        <Button
          backgroundColor="#64a0e6"
          color="#fff"
          _hover={{ backgroundColor: '#007bff' }}
          onClick={() => console.log('Ir a Sobre Mí')}
          borderRadius={20}
          fontSize={{ base: 'sm', md: 'md' }}
          fontWeight="bold"
          display={{ base: 'none', md: 'block' }} 
        >
          Sobre Mí
        </Button>
      </Flex>
      {isOpen && (
        <Box
          bg="#292929"
          position="absolute"
          top="60px"
          right="0"
          left="0"
          display={{ base: 'block', md: 'none' }}
          borderBottom="1px solid #fff"
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Button
                variant="ghost"
                color="#fff"
                onClick={() => console.log('Ir al Portfolio')}
                borderRadius={0}
                paddingY={2}
                paddingLeft={4}
              >
                Ir al Portfolio
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                color="#fff"
                onClick={() => console.log('Ir a Sobre Mí')}
                borderRadius={0}
                paddingY={2}
                paddingLeft={4}
              >
                Ir a Sobre Mí
              </Button>
            </li>
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Header;
