/*var fs=require("fs")
var filepath="./sample.txt";
console.log("start Reading file!!!!!!")
var data=fs.readFileSync(filepath)
console.log(data.toString())
console.log("Done Reading file!!!!")*/

/*var fs=require("fs")
var filepath="./sample.txt";
console.log("start Reading file!!!!!!")
fs.readFile(filepath,function(err, data){
if(err){
	
console.log(err)
}
console.log(data.toString())

})

console.log("Done Reading file!!!!")*/


/*var fs=require("fs")
console.log("start writing file!!!")
fs.writeFile('./output.txt',"Hello Tech Minds",function(err,data){
if(err){
 throw err;
 console.log(err)
}
console.log(data)
})
console.log("Done Writing file!!!!")*/

/*var fs=require("fs")
var filepath="./sample.txt";
console.log("start  file!!!!!!")
fs.readFile(filepath,function(err, data){
if(err){
	
console.log(err)
}
fs.writeFile('./output.txt',data,function(err,data){ //if output.txt file does not exist it creates automatically
if(err){
 throw err;
 console.log(err)

}
})
})*/

var fs=require("fs")   //concept of synchronous
var filepath="./sample.txt";
var data=fs.readFileSync(filepath)
fs.writeFileSync('uma.txt',data)