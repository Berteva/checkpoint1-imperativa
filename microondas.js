// Checkpoint 1 - Programação Imperativa CTD - Felipe Silva Bertevello

// Programa que simula um microondas super veloz.

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
//   Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let alimento, tempo = null;

function prepararAlimento (alimento, tempo){
    // Condicional para o alimento Pipoca.
    if (alimento == "Pipoca" && tempo >= 10 && tempo <20){
        return console.log("Prato pronto, bom apetite!!!");
    }
    else if (alimento =="Pipoca" && tempo >= 20 && tempo <30){
        return console.log("Sua comida queimou!!!")
    }
    else if (alimento == "Pipoca" && tempo >30){
        return console.log("Kabummm!!!")
    }
    else if (alimento == "Pipoca" && tempo<10){
        return console.log("Tempo insuficiente!!!")
    }

    // Condicional para o alimento Macarrão.
    else if (alimento == "Macarrão" && tempo >= 8 && tempo <16){
        return console.log("Prato pronto, bom apetite!!!");
    }
    else if (alimento =="Macarrão" && tempo >= 16 && tempo <24){
        return console.log("Sua comida queimou!!!")
    }
    else if (alimento == "Macarrão" && tempo >24){
        return console.log("Kabummm!!!")
    }
    else if (alimento == "Macarrão" && tempo<8){
        return console.log("Tempo insuficiente!!!")
    }

    // Condicional para o alimento Carne.
    else if (alimento == "Carne" && tempo >= 15 && tempo <30){
        return console.log("Prato pronto, bom apetite!!!");
    }
    else if (alimento =="Carne" && tempo >= 30 && tempo <45){
        return console.log("Sua comida queimou!!!")
    }
    else if (alimento == "Carne" && tempo >45){
        return console.log("Kabummm!!!")
    }
    else if (alimento == "Carne" && tempo<15){
        return console.log("Tempo insuficiente!!!")
    }

    // Condicional para o alimento Feijão.
    else if (alimento == "Feijão" && tempo >= 12 && tempo <24){
        return console.log("Prato pronto, bom apetite!!!");
    }
    else if (alimento =="Feijão" && tempo >= 24 && tempo <36){
        return console.log("Sua comida queimou!!!")
    }
    else if (alimento == "Feijão" && tempo >36){
        return console.log("Kabummm!!!")
    }
    else if (alimento == "Feijão" && tempo<12){
        return console.log("Tempo insuficiente!!!")
    }

    // Condicional para o alimento Brigadeiro,
    else if (alimento == "Brigadeiro" && tempo >= 8 && tempo <16){
        return console.log("Prato pronto, bom apetite!!!");
    }
    else if (alimento =="Brigadeiro" && tempo >= 16 && tempo <24){
        return console.log("Sua comida queimou!!!")
    }
    else if (alimento == "Brigadeiro" && tempo >24){
        return console.log("Kabummm!!!")
    }
    else if (alimento == "Brigadeiro" && tempo<8){
        return console.log("Tempo insuficiente!!!")
    }

    // Para um alimento não definido no microondas.
    else {
        return console.log("Prato Inexistente")
    }
}

prepararAlimento("Carne", 29);