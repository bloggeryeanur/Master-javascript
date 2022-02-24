name=''
if(name.length==0){
    hahaha='CCCC'
}
console.log(hahaha)

name = ''
fullName = name || 'Yeanur Rhaman'
console.log(fullName)

hi=false
hi && console.log('Everything is ok !')



console.log(JSON.stringify(obj)===JSON.stringify(obj2))

var sorry ={
    a:23,
    b:5,
    c:54
}
for(var i in sorry){
    //console.log(i)
    console.log(i + ' = ' + sorry[i])
}