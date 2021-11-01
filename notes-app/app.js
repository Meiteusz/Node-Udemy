const chalk = require('chalk')
const notes = require('./notes')

//Define my own themes
const error = chalk.bold.inverse.red
const warning = chalk.keyword('orange').inverse;

const errorMessage = chalk.bold.red
const warningMessage = chalk.keyword('orange')
//--------------------

var myNotes = 'Your Notes...'
console.log(notes(myNotes))

//Printing with color
console.log(error('TEST ERROR'))
console.log(warning('TEST WARNING'))
console.log(errorMessage('TEST ERROR Message'))
console.log(warningMessage('TEST WARNING Message'))