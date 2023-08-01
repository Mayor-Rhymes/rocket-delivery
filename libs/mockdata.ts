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
    description:
      "Beautifully made wrap with chicken, mollases, tomatoes and onions",
    price: "2,500 NGN",
  },

  {
    image: require("../assets/images/doughnuts.jpg"),
    name: "Doughnuts",
    description: "Freshly baked doughnuts made with love",
    price: "2,000 NGN",
  },

  {
    image: require("../assets/images/sausage-roll.jpg"),
    name: "Sausage Rolls",
    description:
      "Wonderfully and lovingly baked sausage rolls. Stuffed with meaty goodness and delicious flavours",
    price: "1,500 NGN",
  },
];

export const pizza: ISnack[] = [
  {
    image: require("../assets/images/pepperoni-pizza.jpg"),
    name: "Peperoni pizza",
    description:
      "Beautifully baked in a wonderful oven with peperoni and enough cheese",
    price: "5,500 NGN",
  },

  {
    image: require("../assets/images/suya-pizza.jpg"),
    name: "Suya pizza",
    description:
      "Nigerian styled pizza with the meat that fills a hole and enough pepper to trigger a smile",
    price: "5,000 NGN",
  },

  {
    image: require("../assets/images/neopolitan-pizza.jpg"),
    name: "Neopolitan pizza",
    description: "The original pizza of the italians. Simple and filling",
    price: "7,000 NGN",
  },
  {
    image: require("../assets/images/mushroom-pizza.jpg"),
    name: "Mushroom pizza",
    description: "This is for the vegetarians. Delicious, earthy and healthy",
    price: "4,200 NGN",
  },
  {
    image: require("../assets/images/margherita-pizza.jpeg"),
    name: "Margherita pizza",
    description: "Get a mix of all that is good about pizza.",
    price: "5,800 NGN",
  },
  {
    image: require("../assets/images/newyork-pizza.jpeg"),
    name: "Newyork pizza",
    description:
      "The beloved of the United States. Greasy, cheesy, thin crust and large as a barrel",
    price: "10,000 NGN",
  },
];
