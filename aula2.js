alert("Começar jogo");

let vida = 100; // Vida inicial
let inventario = { empatia: 30, determinacao: 50, foco: 50 }; // Inventário inicial
let podeCompetirNasOlimpiadas = true; // Variável para determinar se pode competir nas Olimpíadas

alert("Hoje seu treinador te convidou para ir ver uma competição de atletismo na cidade");
let confirmate = prompt("Digite 'ok' caso você tenha gostado e queira ver a competição, ou 'não ir' caso não deseje ir.");

if (confirmate === "ok") {
    alert("Vida atual: " + vida); 
    alert("Você gostou muito da competição e se motivou para seu próximo treino.");

    alert("Seus treinos estão ficando cada vez mais puxados devido à demanda da competição.");
    let persistencia = prompt("Digite 'continuar' para continuar a treinar, ou 'parar' para parar de treinar.");

    if (persistencia === "continuar") {
        inventario.foco += 20;
        alert(`Vida atual: ${vida}. Você ganhou foco. Foco atual: ${inventario.foco}`);
        checkpointEmpatia();
    } else if (persistencia === "parar") {
        vida -= 20;
        alert("Sua vida diminuiu. Vida atual: " + vida);
        alert("O treinador não gostou de sua atitude, e você perdeu pontos com ele.");
        checkpointPersistencia();
    }

} else if (confirmate === "não ir") {
    vida -= 50;
    podeCompetirNasOlimpiadas = false; // Jogador não pode mais competir nas Olimpíadas
    alert("Sua vida diminuiu. Vida atual: " + vida);
    alert("O técnico ficou desapontado, mas quer você no próximo treino.");

    let persistencia = prompt("Digite 'continuar' para continuar a treinar, ou 'parar' para parar de treinar.");
    while (persistencia !== "continuar") {
        persistencia = prompt("Digite 'continuar' para continuar a treinar, ou 'parar' para parar de treinar.");
    }

    alert("Você se dedicou aos treinos, mas como não foi à competição, não poderá competir nas Olimpíadas.");
}

// Funções

function checkpointEmpatia() {
    alert("Seu técnico está doente e precisa de sua ajuda para cuidar dele.");
        
    let empatia = prompt("Digite 'ajudar' para trazer os remédios ao médico, ou 'não ajudar' para persistir treinando sem ele.");
    if (empatia === "ajudar") {
        alert("Parabéns pela sua atitude! O técnico vai te recompensar com uma oportunidade para as Olimpíadas.");
        checkpointCompeticao();
    } else if (empatia === "não ajudar") {
        vida += 10;
        alert("Sua vida aumentou. Vida atual: " + vida);
        alert("Você complicou sua relação com o técnico.");
        checkpointEmpatia();
    } 
}

function checkpointCompeticao() {
    if (!podeCompetirNasOlimpiadas) {
        alert("Você não pode competir nas Olimpíadas porque não foi à competição.");
        return;
    }

    let irParaCompeticao = prompt("O grande dia chegou. Você está na semifinal do campeonato e está muito nervoso. Digite 'correr' para continuar na corrida ou 'desistir' para abandonar a competição.");

    if (irParaCompeticao === "correr") {
        alert("Parabéns! Você ficou em 2º lugar e foi convocado para as Olimpíadas de 2024 em Paris.");
        alert("Você chegou às Olimpíadas e fará uma das corridas mais importantes da sua carreira.");

        let avolta = prompt("Você pode dar seu 'máximo' ou 'correr' por correr.");
        if (avolta === 'máximo') {
            alert("Parabéns! Você ficou em 7º lugar.");
            alert("Sua posição não foi tão boa, mas o treinador está orgulhoso porque você deu o seu máximo.");
        } else if (avolta === "correr") {
            alert("Infelizmente você não teve uma posição tão boa.");
        }
    } else if (irParaCompeticao === "desistir") {
        alert("Você desistiu e terá uma nova chance...");
        checkpointCompeticao();
    }
}
