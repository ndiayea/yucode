const note  = require('./util.js')
const validator = require("validator")
const chalk = require("chalk")
const yargs = require('yargs')
note();

console.log(validator.isEmail('aboh@yahoo.fr'))
var nom ="Abdalah Ndiaye"
console.log(chalk.bold.inverse.blue(nom))


yargs.version("1.2.3")
yargs.command({
  command: 'add',
  describe : 'add a note',
  handler: function(){
    console.log("adding a new note!")
  }
})

yargs.command({
  command: 'remove',
  describe : "remove a new note",
  handler: function(){
    console.log("removing a new note!")
  }
})

yargs.command({
command: 'list',
describe: 'addint a list',
handler: ()=>{
  console.log("printing the list")
}

})

console.log(yargs.argv)
