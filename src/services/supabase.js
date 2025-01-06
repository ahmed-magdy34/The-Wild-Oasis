import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dxzpitlehakmaiwqiezk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4enBpdGxlaGFrbWFpd3FpZXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1ODYwMDIsImV4cCI6MjA1MTE2MjAwMn0.ISZyQaa7u3WxKs8yRIHVYKQe1gkFRqj3YvQ6n9-lfGM";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
