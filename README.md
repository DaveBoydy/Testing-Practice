# Testing-Practice

Unit test practice with jest test suite.

Jest is configured together with the Javascript superset Typescript.

The following setup instructions provide a minimalistic jest/typescript configuration.

## 1. Create an initialized working directory.

npm init -y

## 2. Install Typescript

npm i -D typescript

## 3. Configure Typescript

npm i -D @tsconfig/node22

## 4. Install Jest and related dependencies

npm i -D jest ts-jest @types/jest

## 5. Configure Jest for Typescript

npx ts-jest config:init

## 6. Edit package.json test script

"scripts": {
"dev": "tsc --watch",
"test": "jest --watch"
}

# Please Note:

npm i -D @tsconfig/node22

## node22 is a base config, replace with:

npm i -D @tsconfig/nodeXY

XY representing the version of node you intend on using for the project I.E. 18, 20, 22 etc.
