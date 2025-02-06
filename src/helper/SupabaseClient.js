import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kpugrbhytcbcdwarhhxj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwdWdyYmh5dGNiY2R3YXJoaHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2ODc2MDYsImV4cCI6MjA1NDI2MzYwNn0.BftbnMLOFU4w7rIFaissdIH2lBjiWU7VZPgnjiRSiDM";

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;