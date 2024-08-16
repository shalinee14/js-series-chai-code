// let score = "33"
// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)


let score2 = false // undefiend // NaN // true
console.log(typeof score2)
console.log(typeof (score2))

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

// conversion output
// "33" => 33
// "33abc" => NAN 
// true => 1 / false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// 0 ==> false 
// "shalinee" => true
// "" => true

let gameCounter = 100 
//gameCounter++ // yeh pahle value lega then increment karega // 101
++gameCounter // yeh pahle increment karega then value lega // 101
console.log(gameCounter)

let x = 3;
const y = x++;

let a = 3;
const b = ++a;
console.log(a, b)