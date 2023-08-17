# Hoyeon
Hoyeon is a unified electron resources for building desktop app using ElectronJS. It was named after Jung Ho-yeon, also known as Hoyeon Jung, is a South Korean model and actress. Jung made her acting debut in 2021, starring in the Netflix series Squid Game as Kang Sae-byeok, player 067, which brought her worldwide attention and critical acclaim as the series' breakout star.

<img src="https://firebasestorage.googleapis.com/v0/b/lonica.appspot.com/o/gif%2Fanigif_sub-buzz-13178-1633984413-1.gif?alt=media&token=8d5e245e-ba45-44ed-8be6-b64cc589397a" style="max-width:100%;" width="360">

### STEP #1

```sh
- npm init

"main": "src/js/main.js",

"scripts": {
  "test": "electron ."
},
```

### STEP #2

```sh
npm install --save-dev electron
```

### STEP #3

```sh
npm test
```

### STEP #4

```sh
npm i --save-dev electron-builder

"scripts": {
  "start": "electron .",
  "build": "electron-builder"
},

then add this json data:

"build": {
  "appId": "Hoyeon",
  "win": {
    "target": [
      "nsis"
    ],
      "icon": "../public/electron.ico"
  },
  "nsis": {
     "oneClick": false,
     "installerIcon": "../public/electron.ico",
     "uninstallerIcon": "../public/electron.ico",
     "uninstallDisplayName": "Electral-uninstaller",
     "license": "../license.md",
     "allowToChangeInstallationDirectory": false
  }
}
```

## STEP #5

```sh
npm run build
```
