//node keyword requre allows us to import modules
//inside require give it the path to mymodue
const myModule = require('./myModule')
const fs = require('fs')


const http = require('http')
http.createServer((req, res) =>{
    //for response write to client the tring hellow world
    res.write('Hello, World!')
    res.end()
}).listen(8000) //tell which port listen to 8000 old image or telephone operator

//3 arguments name , reading english character, last one is data err
fs.readFile('story.txt', 'utf8', (err, data) =>{
    if(err){
        console.log("there was problem reading file")
    } else{
        console.log(data)
    }
})
// console.log(myModule.beBasic())

// //run myModule.count() in js make sure to export in myModule.
// myModule.count()

// console.log('Hello to the New World!')

let i = 1

const count = () =>{
    console.log(i)
    i = i*2
}

// const myTimer = setInterval(count, 1000)
//using nodemon to count 

// console.log('Hello World')
// let i = 1

const moment = require("moment");


// const count = () =>{
//     console.log (i)
//     i = i*2
// }
// const myTimer = setInterval(count, 1000)
// const today = new Date()
// console.log(today)
//moment() is a function and to call it put the () 
// const moment = require('moment')
// console.log(moment().format('MMM Do YYYY'))
//how to print your birthday say the day. 

// let a = moment().subtract(1, 'day');
// let b = moment().add(1, 'day')
// moment.max(a, b);

// let fetchFriends = [
//     {name: 'Dan', birthday: '11.12.1977'}, 
//     {name: 'Mary', birthday: '11.12.1986'}, 
//     {name: 'Stephan', birthday: '11.01.1993'}
// ]

// let friends = fetchFriends;
// let friendsBirthDays = friends.map(function(friends){
//     return moment(friends.birthday, 'DD. MM. YYYY');
// })

// moment.max(friendsBirthDays);

console.log(moment('03-17-1985', 'MM DD YYYY').format('dddd [the] Do [of] MMMM [in the year] YYYY'))
