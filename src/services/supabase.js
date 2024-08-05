import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mqpgcgycyiyjflalttfo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xcGdjZ3ljeWl5amZsYWx0dGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5MDE3MjksImV4cCI6MjAzNDQ3NzcyOX0.IjD18RMnplreDfEU1zzNcDr9YMg1CEht_i40lbf7Bog";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
