const fs=require('fs');
console.log('this is innnovators home')
fs.writeFileSync("one.txt","this is first page")

//console is global module
//fs is non-global module

console.log(__dirname); //checking the directory
console.log(__filename); //checking the filename


//also we can write like
//const gs=require('fs').writeFileSync;
//gs("alternative.txt","this is an precise way to import the module")