import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qujbzbwcgcecujcwynqj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1amJ6YndjZ2NlY3VqY3d5bnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNDM4NTksImV4cCI6MjAyMDYxOTg1OX0.9Kb8p4wbkClx23GapcJQlbWqJVCDy86DCGgZTCDwIy8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
