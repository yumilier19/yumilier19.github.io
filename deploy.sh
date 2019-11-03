set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
# cd docs/.vuepress/dist

git add -A
git commit -m 'deploy'
git push origin master
# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:yumilier19/blog-demo.git master:gh-pages

cd -