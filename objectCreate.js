let ogrenci = {
    ad:'Ahmet',
    soyad:'Bulut',
    number:9716,
    okul:"ABC University"
}
//Bir nesne oluşturuken JSON data özelliğinden faydalanılır. Oluşuturulan nesenenin içine 
//{} arasında kalmak şartı ile birden fazla özellik eklenebilir.



ogrenci.ad="Murat"
console.log(ogrenci.ad)
console.log(ogrenci.soyad)
console.log(ogrenci["number"])
console.log(ogrenci["okul"])