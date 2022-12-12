
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://llhwjrzjhwqfhkkrudvj.supabase.co'

const supabaseKey = "o8tS0Yie1tCRVZex"

export const supabase = createClient(supabaseUrl, supabaseKey);


