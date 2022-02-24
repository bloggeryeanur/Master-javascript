 //Object Literal
/*
 var obj = {
     a:10,
     b:22,
     c:44
 }
//obj.d=66
obj.k=88 
console.log(obj)
*/
//Object Constructor
/*
var obj = Object()
obj.a=11;
obj.b=22;
obj.c=44
console.log(obj)

var obj2 = new Object()
obj2.k=43;
obj2.f=45;
obj2.l=99
console.log(obj2)
*/

/*
Object access . dot notation
var hiObject = {
    a:11,
    b:22,
    c:44,
    d:55
}
console.log(hiObject.a)
console.log(hiObject.d + hiObject.c)

Object access array notaion
var hiObject = {
    a:11,
    b:22,
    c:44,
    d:55
}
console.log(hiObject['d'])

//সব সময় ডট নটেসন ব্যবহার করবো
//যখন জানা থাকবে না তখন এ্যারে নটেসন ব্যবহার করবও
var show = 'b'
console.log(hiObject[show])
*/

//Setting object
/*
var hi ={
    a:11,
    b:22,
    c:33,
    d:44
}
hi.a=99
hi.k=76
console.log(hi.k)
console.log(hi.a)
console.log(hi)
console.log(hi.j)//Undefiend but ligel in js

Array 
hi['f']=987
var prop = 'z'
hi[prop]=100
console.log(hi)
*/

//Remove array
/*
var removeMethod = {
    a:33,
    b:44,
    c:55,
    d:88
}
delete removeMethod.b
console.log(removeMethod)
*/
var remove={
    a:33,
    b:454,
    c:6
}

//Conparing to object 
/*
var obj1 ={
    a:10,
    b:20,
    c:30
}
var obj2 ={
    a:10,
    b:20,
    c:30
}
if(obj1.a === obj2.a && obj1.b === obj2.b && obj1.c === obj2.c){
    console.log(true)
}else{
    console.log(false)
}

console.log(JSON.stringify(obj1)===JSON.stringify(obj2))
*/
//Iterate Object property
/*
var sorry ={
    a:23,
    b:5,
    c:54
}
for(var i in sorry){
    //console.log(i)
    console.log(i + ' = ' + sorry[i])
}
*/

//Object Method
/*
var hi={
    a:33,
    b:55,
    c:99
}
// console.log(Object.keys(hi))
// console.log(Object.values(hi))
// console.log(Object.entries(hi))

var hi2 = Object.assign({}, hi)
hi2.b=11
console.log(hi)
console.log(hi2)
*/
