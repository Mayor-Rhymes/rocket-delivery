import type { ImageSourcePropType } from "react-native";

export interface IFoodItem {
  image: ImageSourcePropType;
  name: string;
  description: string;
  price: string;
}
