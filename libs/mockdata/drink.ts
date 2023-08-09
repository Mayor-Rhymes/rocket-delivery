import { IFoodItem } from "../datatypes/itemsTypes";
import 'react-native-get-random-values'
import {nanoid} from 'nanoid';
const AssetSource = "../../assets/images/";

export const drinks: IFoodItem[] = [

    {
        id: nanoid(),
        image: require(`${AssetSource}cocacola.jpg`),
        name: "Cocacola",
        description: "The original carbonated drink. Enjoy.",
        price: 700,
    
    },
    {
        id: nanoid(),
        image: require(`${AssetSource}fanta.jpg`),
        name: "Fanta",
        description: "From the company that brough you cocacola. The orange burst of goodness",
        price: 700,
    
    },

]