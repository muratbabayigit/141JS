//Boş bir array oluşturalım

let array=[];

//Stringlerden oluşan bir array oluşturalım

let colors=["red", "green", "gray","white","black"];

//Numbers lardan oluşan bir array

var numbers=[1,23,15,65,32,89];


console.log(colors[4])
console.log(numbers[3])

//push(): dzinin sonuna yeni bir öğe ekler
colors.push("yellow")
console.log(colors)

//pop(): dizinin son elemanını siliyor ve donduruyor
let lastcolor=colors.pop()
console.log(colors)
console.log(lastcolor)

//shift(): dizinin başındaki elemanı sile ve döndürür
let firstcolor=colors.shift()
console.log(colors)
console.log(firstcolor)

//splice() : diziyi herhangi bir elemandan itibaren ekler veya kaldırır

numbers.splice(2,3,9716) //2.indexten başla 3 öğeyi kaldır yerine 9716 ekle
console.log(numbers)

//concat(): iki veya daha fazla array'i birlieştiriyor
let newArray=colors.concat(numbers)

console.log(newArray)
