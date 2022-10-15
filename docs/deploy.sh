# deploy.sh - Production deployment

BUILD_PATH=".vuepress/dist"

set -e

npm run build
# echo nibiru.fi > dist/CNAME

cd $BUILD_PATH 
touch .nojekyll
git init 
git add . 
git commit -am "deploy"
git checkout -b gh-pages
git push -u https://github.com/VimDiesel-Cosmos/VimDiesel-Cosmos.github.io gh-pages --force
rm -rf .git 
cd ..

# Template: See https://stackoverflow.com/a/65733058/13305627
# git push <remote> `git subtree split --prefix <local-folder> <local-branch>`:<remote-branch> --force
# git push origin `git subtree split --prefix dist deploy`:gh-pages --force

