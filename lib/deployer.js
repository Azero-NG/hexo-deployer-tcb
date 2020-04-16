'use strict'

const chalk = require('chalk')
const TCB = require('@cloudbase/cli')

module.exports = function (args) {
  // Hexo's Logger
  const log = this.log

  if (!args.secretId) {
    args.secretId = process.env.COS_SECRET_ID
  }
  if (!args.secretKey) {
    args.secretKey = process.env.COS_SECRET_KEY
  }
  if (!args.envId) {
    args.envId = process.env.TCB_ENV_Id
  }

  // Check the user's configuration
  if (!checkHexoConfig(args)) {
    log.error('hexo-deployer-tcb: config error')
    return
  }

  // login TCB
  /* eslint-disable no-new */
  new TCB({
    SecretId: args.secretId,
    SecretKey: args.secretKey
  })

  log.info('Uploading files to COS...')
  log.info(this.public_dir)
  log.info(args.envId)
  deployHostingFile(this.public_dir, args.envId).then((value) => {
    if (value) {
      log.info(value)
    }
  }, (value) => {
    log.info(value)
  })
}

/**
 * Check if the configuration is correct in _config.yml file
 * @param {string} args
 * @return {boolean}
 */
function checkHexoConfig (args) {
  if (!args.secretId ||
    !args.secretKey ||
    !args.envId) {
    const tips = [
      chalk.red('Ohh~We have a little trouble!'),
      'Please check if you have made the following settings',
      'deploy:',
      '  type: cos',
      '  secretId: yourSecretId',
      '  secretKey: yourSecretKey',
      '  envId: yourEnvId',
      '',
      'Need more help? You can check the Tencent cloud document: ' + chalk.underline('https://www.qcloud.com/document/product/436')
    ]
    console.log(tips.join('\n'))
    return false
  } else {
    return true
  }
}

/**
 * Upload file to TCB
 * @param {object} cos
 * @param {object} config
 * @param {object} file
 */
async function deployHostingFile (srcPath, envId) {
  const hosting = require('@cloudbase/cli/lib/commands/hosting/hosting')

  return hosting.deploy(
    {
      envId
    },
    srcPath,
    '/'
  )
}
