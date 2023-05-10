const fs = require('fs');

const fileText =
`VITE_SUPABASE_KEY=${process.env.VITE_SUPABASE_KEY}
VITE_SUPABASE_URL=${process.env.VITE_SUPABASE_URL}
VITE_IMAGE_URL=${process.env.VITE_IMAGE_URL}
`

fs.writeFileSync('./.env', fileText);