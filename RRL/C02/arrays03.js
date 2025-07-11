function testeArray(){
    let numeros = [1,2,3,4,5,6,7,8,9,10]
    numeros.push(11)
    numeros.push(12)

    console.log("numeros.map sem {}")
    numeros.map(n => console.log(n))

    console.log("numeros.map com {}")
    numeros.map( n=> {
        console.log(n)
    })

    console.log("numeros.map como função anônima")
    numeros.map(function (n){
        console.log(n)
    })
}
testeArray()