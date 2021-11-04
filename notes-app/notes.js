const fs = require('fs')

var response = {
    Success: false,
    Message: ''
}

const getNotes = ()=>{
    return fs.readFileSync('notes-app/notes.txt', 'utf8')
}

const addNotes = (notes) =>{
    try{

        fs.appendFileSync('notes-app/notes.txt', notes)

        return response = {
            Success: true,
            Message: 'Note added'
        }

    }catch{
        return response = {
            Success: false,
            Message: 'error occurred'
        }
    }
}

const removeNotes = () =>{

}

const updateNotes = () =>{
    
}

module.exports = getNotes
module.exports = addNotes