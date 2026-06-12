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
consttempoObjetivo = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent= tempoObjetivo1- tempoAtual;