thcrap patch verification server
================================

## Development
Make sure that node.js and NPM are installed on your platform, then change to the root directory of this repository and run:
```
$ sudo npm install -g typescript
$ npm install
```

Project files for [Visual Studio Code](https://code.visualstudio.com/) are
provided. Simply open it in folder mode, launch a debugging session, and the
code will be compiled and run.

### Developing with other editors
[nodemon](https://nodemon.io/) is recommended, together with running the
TypeScript compiler in watch mode (`tsc -w`). This will automatically recompile
the code and restart the server everytime the file is saved.

So, you'd have two shells in the root directory of this repository:

* Shell #1: `$ tsc -w`
* Shell #2: `$ nodemon`
