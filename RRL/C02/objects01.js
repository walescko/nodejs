function objetos1(){
    let pessoa = Object()
    pessoa.nome = "Walescko"
    pessoa.hello = function(){
        return "Hello peoples!"
    }

    console.log(pessoa)
    console.log(pessoa.nome)
    console.log(pessoa.hello())
}

objetos1()