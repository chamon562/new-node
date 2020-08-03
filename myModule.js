// arrow function to a string ' tahts so fetch!
module.exports.beBasic = () => 'Thats so fetch'

//module.exports is a javascript object that contains all code we want to export 
//for import in other files (like our entry point index.js)
//gotta exports to make it work
module.exports.count = () =>{
    //coutn from 0 to 10
    for(let i = 0; i <=10; i++){
        console.log(i);
    }
}


// const myObj = {
//     taylor: 'name'
// }
// myObj.age =27