### Part 1 - Project Setup
npx gitignore node   
yarn init --y   
yarn add -D typescript eslint jest      
git init     
git remote add origin git@github.com:opencodes/typescript-lib-example.git
git add -A    
git commit -m"initial commit" 
git push --set-upstream origin master    
### Part 2 - Project Implementation
yarn add -D @types/jest
yarn add -D @babel/preset-env @babel/preset-typescript
mkdir tests
yarn
yarn build
yarn test
yarn test
yarn build
yarn dev
git add -A
git commit -m"Test Setup"
git push
### Part 3 - API Extraction
yarn add -D @microsoft/api-extractor @microsoft.api-documenter
yarn api-extractor init
mkdir etc
yarn build
yarn api-extractor run --local
yarn api-documenter markdown -i temp -o docs
