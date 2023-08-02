import { IFoodItem } from "../datatypes/itemsTypes";
const AssetSource = "../../assets/images/";

export const drinks: IFoodItem[] = [

    {
        image: require(`${AssetSource}cocacola.jpg`),
        name: "Cocacola",
        description: "The original carbonated drink. Enjoy.",
        price: "700 NGN",
    
    },
    {
        image: require(`${AssetSource}fanta.jpg`),
        name: "Fanta",
        description: "From the company that brough you cocacola. The orange burst of goodness",
        price: "700 NGN",
    
    },

]