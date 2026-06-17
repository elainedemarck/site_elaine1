constbotoes = document.querySelectorAll(".botao");
consttextos = document.querySelectorAll(".aba-conteudo");

for(let i =0; i<botoes.length;i++);{
    botoes[i].onclik= function(){

        for(let j =0; j<botoes.length;i++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }

}
constcontadores = document.querySelectorAll(".contador");
consttempoObjetivo1 = new Date("2024-10-05T00:00:00");
consttempoObjetivo2 = new Date("2024-12-05T00:00:00");
consttempoObjetivo3 = new Date("2024-10-30T00:00:00");
consttempoObjetivo4 = new Date("2025-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo-tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math;floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %=60;
    minutos %=60;
    horas %=24;
    if (tempoFinal>0){
        return[dias,horas,minutos,segundos];
    }else{
  return[0,0,0,0];
    }
}

function atualizaCronometro(){
    for(let i=0; i<contadores.length; i++);{
    document.getElementByld("dias"+i).textContent = calculatempo(tempos[i])[0];
    document.getElementByld("horas"+i).textContent = calculatempo(tempos[i])[1];
    document.getElementByld("min"+i).textContent = calculatempo(tempos[i])[2];
    document.getElementByld("seg"+i).textContent = calculatempo(tempos[i])[3];
}
}
function comecaCronometro();{
atualizaCronometro();
setInterval(atualizaCronometro,1000);
}
comecaCronometro
