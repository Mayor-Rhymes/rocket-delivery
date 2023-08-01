import {Text, Pressable, PressableProps} from 'react-native';


interface TabProps extends PressableProps {
       
}

export default function Tab({children, ...props}: TabProps) {
    
    return (
        <Pressable {...props}>
            {children}
        </Pressable>
    )
}