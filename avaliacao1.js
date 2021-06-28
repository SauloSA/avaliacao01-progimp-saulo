// Saulo Assis - Turma 4


function menu(prato, tempoPersonalizado) { 
// o usuário escolhe o prato com o tempo padrão e pode adicionar ou reduzir o tempo de aquecimento

    let tempoTotal = tempoPersonalizado // tempo de aquecimento final
    let tempoNecessario = 0 // 

    let tempoPipoca = 10
    let tempoMacarrao = 8
    let tempoCarne = 15
    let tempoFeijao = 12
    let tempoBrigadeiro = 8


    if (prato == "Pipoca") {
        tempoTotal += tempoPipoca
        tempoNecessario = tempoPipoca
        
    } else if (prato == "Macarrão") {
        tempoTotal += tempoMacarrao
        tempoNecessario = tempoMacarrao

    } else if (prato == "Carne") {
        tempoTotal += tempoCarne
        tempoNecessario = tempoCarne

    } else if (prato == "Feijão") {
        tempoTotal += tempoFeijao
        tempoNecessario = tempoFeijao

    } else if (prato == "Brigadeiro") {
        tempoTotal += tempoBrigadeiro
        tempoNecessario = tempoBrigadeiro

    } else {
        console.log("Escolha uma opção válida")
    }



    if (tempoTotal >= (tempoNecessario * 3)) {
        console.log("kabum!")

    } else if (tempoTotal >= (tempoNecessario * 2)) {
        console.log("A comida queimou!")

    } else if (tempoTotal < tempoNecessario) {
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