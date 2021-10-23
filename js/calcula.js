var produtos = document.querySelectorAll(".produto");

function calcula(valorA, valorB, multi1, multi2, cxa, qtd) {
  var final = 0;
  final = (valorA * multi1 * multi2 + (valorB * cxa) / qtd);
  return final.toFixed(2);
}