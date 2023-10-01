import { Box, Button, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import Project1 from './Project1/Project';
import Project2 from './Project2/Project2';
import Project3 from './Project3/Project3';
import Project4 from './Project4/Project4';
import "./Cards.scss";

const Cards = () => {
  return (
    <Box w="50%">
      <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={8}>
        {/* Columna 1 */}
        <Box>
          <Project1 />
          <Project2 />
        </Box>

        {/* Columna 2 */}
        <Box ml={-8}>
          <Text className='text'>
Proyectos destacados
          </Text>
          <Button mt={4}className="custom-button-project">Ver más proyectos</Button>
          <Project3/>
          <Project4/>
        </Box>
      </Grid>
    </Box>
  );
};

export default Cards;
