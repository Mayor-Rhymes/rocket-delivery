import { IFoodItem } from "../datatypes/itemsTypes";
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'


const AssetSource = "../../assets/images/";

export const desserts: IFoodItem[] = [

    {
        id: nanoid(),
        image: require(`${AssetSource}vanilla-icecream.jpg`),
        name: "Vanilla Ice Cream 1.5L",
        description: "Vanilla flavored bundle of creaminess, goodness and sweetness. Feel the chills right in the tongue",
        price: 1700,
    
    },
    {
        id: nanoid(),
        image: require(`${AssetSource}strawberry-icecream.jpg`),
        name: "Strawberry Ice Cream 1.5L",
        description: "Strawberry flavored bundle of creaminess, goodness and sweetness. Feel the chills right in the tongue",
        price: 1750,
    
    },
    {
        id: nanoid(),
        image: require(`${AssetSource}chocolate-icecream.jpg`),
        name: "Chocolate Ice Cream 1.5L",
        description: "Chocolate flavored bundle of creaminess, goodness and sweetness. Feel the chills right in the tongue",
        price: 1750,
    
    },
    {
        id: nanoid(),
        image: require(`${AssetSource}macaron.jpg`),
        name: "Macarons pack",
        description: "Beautifully baked macarons or french macaroons. Filled with different flavors of cream",
        price: 750,
    
    },
    {
        id: nanoid(),
        image: require(`${AssetSource}tiramisu.jpg`),
        name: "Tiramisu",
        description: "Right from the heart of Italy. For the love of all that is sweet and beautiful. Indulge in that sweetness.",
        price: 4500,
    
    },
    {
        id: nanoid(),
        image: require(`${AssetSource}cupcake.jpg`),
        name: "Cupcake (10 in a box)",
        description: "10 hearty and crumby cupcakes in one box.",
        price: 5000,
    
    },
]