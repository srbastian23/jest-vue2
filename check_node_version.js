const fs = require('fs')
const semver = require('semver')
const chalk = require('chalk')

fs.readFile('./.nvmrc', 'utf8', (err, data) => {
  if (err) console.error(chalk.red(err))
  const version = data

  if (!semver.gt(process.version, version)) {
    console.log('==============================')
    console.log(
      chalk.red(
        `The current node version ${process.version} does not satisfy the required version ${version}`
      )
    )
    console.log(
      '▶ To check your installed Node versions, use: `nvm ls`\n▶ To install required version, use: `nvm install --lts`\n▶ To use required version, use `nvm use node`'
    )
    console.log('==============================')
    process.exit(1)
  } else {
    console.log('==============================')
    console.log(
      chalk.green(
        `The current node version ${process.version} matches the required version ${version}`
      )
    )
    console.log('==============================')
  }
})
