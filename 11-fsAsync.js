


const { error } = require('console');
const {readFileSync, writeRile, readFile, writeFile} = require('fs');

console.log("Start")
readFile('./content/fsModuleTxt/first.txt', 'utf8', (error, result)=> {
    if(error){
      console.log(error)
      return
    }
   
    const first = result;
    readFile('./content/subFolder/test.txt', 'utf8', (err, result)=> {
        if(err){
            console.log(err)
            return
        }

        const second = result;
        writeFile('./content/result-async.text',
        `Here is the async result: ${first, second}`,
     (err, result)=> {
        if(err){
            console.log(err)
            return
        }
        console.log(result)
     })
    })
})

console.log("Starting next task!")