import React, {useState} from 'react';
import './App.css';
import {
  Container, 
  Heading,
  Box, 
  Text, 
  Button
} from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading> 
          Monster Hunter Rise: Monster Quiz
        </Heading>
        <br />
        <Box>
          <Text>
            Do you remember the monster based on its icon? Test your memory here!
          </Text>
          <br />
        </Box>
        <Button colorScheme={'whiteAlpha'} size='lg'>
          Start!
        </Button>
      </header>
    </div>
  );
}

export default App;
