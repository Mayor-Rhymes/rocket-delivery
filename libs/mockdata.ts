import type { ImageSourcePropType } from "react-native";

export interface ISnack {

    image: ImageSourcePropType;
    name: string;
    description: string;
    price: string;
}



export const snacks: ISnack[] = [
    
    {
        image: require("../assets/images/shawarma.jpg"),
        name: "Shawarma",
        description: "Beautifully made wrap with chicken, mollases, tomatoes and onions",
        price: "2,500 NGN"

    },
    
    {
        image: require("../assets/images/doughnuts.jpg"),
        name: "Doughnuts",
        description: "Freshly baked doughnuts made with love",
        price: "2,000 NGN"

    },
   

    

]
export const pizza: ISnack[] = [
    
    {
        image: require("../assets/images/shawarma.jpg"),
        name: "Peperoni pizza",
        description: "Beautifully baked in a wonderful oven with peperoni and enough cheese",
        price: "5,500 NGN"

    },
    
    {
        image: require("../assets/images/doughnuts.jpg"),
        name: "Suya pizza",
        description: "Freshly baked doughnuts made with love",
        price: "5,000 NGN"

    },
   

    

]