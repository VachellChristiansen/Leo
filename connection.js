require('dotenv').config();
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://jwdjglkmytcniuvtthbp.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
console.log(supabaseKey)
const options = {
  db: {
    schema: 'public',
  },
  global: {
    headers: { 'x-my-custom-header': 'my-app-name' },
  },
}
const supabase = createClient(supabaseUrl, supabaseKey, options)
module.exports = supabase;

