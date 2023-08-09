import type { ImageSourcePropType } from "react-native";

export interface IFoodItem {
  id: string;
  image: ImageSourcePropType;
  name: string;
  description: string;
  price: number;
}
