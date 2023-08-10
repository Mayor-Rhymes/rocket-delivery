import { createSlice } from "@reduxjs/toolkit";
import { IFoodItem } from "../../../libs/datatypes/itemsTypes";

export interface ICartItem extends IFoodItem {
  itemNumber: number;
  total: number;
}

interface initStateStructure {
  items: IFoodItem[];
  totalPrice: number;
}

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const previousItems = state.items;

      const itemAdded = previousItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemAdded) {
        const purgedItems = previousItems.filter(
          (item) => item.id !== itemAdded.id
        );
        const updateItemAdded = {
          ...itemAdded,
          itemNumber: itemAdded.itemNumber + 1,
          total: (itemAdded.itemNumber + 1) * itemAdded.price,
        };

        state.items = [...purgedItems, updateItemAdded];
        const price: number[] = state.items.map((item) => item.total);
        state.totalPrice = price.reduce((a, b) => a + b, 0);
      } else {
        const newItem = action.payload;
        state.items = [
          ...state.items,
          { ...newItem, itemNumber: 1, total: newItem.price },
        ];
        const price: number[] = state.items.map((item) => item.total);
        state.totalPrice = price.reduce((a, b) => a + b, 0);
      }
    },

    removeItem: (state, action) => {
      const previousItems = state.items;

      const itemRemoved = previousItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemRemoved) {
        if (itemRemoved.itemNumber == 1) {
          const purgedItems = previousItems.filter(
            (item) => item.id !== itemRemoved.id
          );
          state.items = purgedItems;
          const price: number[] = state.items.map((item) => item.total);
          state.totalPrice = price.reduce((a, b) => a + b, 0);
        } else {
          const purgedItems = previousItems.filter(
            (item) => item.id !== itemRemoved.id
          );

          const updateItemRemoved = {
            ...itemRemoved,
            itemNumber: itemRemoved.itemNumber - 1,
            total: (itemRemoved.itemNumber - 1) * itemRemoved.price,
          };

          state.items = [...purgedItems, updateItemRemoved];
          const price: number[] = state.items.map((item) => item.total);
          state.totalPrice = price.reduce((a, b) => a + b, 0);
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
