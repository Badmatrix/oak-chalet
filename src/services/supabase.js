import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dpnldrnrjmmchtfzmznk.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwbmxkcm5yam1tY2h0Znptem5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3MDkyMjMsImV4cCI6MjA1MzI4NTIyM30.x_3CpKxvKM-9BfZZR5mhDgcLK__HWgXnuat7hg5_KdE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
