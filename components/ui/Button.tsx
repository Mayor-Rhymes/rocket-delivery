import {Pressable, PressableProps} from 'react-native';
import {ReactNode} from 'react'


interface ButtonProps extends PressableProps{
     
    
    
}


export default function Button({children, ...props}: ButtonProps) {
   
   return(
    <Pressable {...props}>
       {children}
    </Pressable>
   )
    
}