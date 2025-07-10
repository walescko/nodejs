function testeVar() {
    let a = 1
    let b = 2
    let soma = a + b
    let nome
    if(nome === undefined){
        console.log("Teste 1: O nome não foi inicializado")
    }
    if (typeof(nome) === "undefined"){
        console.log("Teste 2: O nome não foi inicializado")
    }
    console.log("O tipo do nome é %s e o tipo da soma é %s", typeof(nome), typeof(soma))
    console.log("Olá %s, o resultado da soma de %d e %d é %d", nome,a, b, soma, "que ", "legal!")

}

testeVar()