
import { ChakraProvider, Center, Box} from '@chakra-ui/react'
import { Header } from './components/header/header';
import { Login } from './components/login/login';
import { ButtonContanier } from './components/button/button';
import {Logou} from './service/alert'




function App() {
  return (
    <ChakraProvider>
      <Box background="#9413dc" minHeight="100vh" minWidth="100%">
      <Center>
        <Header/>
      </Center>
      <Login />
      <ButtonContanier name="Entrar" onClick={Logou}></ButtonContanier>
      </Box>
    </ChakraProvider>
  );
}

export default App;
