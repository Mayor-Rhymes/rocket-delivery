import { IFoodItem } from "../datatypes/itemsTypes";
import 'react-native-get-random-values'
import {nanoid} from 'nanoid';

// const AssetSource = "../../assets/images/";

const AssetSource = "../../assets/images/";

export const pizza: IFoodItem[] = [
    {
      id: nanoid(),
      image: require(`${AssetSource}pepperoni-pizza.jpg`),
      name: "Peperoni pizza",
      description:
        "Beautifully baked in a wonderful oven with peperoni and enough cheese",
      price: 5500,
    },
  
    {
      id: nanoid(),
      image: require(`${AssetSource}suya-pizza.jpg`),
      name: "Suya pizza",
      description:
        "Nigerian styled pizza with the meat that fills a hole and enough pepper to trigger a smile",
      price: 5000,
    },
  
    {
      id: nanoid(),
      image: require(`${AssetSource}neopolitan-pizza.jpg`),
      name: "Neopolitan pizza",
      description: "The original pizza of the italians. Simple and filling",
      price: 7000,
    },
    {
      id: nanoid(),
      image: require(`${AssetSource}mushroom-pizza.jpg`),
      name: "Mushroom pizza",
      description: "This is for the vegetarians. Delicious, earthy and healthy",
      price: 4200,
    },
    {
      id: nanoid(),
      image: require(`${AssetSource}margherita-pizza.jpeg`),
      name: "Margherita pizza",
      description: "Get a mix of all that is good about pizza.",
      price: 5800,
    },
    {
      id: nanoid(),
      image: require(`${AssetSource}newyork-pizza.jpeg`),
      name: "Newyork pizza",
      description:
        "The beloved of the United States. Greasy, cheesy, thin crust and large as a barrel",
      price: 10000,
    },
  ];
  