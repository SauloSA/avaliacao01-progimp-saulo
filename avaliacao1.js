// Saulo Assis - Turma 4


function menu(prato, tempo) {

    let tempoTotal = tempo
    let temponecessario = 0

    let tempoPipoca = 10
    let tempoMacarrao = 8
    let tempoCarne = 15
    let tempoFeijao = 12
    let tempoBrigadeiro = 8


    if (prato == "Pipoca") {
        tempoTotal += tempoPipoca
        temponecessario = 10
        
    } else if (prato == "Macarrão") {
        tempoTotal += tempoMacarrao
        temponecessario = 8

    } else if (prato == "Carne") {
        tempoTotal += tempoCarne
        temponecessario = 15

    } else if (prato == "Feijão") {
        tempoTotal += tempoFeijao
        temponecessario = 12

    } else if (prato == "Brigadeiro") {
        tempoTotal += tempoBrigadeiro
        temponecessario = 8
        
    } else {
        console.log("Escolha uma opção válida")
    }



    if (tempoTotal >= (temponecessario * 3)) {
        console.log("kabum!")

    } else if (tempoTotal >= (temponecessario * 2)) {
        console.log("A comida queimou!")

    } else if (tempoTotal < temponecessario) {
        console.log("Tempo insuficiente")

    } else {
        console.log("Prato pronto, bom apetite!!")
    }
}




menu("Pipoca", 0)
menu("Pipoca", 10)
menu("Pipoca", 22)
menu("Pipoca", -5)

console.log("\n")

menu("Macarrão", 0)
menu("Macarrão", 10)
menu("Macarrão", 22)
menu("Macarrão", -5)

console.log("\n")

menu("Carne", 0)
menu("Carne", 10)
menu("Carne", 22)
menu("Carne", -5)

console.log("\n")

menu("Feijão", 0)
menu("Feijão", 10)
menu("Feijão", 22)
menu("Feijão", -5)

console.log("\n")

menu("Brigadeiro", 0)
menu("Brigadeiro", 10)
menu("Brigadeiro", 22)
menu("Brigadeiro", -5)