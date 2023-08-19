import {Text, Pressable, PressableProps} from 'react-native';
import type {PropsWithChildren} from 'react';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type props = PressableProps;

export default function Tab({children, ...props}: props) {
    
    return (
        <AnimatedPressable {...props}>
            {children}
        </AnimatedPressable>
    )
}