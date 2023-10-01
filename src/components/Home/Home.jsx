import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import './Home.scss';
import aste from "../../assets/images/aste.svg"

const Home = () => {
  return (
    <Box>
      <div className='text-with-circle'>
        <Text className='h1' ml={8} mt={8}>
          GROWTH IS ABOUT VENTURING
          <Image className='circle' src={aste}></Image>
        </Text>
      </div>
    </Box>
  );
};

export default Home;
