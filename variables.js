//javascript'te değişkenler 3 tür olarak tanımlanır
/*
let ve var olarak tanımlanan değişkenlere daha sonra yeni değer atanablirken
const ile tanımlanan değişkenlerin değeri değiştirilemez
*/

let firstName="Murat"       // String
var lastName='Babayiğit';  //String
let age=44; //numbers
const IdNum=245638; //numbers

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(IdNum)
console.log("-----------------------")
console.log("Adı: "+firstName);
console.log('Soyadı: '+lastName);
console.log('Yaşı: '+age);
console.log('TCKN: '+IdNum);

firstName='Tarık Berk';
age=18


console.log("-----------------------")
console.log("Adı: "+firstName);
console.log('Soyadı: '+lastName);
console.log('Yaşı: '+age);
console.log('TCKN: '+IdNum);
