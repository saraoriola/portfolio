import React from 'react';
import { Box, Flex, Link, Button, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify={['center', 'space-between']}
      bg="transparent"
      p={4}
      flexWrap="wrap"
      flexDirection={['column', 'row']}
    >
      <Image src="/logo.png" alt="Logo" h="40px" mb={[2, 0]} />
      <Box
        mt={[2, 0]}
        fontSize={['sm', 'md']}
        textAlign={['center', 'center']}
      >
        <Link href="#">Inicio</Link>
        <Link href="#">About</Link>
        <Link href="#">Contacto</Link>
        <Button colorScheme="teal" ml={[0, 2]}>
          Portfolio
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
