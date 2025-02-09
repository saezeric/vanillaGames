import { createClient } from "@supabase/supabase-js";
//Creando la conexión con supabase
const supabaseUrl = "https://idoaszblqrnmcvmvnflw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkb2FzemJscXJubWN2bXZuZmx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MDQ2MjAsImV4cCI6MjA1NDM4MDYyMH0.HBUAgBbCc1Dj_kYTysmRCOnJJORxiORO6ZwY_1x5Dtc";

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey);
