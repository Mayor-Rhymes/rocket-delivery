import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const getSupabaseUrl = () => {

      if(!process.env.SUPABASE_URL) {
        throw new Error("Supabase url does not exist as an environment variable");
      } else {
        return process.env.SUPABASE_URL;
      }
}


const getSupabasePublicKey = () => {

      if(!process.env.SUPABASE_PUBLIC_KEY) {
        throw new Error("Supabase public key does not exist as an environment variable");
      } else {
        return process.env.SUPABASE_PUBLIC_KEY;
      }
}


export const supabase = createClient(
    getSupabaseUrl(),
    getSupabasePublicKey(),
)