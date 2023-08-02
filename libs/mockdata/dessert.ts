import { IFoodItem } from "../datatypes/itemsTypes";
// import { AssetSource } from "./pathAbstraction";

const AssetSource = "../../assets/images/";

export const desserts: IFoodItem[] = [

    {
        image: require(`${AssetSource}vanilla-icecream.jpg`),
        name: "Vanilla Ice Cream 1.5L",
        description: "Vanilla flavored bundle of creaminess, goodness and sweetness. Feel the chills right in the tongue",
        price: "1,700 NGN",
    
    },
    {
        image: require(`${AssetSource}strawberry-icecream.jpg`),
        name: "Strawberry Ice Cream 1.5L",
        description: "Strawberry flavored bundle of creaminess, goodness and sweetness. Feel the chills right in the tongue",
        price: "1,750 NGN",
    
    },
    {
        image: require(`${AssetSource}chocolate-icecream.jpg`),
        name: "Chocolate Ice Cream 1.5L",
        description: "Chocolate flavored bundle of creaminess, goodness and sweetness. Feel the chills right in the tongue",
        price: "1,750 NGN",
    
    },
    {
        image: require(`${AssetSource}macaron.jpg`),
        name: "Macarons pack",
        description: "Beautifully baked macarons or french macaroons. Filled with different flavors of cream",
        price: "750 NGN",
    
    },
    {
        image: require(`${AssetSource}tiramisu.jpg`),
        name: "Tiramisu",
        description: "Right from the heart of Italy. For the love of all that is sweet and beautiful. Indulge in that sweetness.",
        price: "4,500 NGN",
    
    },
    {
        image: require(`${AssetSource}cupcake.jpg`),
        name: "Cupcake (10 in a box)",
        description: "10 hearty and crumby cupcakes in one box.",
        price: "5,000 NGN",
    
    },
]