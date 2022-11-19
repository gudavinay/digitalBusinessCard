'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           Vinay Guda'),
  handle: chalk.white('gudavinay'),
  work: chalk.white('Software Developer @Amazon'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~gvinay95'),
  github: chalk.gray('https://github.com/') + chalk.green('gudavinay'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('vinayguda'),
  web: chalk.cyan('https://gudavinay.github.io'),
  npx: chalk.red('npx') + ' ' + chalk.white('vinayguda'),
  labelWork: chalk.white.bold('     Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelnpm: chalk.white.bold('      npm:'),
  labelGitHub: chalk.white.bold('   GitHub:'),
  labelLinkedIn: chalk.white.bold(' LinkedIn:'),
  labelWeb: chalk.white.bold('Portfolio:'),
  labelCard: chalk.white.bold('     Card:')
}

// Actual strings we're going to output
const newline = '\n'
const underline = '____________________________________________'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline +// data.name + data.handle
               underline +
               newline + newline + // Add one whole blank line
               working + newline + newline +// data.labelWork + data.work
               webing + newline + // data.labelWeb + data.web
               linkedining + newline + newline +// data.labelLinkedIn + data.linkedin
               githubing + newline + newline+// data.labelGitHub + data.github
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
