
// let ফানসাং= (ক,খ)=>{
//     return ক + ' ' +খ
// }
// let মান = ফানসাং('ধান', 'পাট')
// console.log(মান)

//Template String
// let name ='Yeanur Rhaman'
// let age =17
// console.log(`My name is ${name} and I am ${age} and I am ${age <18 ? 'Not': ''}adult`)//Only 1 line condation availble

// console.log(name.padStart(28,' f'))
// console.log(name.padEnd(20,' k'))
// console.log('h'.repeat(10))

//2.Let,Const
// for(var i=0;i<10;i++){

// }
// console.log(i)//I was don't know

// {
//     let hi =22
// }
// console.log(hi)


//3.Arrow Function
// let add = (a,b)=>a+b
// console.log(add(1,2))

// let sqr=x=>x*x
// console.log(sqr(3))

//4.Arrow Function and This
// let obj={
//     name: 'Yeanur Rahman',
//     print : function () {
//         console.log(this)
//     }
// }
// obj.print()

// let obj={
//     name: 'Yeanur Rahman',
//     print :() => {
//         console.log(this)
//     }
// }
// obj.print()
//একটা arrow function এর ভিতরে this তার parentএর this টাকে refer 


//  let obj={
//      Name : 'Yeanur Rahman',
//      print : function (){
//          setTimeout(() => {
//              console.log(this)
//              console.log(`Hello, ${this.Name}`)
//      },2000)
//     }
// }
// obj.print()

//5.Default Parametter
// function sqr(n=1){
//     return n*n
// }
// console.log(sqr())

// function hi(name,msg='Sorry') {
//     console.log(`${name}! ${msg}`)
// }
// hi('Yeanur')



//6.Coustom Iterable 45


//7.Rest and Spread Oprator
// function hi(...rest) {
//     console.log(rest)
// }
// console.log(hi(1,2,3,4,5,6,7,8,4,4,5,4,3,10))

// function hi(...sorry) {
//     return sorry.reduce((a,b)=>a+b)
// }
// console.log(hi(1,2,3,4,5,6,7,8,9,10))

// let a= [1,2,3]
// console.log(...a)

// let obj={
//     a:10,
//     b:20,
//     c:30
// }
// let obj2 ={
//     ...obj
// }
// console.log(obj2)
// console.log(obj)


//8.Enhance Object
// let a=10,b=22
// let obj={
//     a, //a: a key and value same name you can skip ones
//     b  //b: b
// }
// console.log(obj)

// let obj2={
//     a:11,
//     b:22,
//     print(){//you can skip function keyword
//         console.log('Hellow ')
//     }
// }
// obj2.print()


//9.Destructuring
//Object
// let person={
//     name : 'Yeanur Rahman',
//     email : 'Yeanur@gmail.com',
//     address : {
//         city : 'Dhaka',
//         country : 'Bangladesh'
//     }
// }
// let {name, email, address: {city, country} }=person
// console.log(name,email,city,country)

//Array not complible

//10.Object from Entries
// let thisObj={
//     a:11,
//     b:22
// }
// console.log(Object.entries(thisObj))//convert Object to Array

// let objArray=[
//     ['a',44],
//     ['k',67]
// ]
// console.log(Object.fromEntries(objArray))

//11.Symbol ক
// let a1 = Symbol()
// let b1 = Symbol('Demo Descrtption')
// console.log(a1 === b1)


//12.Iterator Basic
 //13.
// let arr = [1,2,3,4,54,5]
// console.log(arr[Symbol.iterator])

//Array Iterator
// let arr2 = [1,2,3,4]
// let result = arr2[Symbol.iterator]()

// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())

//String Iterator
// let str ='php'
// let phpResult = str[Symbol.iterator]()

// console.log(phpResult.next())
// console.log(phpResult.next())
// console.log(phpResult.next())
// console.log(phpResult.next())
// console.log(phpResult.next())

//14For of Loop
// let arr=[1,2,3,4,5]
// for(let v of arr){
//     console.log(v)
// }

// for(let k of 'Yeanur'){
//     console.log(k)
// }


//15Generators
// let obj={
//     start : 1,
//     end : 5,
//     [Symbol.iterator]: function* (){//* দিলেই Generator হয় জাবে
//         let currentValue = this.start
//         while (currentValue <= this.end){
//             yield currentValue++
//         }
//     }
// }

// let result = obj[Symbol.iterator]()
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())



//simple generator
// function* generater() {
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }
// let result = generater()
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())

// let arr =[1,2,3,4]
// function* gn(collection) {
//     for(let i=0;i<collection.length;i++){
//         yield collection[i]
//     }
// }
// let result = gn(arr)
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())

//যেই function আমাদের জন্য Iterator return করবে তাকে আমার Generator বলবো


//16.Set Data Stractur ,set এর ভিতরে কোনো data dublicate করতে পারবোনা
//let set = new Set([1,2])
//console.log(set)

// set.add(3)
// set.add(5)
// set.add(2)
// set.add(1)
// set.add(2)

// console.log(set)
// console.log(set.size)

//set.clear()
//set.delete(3)
//console.log(set.has(2))
//console.log(set)

// let keyIterator = set.values()
// console.log(keyIterator.next())
// console.log(keyIterator.next())
// console.log(keyIterator.next())
// console.log(keyIterator.next())
// console.log(keyIterator.next())

// for(let v of set){
//     console.log(v)
// }

//console.log(set.entries())

//17.Map
// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])
// map.set('d',40)
// console.log(map)
// console.log(map.size)

// map.delete(b)
// map.clear()

// console.log(map.get('c'))
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// for(let [v,k] of map){
//     console.log(k,v)
// }

// map.forEach((v,k)=>{
//     console.log(k,v)
// })
// map.set({name: 'Yeanur'}, 33)
// map.forEach((v,k)=>{
//     console.log(k,v)
// })


//18.Weak set, only object store
//let a={a: 11}, b={b: 22}
// let set = new Set([a,b])

// a=null //যা কিছু আছে সব Clean করার কথা 
// console.log(set) 

// let arr =[...set]
// console.log(arr[0])
/*
let a={a:11},b={b:22}
let weakset = new WeakSet([a,b]) //শুধু মাত্র Object তাখতে পারবো 
//console.log(weakset)
a=null
//console.log(weakset)
//console.log(weakset.has(b))
*/

//19.Weak Map
/*
let a={a: 10},b={b: 20}
let WeMap = new WeakMap([[a,33],[b,55]])
//console.log(WeMap.get(a))

a=null
console.log(WeMap.has(a))
console.log(WeMap.has(b))
console.log(WeMap.get(a))
//weake Set , weake set memory লিক বন্ধ করে 
*/

//  //20.Class
//  class Reactangle{
//      constructor(width,height){
//          this.width=width
//          this.height=height
//      }
     
//      hellowDraw(){
//          console.log('This is a es6 class method')
//      }
//  }

// let rect1 = new Reactangle(22,35)
// console.log(rect1)
// //console.log(typeof Reactangle)

//Class Method

// class Reactangle{
//     constructor(width,height){
//         this.width=width
//         this.height=height
//         this.another = function () {
//             console.log(`I don't know what is this`)
//         }
//     }
//     name = 'Yeanur Rhaman'
//     hellowDraw(){
//         console.log('This is a es6 class method')
//     }
//      test (){}
// }

// let rect1 = new Reactangle(22,35)
// console.log(rect1)
// //console.log(typeof Reactangle)

//Static Method
//  class Person{
//      constructor(name,email){
//          this.name=name
//          this.email=email
//      }
//      print(){
//          console.log(this.name, this.email)
//      }
//      static create(str){
//          let person = JSON.parse(str)
//          return new Person(person.name,person.email)
//      }
//  }
// let str = '{"name": "Yeanur Rahman", "email": "Yeanur@gmail.com"}'

// let p1 = Person.create(str)
// console.log(p1)
// console.log(p1 instanceof Person)
// p1.print()

//21.This 
//'use strict' top positon
// function shape(){
//     this.draw = function(){
//         console.log(this)
//     }
// }
// let s1 = new shape()
// //s1.draw()
// let anotherDraw=s1.draw
// anotherDraw()
// don't understan


//22.Private Data
// const _radius = Symbol()
// class Circle{
//     constructor(radius){
//         this[_radius]=radius
//     }
//     draw(){
//         console.log('Hellow wrading....')
//     }
// }
// let c1 = new Circle(22)
// console.log(c1)


//23.Inheritance
// class shape{
//         draw (){
//             console.log('Hellow drawing...')
//         }
//     }

// class Reactangle extends shape{
//     constructor(width,height){
//         super()
//        this.width =width
//        this.height=height
//     }
//     calculate (){
//         return this.width * this.height
//     }
// }
// let r = new Reactangle(3,4)
// console.log(r)


// class shape{
//     constructor(color){
//         this.color=color
//     }
//     draw (){
//         console.log('Hellow drawing...')
//     }
// }

// class Reactangle extends shape{
// constructor(color,width,height){
//     super(color)
//    this.width =width
//    this.height=height
// }
// calculate (){
//     return this.width * this.height
// }
// }
import Reactangle from './Reactangle'

let r = new Reactangle('yellow',3,4)
console.log(r)


