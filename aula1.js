
alert("Começar jogo")


let vida = 100; // vida esta com o valor de 100
let inventario = [empatia = 30, determinaçao = 50, foco = 50]
alert("Hoje seu treinador te convidou para ir ver uma competição de atletismo na cidade")
let confirmate = prompt("Digite 'ok' caso você tenha gostado e queira ver a competição, 'não ir' caso não deseja ir para esta competição ")
if (confirmate == "ok") {
    alert("Vida atual: " + vida) // vida esta com o valor de 100
    alert("Você gostou muito da competição, até se motivou para seu próximo treino.")

    alert("Seus treinos foram  ficando cada vez mais puxados, devido a demanda da competição")
    let persistencia = prompt("Digite 'continuar' para continuar a treinar, digite 'parar' para parar de treinar")
    if (persistencia == "continuar") {

        inventario[2] = inventario[2] + 20

        alert(`Vida atual: ${vida} Você ganhou foco. Foco atual: ${inventario[2]}`)


        checkpointEmpatia()
    }
    else if (persistencia == "parar") {
        vida = vida - 20
        alert("Sua vida diminuiu. Vida atual" + vida)
        alert("O treinador não gostou de sua atitude e você perdeu pontos com o professor.")

        let continuarPersistencia = prompt("Você perdeu sua chance de ir para as Olímpiadas, digite 'Tentar novamente' ou 'Desistir'")
        if (continuarPersistencia == 'tentar novamente') {

        }
    }

} else if (confirmate == "não ir") {
    vida = vida - 50 // vida esta com o valor de 50
    alert("Sua vida diminuil. Vida atual: " + vida)
    alert("O tecnico ficou desapontado, mas quer voce no proximo treino")
    alert("No treino voce se cansou muito, e se estressou muito")

    let persistencia = prompt("Digite 'continuar' para continuar a treinar, digite 'parar' para parar de treinar")
    alert("Os treinos estão ficando cada vez mais puxados")
    while (persistencia != "continuar") {

        persistencia = prompt("Digite 'continuar' para continuar a treinar, digite 'parar' para parar de treinar")
        if (persistencia == "continuar") {

            alert("Boa você esta reconquistando o treinador. Se dedique para a próxima competição")
            checkpointCompeticao()

        }
        else if (persistencia == "parar") {
            alert("O treinador esta decepcionado com você, ele não te ve mais no futuro da equipe. ")

        }
    }

}

function checkpointEmpatia() {
    alert("Seu técnico esta doente e precisa de sua ajuda para cuidar dele")

    let empatia = prompt("Digite 'ajudar' para trazer os remédicos ao médico, digite 'Não ajudar' para persistir treinando sem ele")
    if (empatia == "ajudar") {
        alert("vida atual")
        alert("Parabéns pela sua atitude, o técnico vai te recompeçar com uma oportunidade para as Olímpiadas")

        checkpointCompeticao()
    } else if (empatia == "Não ajudar") {
        vida = vida + 10
        alert("Sua vida aumentou. Vida atual" + vida)
        alert("Você complicou sua relação com o técnico")
        alert("Tente reconquistar ele...")
        checkpointEmpatia()
    }
}

function checkpointCompeticao() {

    let irParaCompetição = prompt("O grande dia chegou. você esta na semifinal do campeonato e você está com muito nervoso. Digite 'Correr' para continuar na corrida ou 'Desistir' para abandonar a competição")

    if (irParaCompetição == "Correr") {

        alert("Parabéns você ficou em 2 lugar e foi convocado para as Olímpiadas de 2024 de Paris")

        alert("Você chegou nas Olímpiadas e fará uma das corridas mais importantes de sua carreira") // texto historia
        let avolta = prompt("Você pode dar seu 'Máximo' ou 'Correr' por correr") // texto decisao
        if (avolta == 'Máximo') { // mudar o escolha para uma decisao tipo 'sim' ou 'não'
            alert("Parabéns você ficou em 7° ")
            alert("Sua posição não foi tão boa mas o treinador está orgulhoso de você, porque você deu o seu máximo")
        }
        else if (avolta == "Correr") {
            alert("Infelizmente voce não teve uma posição tao boa")

        }
    } else if (irParaCompetição == "Desistir") {
        alert("Você desistiu e irá ter uma nova chance...")
        checkpointCompeticao()

    }

}
alert("O treinador gostou de como você se saiu e planejou um treino diferente para você")

alert("No treino havia diversos exercícios no qual você nunca havia visto, treinos de salto, impulsão e disparada") // texto historia
let desvio = prompt("Você pode se 'arriscar' e fazer o treino ou 'xingar' o técnico por colocar exercícios que você nunca viu") // texto decisao
if (desvio == 'arriscar') { // mudar o escolha para uma decisao tipo 'sim' ou 'não'
    alert("Parabéns você ficou em 7°")
    // alert("Sua posição não foi tão boa mas o treinador está orgulho de você, porque você deu o seu máximo")
    alert("Você teve um ótimo desempenho, mas acabou se lesionando, o tecnico resolveu o tirar da equipe para sua melhor recuperação")
} else if (desvio == "xingar") {
    alert("O técnico se irritou com você e o tirou do time pelo seu mal comportamento e falta de responsabilidade")
}
checkpointVoltaacorrer()

alert("o JOGO acabou ")