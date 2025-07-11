console.log("map")
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numeros2 = numeros.map(n => n*2)
console.log(numeros2)

console.log("filter")
var numeros3 = numeros.filter(n => n>5)
console.log(numeros3)

console.log("reduce, sem valor inicial")
let s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n*2)
console.log(s)

console.log("reduce, com valor inicial")
s = numeros.reduce((valorAcumulado, n) => valorAcumulado + n*2, 0)
console.log(s)




