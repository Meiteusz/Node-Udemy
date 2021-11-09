const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')

const notesClass = require('./notes')

yargs.version('1.1.0')

// add, remove, read, list notes

var notes = new notesClass()

yargs.command({
    command: 'add',
    describe: '- Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body of note',
            demandOption: true,
            type: 'string'  
        }
    },
    handler: (argv) => {
        console.log(notes.addNotes(new Date().toString("dd/MM/yyyy") + "\n" + "Title: " + 
        argv.title + " - Body: " + argv.body))
    }
})

yargs.command({
    command: 'delete',
    describe: '- delete all notes',
    handler: function () {
        console.log(notes.removeNotes())
    }
})

yargs.command({
    command: 'list',
    describe: '- list the notes',
    handler: function () {
        console.log(notes.getNotes())
    }
})

yargs.command({
    command: 'read',
    describe: '- read the notes',
    handler: function () {
        console.log('note read')
    }
})

yargs.parse()