cd martin-photography
pm2 start medusa develop &
cd ../

cd martin-photography-frontend
pm2 start index.js --watch
cd ../

cd medusa-admin
pm2 start yarn start &
cd ../

