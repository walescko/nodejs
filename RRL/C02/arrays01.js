function testeArray(){
    let numeros = [1,2,3,4,5,6,7,8,9,10]
    numeros.push(11)
    numeros.push(12)
    for(let i =0; numeros.length > i; i++){
        console.log(numeros[i])
    }
}
testeArray()