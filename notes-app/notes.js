const fs = require('fs')

var response = {
    Success: false,
    Message: ''
}

module.exports = class Notes {
    
    //get
     getNotes = ()=>{
        return fs.readFileSync('notes.txt', 'utf8')
    }
    
    //add
     addNotes = (notes) =>{
        try{
    
            fs.appendFileSync('notes.txt', notes)
    
            return response = {
                Success: true,
                Message: 'Note added'
            }
    
        }catch(error){
            return response = {
                Success: false,
                Message: 'error occurred: ' + error
            }
        }
    }
    
    //delete
     removeNotes = () =>{
        try{
            fs.writeFileSync('notes.txt', JSON.stringify(''))
    
            return response = {
                Success: true,
                Message: 'Notes deleted succefully'
            }
    
        }catch(error){
            return response = {
                Success: true,
                Message: 'error occurred: ' + error
            }
        }
    }
}