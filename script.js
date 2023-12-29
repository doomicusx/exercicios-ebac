const button = document.querySelector("button");
function validarFormulario() {
  const campoA = parseInt(document.getElementById("campoA").value);
  const campoB = parseInt(document.getElementById("campoB").value);
  if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
    document.getElementById("mensagem").innerText =
      "Formulario está valido! O numero é B é maior que o A";
  } else {
    document.getElementById("mensagem").innerText =
      "Formulario está errado! O numero B é menor que o A";
  }
}
button.addEventListener("click", validarFormulario);
