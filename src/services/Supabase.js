import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://plxckrjbxsgtmgzcyeyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBseGNrcmpieHNndG1nemN5ZXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MTM5MjEsImV4cCI6MjAxMTI4OTkyMX0.mUbeWBRgjOKj0VnCs6yUvWbZEBeJe33o0ow5aYwE_bU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
