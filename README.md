# introducion

express is for basic server funktionality

vite builds and treeshakes content to pictures(&co), html, css & js that can easily used by the browser

here it uses the content of "frontend/viteEdit"

vue is a framework that provides html, css & js in a single file and every file can be used as a module in other sites

at example making the file "footer.vue" and only adding /<Footer//> (+ import) somewhere in the code and you have a standard footer everywhere you need even multiple

# content (links are get added)
[what you need](#what-you-need)

what you need

[how to test the vue&vite funktionality with server](#how-to-test-the-vuevite-funktionality-with-server)

how to add a site

how to edit one vue in runtime

how to build the site

how thinks work (complicated because i can´t explain)

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

## how to build the site
in "src/frontend/viteBuild" in console type 'npm run build'
start editing the files in "src/frontend/viteBuild/src/"


## how thinks work (complicated because i can´t explain)
Step 1. The "vite.config.js" looks for the given sites, where it looks for HTML files

// what is needed for multiple sites

Step 2. The normal startpage (index.html) is directly in "viteEdit" so it is the main site at the end.

// what is needed because we want no hirarchie over our main index file

Step 3. It links to its own "src/index/main.js" that is dedicated for this only the main page

// what is needed to bake a bride to Vue

Step 4. The js file links to the "Vue.js" in its own folder to get the final content

// where the bridge to Vue gets build

Step 5. Not really anything to say, there you can get components from the componentsfolder and such

// what is the idea of this thing

To Step 2. a page like "copyMe" has is "index.html" in a folder named "copyMe" so it can have its own index.html file
 
it would be a problem if 2 index.html want to be in one folder (viteEdit)

Another problem too would be if they have no seperate js and vue, why the other things on the list are so name sensitive
