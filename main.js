// // 2-misol

// function call(){
//     return 1
// }
// let arr = [call(),call(),call()]

// let n = 10
// function counter(){
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i]
//         n = n + element
//         return n - 1
//     }
// }
// console.log(counter());
// console.log(counter());
// console.log(counter());



















// // 3-misol

// function sleep(milles){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(milles)
//         },milles)
//     })
// }
// sleep(500).then((data)=>{
//     let t = Date.now()
//     console.log(Date.now() - t + data)
// })














// // 5-polimorfizm

// class Shakl {
//     constructor(p1) {
//         this.p1 = p1
//     }
//     perimetR() {}
//     yuza() {}
// }

// class Aylana extends Shakl {
//     constructor(p1) {
//         super(p1);
//     }
//     perimetR() {
//         return `perimetr ${this.p1 * 2 * 3.14}`
//     }
//     yuza() {
//         return `yuza ${this.p1 * this.p1 * 3.14}`
//     }
// }

// class Tortburchak extends Shakl {
//     constructor(p1, p2) {
//         super(p1);
//         this.p2 = p2;
//     }
//     perimetR() {
//         return `perimetr ${(this.p1 + this.p2) * 2}`
//     }
//     yuza() {
//         return `yuza ${this.p1 * this.p2}`
//     }
// }

// const aylana = new Aylana(5)
// console.log(aylana.perimetR())
// console.log(aylana.yuza())

// const tortburchal = new Tortburchak(5,7)
// console.log(tortburchal.perimetR())
// console.log(tortburchal.yuza())




















// 6-misol

// function chegirma(foiz) {
//     return function(sum) {
//         return sum - (sum * foiz / 100);
//     }
// }

// const onFoizliChegirma = chegirma(10)
// console.log(onFoizliChegirma(200))


















// 7-misol

// function savatcha() {
//     const mahsulotlar = []

//     return function(mahsulot) {
//         if (mahsulot) {
//             mahsulotlar.push(mahsulot)
//         }
//         return mahsulotlar
//     }
// }

// const Savat = savatcha()
// console.log(Savat("Olma"))
// console.log(Savat("Banan"))
// console.log(Savat("Apelsin"))























// 9-misol

// function parolTekshirish(parol) {
//     return function(kiritilgan_parol) {
//         return kiritilgan_parol === parol
//     }
// }

// const parol_fn = parolTekshirish("23032006");
// console.log(parol_fn("23asas655as22"))
// console.log(parol_fn("23032006"))





















// 10-misol

// function teskariRaqam(n) {
//     n = n.toString()
    
//     if (n.length === 1) {
//         return n
//     }
    
//     return n.slice(-1) + teskariRaqam(n.slice(0, -1))
// }
// console.log(teskariRaqam(1234))
// console.log(teskariRaqam(9876))
























// 11-misol

// function daraja(base, exponent) {
//     if (exponent === 0) {
//         return 1
//     }
//     return base * daraja(base, exponent - 1)
// }

// console.log(daraja(5, 3))
// console.log(daraja(5, 4))
// console.log(daraja(7, 2))


















// 12-misol

// function faktoriyal(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     return n * faktoriyal(n - 1)
// }

// console.log(faktoriyal(5))
// console.log(faktoriyal(6))
// console.log(faktoriyal(1))


















// 13-misol

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 1 bajarildi")
//     }, 1000)
// })

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 2 bajarildi")
//     }, 1000)
// })

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 3 bajarildi")
//     }, 1000)
// })

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log(results)
//     })
//     .catch((error) => {
//         console.log("Xato yuz berdi:", error)
// })























// 14-misol

// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 1 bajarildi")
//     }, 1000)
// })

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 2 bajarildi")
//     }, 2000)
// })

// const promise3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 3 bajarildi")
//     }, 3000)
// })

// Promise.race([promise1, promise2, promise3])
//     .then((result) => {
//         console.log("natija : ", result)
//     })
//     .catch((error) => {
//         console.log("Xato yuz berdi:", error)
// })
