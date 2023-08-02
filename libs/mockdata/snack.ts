import { IFoodItem } from "../datatypes/itemsTypes";

// import { AssetSource } from "./pathAbstraction";
const AssetSource = "../../assets/images/";

export const snacks: IFoodItem[] = [
    {
      image: require(`${AssetSource}shawarma.jpg`),
      name: "Shawarma",
      description:
        "Beautifully made wrap with chicken, mollases, tomatoes and onions",
      price: "2,500 NGN",
    },
  
    {
      image: require(`${AssetSource}doughnuts.jpg`),
      name: "Doughnuts",
      description: "Freshly baked doughnuts made with love",
      price: "2,000 NGN",
    },
  
    {
      image: require(`${AssetSource}sausage-roll.jpg`),
      name: "Sausage Rolls",
      description:
        "Wonderfully and lovingly baked sausage rolls. Stuffed with meaty goodness and delicious flavours",
      price: "1,500 NGN",
    },
  ];
  