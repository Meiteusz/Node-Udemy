//const utils = require('./utils')

//console.log(utils(1,1))

const validator = require('validator')
const notes = require('./notes')

var myNotes = 'Your Notes...'
console.log(notes(myNotes))

console.log(validator.isURL('https:/google.com'))