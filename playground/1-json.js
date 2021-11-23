const fs = require('fs')

var book = {
    title: "The warrior",
    Author: "Mortis"
}

const bookJson = JSON.stringify(book)

try{
    fs.writeFileSync('1-json.json', bookJson)
    console.log('Success')
}catch(error){
    console.log(error)
}
