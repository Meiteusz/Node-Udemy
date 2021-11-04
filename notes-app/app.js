const chalk = require('chalk')
const getNotes = require('./notes')
const addNotes = require('./notes')

const command = process.argv[2];

//Define my own themes
const error = chalk.bold.inverse.red
const warning = chalk.keyword('orange').inverse;

const errorMessage = chalk.bold.red
const warningMessage = chalk.keyword('orange')
//--------------------

//Printing with color
//console.log(error('TEST ERROR'))
//console.log(warning('TEST WARNING'))
//console.log(errorMessage('TEST ERROR Message'))
//console.log(warningMessage('TEST WARNING Message'))


if(command === 'add'){
    const response = addNotes(' test')
    console.log(response)
}else if(command === 'read'){
    console.log(getNotes())
}else if(command === 'remove'){
    console.log('processing...remove notes')
}