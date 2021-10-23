var botaoAdicionar = document.querySelector("#adicionar-produto");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#formAd");

  var produto = obtemInfoDoForm(form);

  adicionaProdutoNaTabela(produto);

  form.reset();
});

function adicionaProdutoNaTabela(produto) {
  var produtoTr = montaTr(produto);
  var tabela = document.querySelector("#tabela-produtos");
  tabela.appendChild(produtoTr);
}
function obtemInfoDoForm(form) {
  var produto = {
    nome: form.nome.value,
    valorA: form.valorA.value,
    valorB: form.valorB.value,
    multi1: form.multi1.value,
    multi2: form.multi2.value,
    cxa: form.cxa.value,
    qtd: form.qtd.value,
    imc: calculaImc(
      form.valorA.value.replace(",", "."),
      form.valorB.value.replace(",", "."),
      form.multi1.value.replace(",", "."),
      form.multi2.value.replace(",", "."),
      form.cxa.value.replace(",", "."),
      form.qtd.value.replace(",", ".")
    ),
  };
  return produto;
}

function montaTr(produto) {
  var produtoTr = document.createElement("tr");
  produtoTr.classList.add("produto");

  produtoTr.appendChild(montaTd(produto.nome, "info-nome"));
  produtoTr.appendChild(montaTd(produto.valorA, "valorA"));
  produtoTr.appendChild(montaTd(produto.valorB, "valorB"));
  produtoTr.appendChild(montaTd(produto.multi1, "multi1"));
  produtoTr.appendChild(montaTd(produto.multi2, "multi2"));
  produtoTr.appendChild(montaTd(produto.cxa, "cxa"));
  produtoTr.appendChild(montaTd(produto.qtd, "qtd"));
  produtoTr.appendChild(montaTd(produto.imc, "info-imc"));
  return produtoTr;
}
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}