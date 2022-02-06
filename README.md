# introducion

express is for basic server funktionality

vite builds and treeshakes content to pictures(&co), html, css & js that can easily used by the browser

as a base it uses the content of "frontend/viteEdit"

vue is a framework that provides html, css & js in a single file and every file can be used as a module in other sites

at example making the file "footer.vue" and only adding <Footer/> (+ import) somewhere in the code and you have a standatr footer everywhere

## what you need

install node.js from their official website

## how to test the server funktionality
open folder "backend" in a console/terminal

type "npm i"

type "node .\server.js"

## how to test the vue&vite funktionality with server
open folder "frontend/viteEdit" in a console/terminal

type "npm i"

type "node "npm run build"


open folder "backend" in a console/terminal

type "npm i"

type "node .\server.js"

## additional stuff that gets updated

#### in frontend/root, you do nothing, that is the data build from vite

the server uses this for the website

#### in viteEdit you create the sites

read the readme in it or you are going to be lost

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


## how thinks work:

