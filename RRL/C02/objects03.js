function Pessoa(){
    this.nome = "Walescko"
    this.sobrenome = "Chimendes"
    this.hello = function(){
        return "Hello Peoples!"
    }
}

function objetos3(){
    let pessoa = new Pessoa()
    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa.sobrenome)
    console.log(pessoa.hello())
}

objetos3()