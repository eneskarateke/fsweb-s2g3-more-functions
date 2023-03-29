// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/
function dosyaAdiniBul(dosyaYolu) {
  const bolme = dosyaYolu.split("/")
  return !dosyaYolu ? "" : bolme[bolme.length-1];
}
console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
/*Alternatif    Çözüm
function dosyaAdiniBul(dosyaYolu) {
  if(!dosyaYolu) {
    return "";
  }
  const bolme = dosyaYolu.split("/");

  return bolme[bolme.length-1];
}
console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"))
*/


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/
function ortalamaBul(sayiArr) {
  return sayiArr.length ? sayiArr.reduce((deger, index) => deger + index) / sayiArr.length : null;
}

console.log(ortalamaBul([]));

/* Çözüm Alternatif
function ortalamaBul(sayiArr) {
  if (sayiArr.length === 0) {
    return null;
  }
  
  let total = 0;
  
  for (let i=0; i<sayiArr.length; i++) {
    total += sayiArr[i];
  }

  return total / sayiArr.length;
}

console.log(ortalamaBul([]));
*/

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(arr, func) {
  return arr.length ? arr.filter(i => i >= func(arr)) : null;
}
/* Alternatif Çözüm
function ortalamadanBuyukleriBul(arr, func) {
  
    if (arr.length === 0) {
      return null;
    }
  
  
  let dizi = [];

  if (func(arr)) {
    for (let i=0; i<arr.length; i++){
      if (arr[i] >= func(arr)) {
        dizi.push(arr[i])
      }
    }
  }
  return dizi;
}

console.log(ortalamadanBuyukleriBul([1,3,5,7], ortalamaBul))
*/

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
