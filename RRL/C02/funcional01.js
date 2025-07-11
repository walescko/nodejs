function soma(a,b){
    return a + b
}

function multiplicacao(a, b){
    return a * b
}

function executar1(funcao, a, b){
    return funcao(a, b)
}

let resultado = executar1(soma, 1, 2)
console.log(resultado)

