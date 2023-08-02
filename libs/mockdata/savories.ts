import { IFoodItem } from "../datatypes/itemsTypes";
const AssetSource = "../../assets/images/";

export const savories: IFoodItem[] = [


    {
        image: require(`${AssetSource}jollofrice.jpeg`),
        name: "Jollofrice",
        description: "Enjoy the tasty combination of spicy, savory and colorful. From deep within the minds of west africa.",
        price: "2,500 NGN",
    
    },
    {
        image: require(`${AssetSource}friedrice.jpg`),
        name: "Friedrice",
        description: "No description",
        price: "2,000 NGN",
    
    },
]