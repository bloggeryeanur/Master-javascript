//Pure function //একটা argument দিলে সেইম outpur return করবে, কোনো রকম কোনো side efect থাকবে নয়া
// n=11
// function change() {
//     n=222
// }//not pure function
// change()
// console.log(n)

/*
first Calss function
1.A Function can be stored in a varible
2.A Function can be stored in an Array
3.A Function can be stored in an Objecet
4.We cna Creat Function as Need
5.We can pass Function as an Arguments
6.We can return FUnction from Anothe Funciton
*/

// //A Function can be stored in a varible
// function hi(a,b) {
//     return a+b
// }
// var sum = hi
// console.log(sum(2,2))

// //A Function can be stored in an Array
// function arrFunction(a,b) {
//     return a+b
// }
// var arr=[]
// arr.push=arrFunction
// console.log(arrFunction(2,2))

// //A Function can be stored in an Objecet
// function objFunction(a,b) {
//     return a+b
// }
// var obj={
//     add : objFunction
// }
// console.log(obj.add(2,2))

// //We cna Creat Function as Need
// setTimeout(function(){
//     console.log('Hellow how are you')
// },3000)

//Higher order Function , We can pass Function as an Arguments
// function add(a,b) {
//     return a+b
// }
// function Mp(a,b,func) {
//     var c = a+b
//     var d = a-b

// function Multiply() {
//     var m=func(a,b)
//     return c*d*m
// }
//  return Multiply()
// }

// var Multiply = Mp(3,4, add)
// console.log(Multiply)

//Closur
// var a=11
// function hi() {
//     console.log(a)
// }
// console.log(hi)


//CallBack//
// function sample(a,b) {
//     var c = a+b
//     var d = a-b
//     var result = sum(c,d)
//     return result
// }

// function sum(a,b) {
//     return a+b
// }
// console.log(sample(5,8))

