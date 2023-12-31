function addContact() {
  const nome = document.getElementById("name").value;
  const telefone = document.getElementById("phone").value;

  // Verificar se o nome e telefone existem
  if (!nome || !telefone) {
    alert("Preencha todos os campos.");
    return;
  }
  /*
  Aqui eu adiciono uma const onde vai adicionar cada linha nova na minha tabela, utilizando o -1 para criar novas. 
  Dps eu adicono cada coluna usando. Todos usando o metodo de inserir linha e coluna
  Adiciono essa as colunas nos valores do meu nome e telefone
  Na coluna3 o valor vai ser um novo botão que vai remover
  Na função de remover coloco um evento de click e o this pra fazer referencia ao propio botao clicado
  APOS executar o remove ele limpa os valores do meu nome e telefone
  */
  const tabela = document.getElementById("tabela");
  const row = tabela.insertRow(-1);
  const coluna1 = row.insertCell(0);
  const coluna2 = row.insertCell(1);
  const coluna3 = row.insertCell(2);
  coluna1.innerHTML = nome;
  coluna2.innerHTML = telefone;
  coluna3.innerHTML = "<button class='botaoremover'>Remover</button>";
  const botaoRemover = coluna3.querySelector(".botaoremover");
  botaoRemover.addEventListener("click", function () {
    removerContato(this);
  });
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}
/* 
Na função eu apenas retiro o elemento pai no caso o tbody, o elemento em si não é o tbody, e sim o tr, o tbody é apenas o que vai ser removido
 porém coloquei pra entender melhor o que ta acontecendo
*/
function removerContato(button) {
  const tbody = button.parentNode.parentNode;
  tbody.parentNode.removeChild(tbody);
}

const botao = document.querySelector(".botao");
botao.addEventListener("click", addContact);
