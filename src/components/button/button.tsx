
import { Button, Center } from '@chakra-ui/react'
import React from 'react';


interface IButtoncontanierProps {
    name: string;
    onClick: () => void;
}

export const ButtonContanier: React.FC<IButtoncontanierProps> = ({name, onClick}) => {
    return (
        <Center marginTop="20px">
            <Button
                onClick={onClick} 
                colorScheme='gray'
                size='md'
                width="70%" 
                borderRadius="50px" 
                background="transparent" 
                color="white" 
                border="1px solid #ffffff">{name}</Button>
        </Center>
    )
}