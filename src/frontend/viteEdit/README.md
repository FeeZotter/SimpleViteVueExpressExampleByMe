# please help me improve the README.me
and i dont know how to make it more easy
 
## how to add a site
in "src/frontend/viteEdit"
copy paste folder "copyMe"
change the foldername to yourSiteName
change in index.html the module source to yourSiteName

in "src/frontend/viteEdit/src"
copy paste folder "copyMe"
change the foldername to yourSiteName

in "vite.config.js"
add "placeholder:resolve(__dirname,"yourSiteName/index.html"),"  to "rollupOptions: input:"

in "src/backend/server.js"
add "app.use(express.static("../frontend/root/yourSiteName"));"


## how to edit one vue in runtime
go to the folder with the index.html you want to change
in console type 'npm run dev'

you cant edit multiple with this


## how to build
in "src/frontend/viteBuild" in console type 'npm run build'
start editing the files in "src/frontend/viteBuild/src/"

thanks for reading 
> hopefully
