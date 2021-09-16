var numeroSecreto = parseInt(Math.random() * 10);
var elementoResultado = document.getElementById("resultado");
var elementoDica = document.getElementById("dica");
var chances = 3;
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns! Você acertou!!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Voce deve digitar um numero de 0 a 10";
  } else {
    chances--;
    if (chances > 0) {
      if (chances == 1) {
        elementoResultado.innerHTML =
          "infelizmente vc errou, vc ainda tem " + chances + " tentativa";
        if (chute > numeroSecreto) {
          elementoDica.innerHTML =
            "DICA: O numero secreto é menor que " + chute;
        }
        if (chute < numeroSecreto) {
          elementoDica.innerHTML =
            "DICA: O numero secreto é maior que " + chute;
        }
      } else {
        elementoResultado.innerHTML =
          "infelizmente vc errou, vc ainda tem " + chances + " tentativas";
        if (chute > numeroSecreto) {
          elementoDica.innerHTML =
            "DICA: O numero secreto é menor que " + chute;
        }
        if (chute < numeroSecreto) {
          elementoDica.innerHTML =
            "DICA: O numero secreto é maior que " + chute;
        }
      }
    } else {
      elementoResultado.innerHTML =
        "infelizmente vc errou, suas tentativas acabaram... o numero secreto era " +
        numeroSecreto;
      elementoDica.innerHTML = null;
    }
  }
}