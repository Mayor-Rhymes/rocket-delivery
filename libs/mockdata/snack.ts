import { IFoodItem } from "../datatypes/itemsTypes";
import 'react-native-get-random-values'
import {nanoid} from 'nanoid';
// import { AssetSource } from "./pathAbstraction";
const AssetSource = "../../assets/images/";

export const snacks: IFoodItem[] = [
    {
      id: nanoid(),
      image: require(`${AssetSource}shawarma.jpg`),
      name: "Shawarma",
      description:
        "Beautifully made wrap with chicken, mollases, tomatoes and onions",
      price: 2500,
    },
  
    {
      id: nanoid(),
      image: require(`${AssetSource}doughnuts.jpg`),
      name: "Doughnuts",
      description: "Freshly baked doughnuts made with love",
      price: 2000,
    },
  
    {
      id: nanoid(),
      image: require(`${AssetSource}sausage-roll.jpg`),
      name: "Sausage Rolls",
      description:
        "Wonderfully and lovingly baked sausage rolls. Stuffed with meaty goodness and delicious flavours",
      price: 1500,
    },
  ];

  