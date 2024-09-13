let wisdomPoints = 0;
let fate = "Indefinido";

function updateStatus() {
    document.getElementById('wisdom').textContent = wisdomPoints;
    document.getElementById('fate').textContent = fate;
}

function makeChoice(choice) {
    const story = document.getElementById("story");

    if (choice === 1) {
        story.innerHTML = `<p>Você escolhe explorar a floresta. A névoa cobre as árvores e uma presença misteriosa parece seguir seus passos.</p>
                           <div id="choices">
                               <button onclick="makeChoice(3)">Investigar uma luz distante</button>
                               <button onclick="makeChoice(4)">Procurar abrigo em uma árvore oca</button>
                           </div>`;
    } else if (choice === 2) {
        story.innerHTML = `<p>Você segue pelo rio. As águas tranquilas escondem segredos antigos, e um rugido distante ecoa pelas montanhas.</p>
                           <div id="choices">
                               <button onclick="makeChoice(5)">Seguir o rugido até as montanhas</button>
                               <button onclick="makeChoice(6)">Esconder-se nas sombras do rio</button>
                           </div>`;
    } else if (choice === 3) {
        wisdomPoints += 10;
        story.innerHTML = `<p>A luz revela uma fogueira mágica, onde um ancião está sentado. Ele lhe conta sobre os perigos da imortalidade e os benefícios da humanidade. Você sente sua sabedoria crescer.</p>
                           <div id="choices">
                               <button onclick="makeChoice(7)">Aceitar os conselhos do ancião</button>
                               <button onclick="makeChoice(8)">Ignorar e continuar sua jornada</button>
                           </div>`;
        updateStatus();
    } else if (choice === 4) {
        story.innerHTML = `<p>Você encontra abrigo em uma árvore oca, mas logo percebe que está sendo observado por espíritos da floresta. Eles lhe fazem uma pergunta enigmática: "Imortalidade ou humanidade?".</p>
                           <div id="choices">
                               <button onclick="chooseFate('Imortalidade')">Imortalidade</button>
                               <button onclick="chooseFate('Humanidade')">Humanidade</button>
                           </div>`;
    } else if (choice === 5) {
        story.innerHTML = `<p>Você segue o rugido até as montanhas, onde encontra uma criatura guardiã do templo da Cabaça dos Destinos. Ela desafia você a um enigma para continuar.</p>
                           <div id="choices">
                               <button onclick="solveRiddle(true)">Aceitar o desafio</button>
                               <button onclick="solveRiddle(false)">Recusar e procurar outro caminho</button>
                           </div>`;
    } else if (choice === 6) {
        wisdomPoints += 5;
        story.innerHTML = `<p>Escondido nas sombras do rio, você ouve histórias de raposas antigas que fracassaram em sua jornada. O conhecimento oculto das águas lhe dá uma vantagem.</p>
                           <div id="choices">
                               <button onclick="makeChoice(9)">Seguir para o templo</button>
                           </div>`;
        updateStatus();
    } else if (choice === 7) {
        wisdomPoints += 15;
        story.innerHTML = `<p>Os conselhos do ancião aumentam sua sabedoria. Você sente que está mais preparado para enfrentar o dilema final.</p>
                           <div id="choices">
                               <button onclick="makeChoice(9)">Seguir para o templo</button>
                           </div>`;
        updateStatus();
    } else if (choice === 8) {
        story.innerHTML = `<p>Você ignora os conselhos do ancião e continua sua jornada sozinho, mas sente que perdeu algo valioso.</p>
                           <div id="choices">
                               <button onclick="makeChoice(9)">Seguir para o templo</button>
                           </div>`;
    } else if (choice === 9) {
        story.innerHTML = `<p>Você chega ao templo da Cabaça dos Destinos. Agora deve fazer sua escolha final. Qual será seu destino?</p>
                           <div id="choices">
                               <button onclick="chooseFate('Imortalidade')">Imortalidade</button>
                               <button onclick="chooseFate('Humanidade')">Humanidade</button>
                           </div>`;
    }
}

function chooseFate(chosenFate) {
    fate = chosenFate;
    if (chosenFate === 'Imortalidade') {
        document.getElementById("story").innerHTML = `<p>Você escolheu a imortalidade. Agora, viverá para sempre, mas a um custo. Seus entes queridos envelhecerão, enquanto você permanecerá o mesmo.</p>`;
    } else {
        document.getElementById("story").innerHTML = `<p>Você escolheu a humanidade. Sua vida será limitada, mas cheia de propósito. A Cabaça dos Destinos desaparece, e você sente a paz em sua decisão.</p>`;
    }
    updateStatus();
}

function solveRiddle(success) {
    if (success) {
        wisdomPoints += 20;
        document.getElementById("story").innerHTML = `<p>Você resolve o enigma da criatura guardiã e ganha passagem segura até o templo.</p>
                                                      <div id="choices">
                                                          <button onclick="makeChoice(9)">Seguir para o templo</button>
                                                      </div>`;
    } else {
        document.getElementById("story").innerHTML = `<p>Você falha no enigma e é forçado a encontrar um caminho mais longo e perigoso.</p>
                                                      <div id="choices">
                                                          <button onclick="makeChoice(9)">Seguir para o templo</button>
                                                      </div>`;
    }
    updateStatus();
}
