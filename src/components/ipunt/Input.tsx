import { Input} from '@chakra-ui/react'




export const InputContanier = ({placeholder, type}: {type:any, placeholder: string | any}): JSX.Element =>{
    return(

        
            <Input placeholder={placeholder} minWidth="100%" marginTop="10px" type={type} />
    
    )   
}