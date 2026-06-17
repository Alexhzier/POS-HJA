const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('posHja', {
  appName: 'POS-HJA',
})
