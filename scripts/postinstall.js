const log = require('logplease').create('PEER-INSTALL')
const { execPassthru, getElevateExec, osType } = require('./util')

;(async () => {
  log.info('Installing on', osType)
  try {
    // Try `npm cache clean --force` if packages isn't installed
    await execPassthru('npm install wrtc@0.4.7 ipfs@0.60.2 level-js@6.1.0 --no-save', await getElevateExec())
  } catch (err) {
    log.error(err)
  }
})()

