class Pessoa {
    constructor(){
        this.nome = "Walescko"
    }
    hello (){
        return "Hello World!"
    }
}

function objeto4(){
    let pessoa = new Pessoa()
    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa.hello())
}

objeto4()