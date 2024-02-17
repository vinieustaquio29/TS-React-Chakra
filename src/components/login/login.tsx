import {Center, Box} from '@chakra-ui/react'
import { InputContanier } from '../ipunt/Input'

export const Login = () =>{
    return (
        <Center marginTop="60px">
        <Box background="#ffffff" borderRadius="40px" minWidth="70%" padding="20px" fontSize="20px" fontWeight="700" >
          <h1>Faça seu Login</h1>
        <InputContanier placeholder='E-mail' type="Email"/>
        <InputContanier placeholder='Passworld' type="password" />
        </Box>
        </Center>
            
        )
}