const chalk = require('chalk')
const yargs = require('yargs')

//const getNotes = require('./notes') 
//const addNotes = require('./notes') 
//const removeNotes = require('./notes') 

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


//if(command === 'add'){
//    const response = addNotes(' test')
//    console.log(response)
//}else if(command === 'read'){
//    console.log(getNotes())
//}else if(command === 'remove'){
//    console.log('processing...remove notes')
//}

yargs.version('1.1.0')

// add, remove, read, list notes

yargs.command({
    command: 'add',
    describe: '- Add a new note',
    handler: function () {
        console.log('adding a note')
    }
})

yargs.command({
    command: 'delete',
    describe: '- delete all notes',
    handler: function () {
        console.log('removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: '- list the notes',
    handler: function () {
        console.log('notes lists')
    }
})

yargs.command({
    command: 'read',
    describe: '- read the notes',
    handler: function () {
        console.log('note read')
    }
})

console.log(yargs.argv)

// tirar os console.logs e colocar para roldar os métodos de verdade