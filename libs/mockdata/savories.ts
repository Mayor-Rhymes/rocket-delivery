import { IFoodItem } from "../datatypes/itemsTypes";
import 'react-native-get-random-values'
import {nanoid} from 'nanoid';
const AssetSource = "../../assets/images/";

export const savories: IFoodItem[] = [


    {
        id: nanoid(),
        image: require(`${AssetSource}jollofrice.jpeg`),
        name: "Jollofrice",
        description: "Enjoy the tasty combination of spicy, savory and colorful. From deep within the minds of west africa.",
        price: 2500,
    
    },
    {
        id: nanoid(),
        image: require(`${AssetSource}friedrice.jpg`),
        name: "Friedrice",
        description: "No description",
        price: 2000,
    
    },
]