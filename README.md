# .

To install dependencies:
```bash
bun install
```
or
```bash
npm install
```

if don't using bun

npm;
```json
"scripts": {
    "build": "npm run build:main && npm run build:api && npm run build:renderer",
    "start:api": "node public/api/index.js",
    "start:app": "electron -r babel-register ./public/main/index.js",
    "build:main": "tsc --project ./src/main/tsconfig.json",
    "build:api": "webpack --config webpack.config.api.js",
    "build:renderer": "webpack --config webpack.config.client.js",
    "package": "bun run build && electron-builder"
}
```

