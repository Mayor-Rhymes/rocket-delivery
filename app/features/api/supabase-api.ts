import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../../libs/supabase/supabase";

export const supabaseApi = createApi({
  reducerPath: "supabaseApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAllFoodItems: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from("food-item").select("*");
        if (error) {
          return { error };
        } else {
          
          return { data };
        }
      },
    }),
  }),
});

export const { useGetAllFoodItemsQuery } = supabaseApi;
