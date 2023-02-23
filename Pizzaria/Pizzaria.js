
var calabresa = 5
var portuguesa = 5
var queijo = 5

//Da pra usar só while
do{

var total = 0

console.log(`Estoque: \n Calabresa: ${calabresa} \n Portuguesa: ${portuguesa} \n Queijo: ${queijo}`)

var quantidade = prompt("Quantas pizzas vão ser?")

for(i = 1; i <= quantidade; i++){

    do{
        var sabor = prompt(`Escolha o sabor da pizza ${i}: \n 1 - Calabresa \n 2 - Portuguesa \n 3 - Queijo`)

        if((sabor != "1") && (sabor != "2") && (sabor != "3")){
            alert("Esse sabor não existe, insira um sabor válido")
        }
            
    }while((sabor != "1") && (sabor != "2") && (sabor != "3"))

    switch(sabor){

        case "1": 

            if(calabresa > 0){
                calabresa -= 1
                console.log(`Sabor: calabresa`)

            do{
                var tamanho = prompt("Selecione o tamanho: \n 1 - Pequeno \n 2 - Médio \n 3 - Grande")
    
                if((tamanho != "1") && (tamanho != "2") && (tamanho != "3")){
                    alert("Esse tamanho não existe, insira um tamanho válido")
                }
                    
            }while((tamanho != "1") && (tamanho != "2") && (tamanho != "3"))

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

            do{
                var tamanho = prompt("Selecione o tamanho: \n 1 - Pequeno \n 2 - Médio \n 3 - Grande")

                if((tamanho != "1") && (tamanho != "2") && (tamanho != "3")){
                    alert("Esse tamanho não existe, insira um tamanho válido")
                }
                
            }while((tamanho != "1") && (tamanho != "2") && (tamanho != "3"))

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

            do{
                var tamanho = prompt("Selecione o tamanho: \n 1 - Pequeno \n 2 - Médio \n 3 - Grande")
    
                if((tamanho != "1") && (tamanho != "2") && (tamanho != "3")){
                    alert("Esse tamanho não existe, insira um tamanho válido")
                }
                    
            }while((tamanho != "1") && (tamanho != "2") && (tamanho != "3"))

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