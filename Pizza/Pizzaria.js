
var calabresa = 5
var portuguesa = 5
var queijo = 5

//Da pra usar só while
do{

var total = 0

console.log(`Estoque: \n Calabresa: ${calabresa} \n Portuguesa: ${portuguesa} \n Queijo: ${queijo}`)

var quantidade = prompt("Quantas pizzas vão ser?")

for(quantidade ; quantidade > 0; quantidade--){

    var sabor = prompt("Escolha o sabor: \n 1 - Calabresa \n 2 - Portuguesa \n 3 - Queijo")
    
    switch(sabor){

        case "1": 

            if(calabresa > 0){
                calabresa -= 1
                console.log(`Sabor: calabresa`)

                var tamanho = prompt("Selecione o tamanho: \n 1 - Pequeno \n 2 - Médio \n 3 - Grande")

                    switch(tamanho){
                        case "1": 
                                total += 40
                                console.log("O tamanho é: Pequeno")
                            break
                            case "2": 
                                total += 50
                                console.log("O tamanho é: Médio")
                            break
                            case "3": 
                                total += 60
                                console.log("O tamanho é: Grande")
                            break
                    }

                console.log(`O total foi: ${total}`)

                }
            
            else{
                alert("Sabor esgotado")
            }
    break

        case "2":

            if(portuguesa > 0){
                portuguesa -= 1
                console.log(`Sabor: portuguesa`)

                var tamanho = prompt("Selecione o tamanho: \n 1 - Pequeno \n 2 - Médio \n 3 - Grande")

                    switch(tamanho){
                        case "1": 
                                total += 45
                                console.log("O tamanho é: Pequeno")
                            break
                            case "2": 
                                total += 55
                                console.log("O tamanho é: Médio")
                            break
                            case "3": 
                                total += 65
                                console.log("O tamanho é: Grande")
                            break
                    }

                console.log(`O total foi: ${total}`)

                }
            
            else{
                alert("Sabor esgotado")
            }
    break

        case "3": 

            if(queijo > 0){
                queijo -= 1
                console.log(`Sabor: queijo`)

                var tamanho = prompt("Selecione o tamanho: \n 1 - Pequeno \n 2 - Médio \n 3 - Grande")

                        switch(tamanho){
                            case "1": 
                                total += 40
                                console.log("O tamanho é: Pequeno")
                            break
                            case "2": 
                                total += 50
                                console.log("O tamanho é: Médio")
                            break
                            case "3": 
                                total += 60
                                console.log("O tamanho é: Grande")
                            break
                        }

                console.log(`O total foi: ${total}`)

                    }
                
            else{
                alert("Sabor esgotado")
            }
    break

    default:
        alert("Desculpe, não temos essa opção");
    }

}

alert(`O total é: ${total}`)

if(sabor == "1" || sabor == "2" || sabor == "3"){

    var pagamento = prompt("Adicione o valor do pagamento: ")
   

    if(pagamento >= total){
        alert(`Obrigada por comprar, seu total foi de ${total} e seu troco é ${pagamento - total}`)
        console.log("PAGAMENTO APROVADO")
    }
    if(pagamento < total){
        alert(`Infelizmente não foi possivel efetuar o pagamento, seu total foi de ${total}, faltaram ${total - pagamento} reais`)
        console.log("PAGAMENTO REPROVADO")
    }

 }

    var continuar = prompt("Digite 1 para fazer uma nova operação ou 2 para encerrar")


} while(continuar == 1)
