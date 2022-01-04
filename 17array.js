/*
var arr = ['yeanur', 'raman', 'khan', 'hridoy']
arr[3]=44
arr[11]=12
console.log(arr[8])
console.log(arr.length)

var arr2 = Array('name', 'age', 'passion')
console.log(arr2)
*/
///******Array Traversey */প্রতিটা কে টাস করে যাওয়ার নামই ট্রাভারসি
/*
var arr = [1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

var arr2 = [1,2,3,4,5,6]
for(var i=0;i<arr2.length;i++){
    arr2[i] = arr2[i] + 2
}
console.log(arr2)

var arr = [1,2,3,4,5,6,7,8,9,10]
var result = 0
for(var i=0;i<arr.length;i++){
    result += arr[i]
}
console.log(result)

var arr = [1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        console.log(arr[i])
    }
}
*/
//******Remode and Replace */
/*
var arr = [1,2,3,4,5,6,6,7,8]
arr.push(88)
arr.unshift(33)
arr.pop()
arr.shift()
arr.splice(2, 0, 44,55,66,77)
arr.splice(2,5)
arr.splice(2, 1, 99)
console.log(arr)
*/

//****Search from array */
/*
var arr = [1,2,3,5,5,5,6,4,55,3,25,2,4,55,56,57]
var find = 5
var isFind = false
for(var i=0;i<arr.length;i++){
    if(arr[i]===find){
        console.log('Data find at index ' + i)
        isFind = true
        break;
    }
}
if(!isFind){
    console.log('Not found data ok !')
}
*/

////*****Multidimantional array */
/*
var arr=[
    [11,22,3,4,45,5,],
    [55,4,4,3,232,1,],
    [65,43,2,45,6,0]
]
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        console.log('Element ' + i + ' : ' + j)
    }
}
*/

//*****Reverse array */
// var arr = [1,2,3,4,5,6,7]//tyr 49 videos
// console.log(arr.reverse())

//*****Basic array Method */
/*
var arr = [1,2,3,4,5,6]
console.log(arr.join(' | '))
arr.fill(false)
console.log(arr)
var arr2 = Array.from(arr)
console.log(arr2)

var a = [4,5]
var b = a
b[0]=9
console.log(a)
console.log(b)

var c = [4,5]
var d = Array.from(c)
c[0]=9
console.log(c)
console.log(d)
*/