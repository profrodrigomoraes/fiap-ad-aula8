const campoNome = document.querySelector("#campo-nome");
const campoEmail = document.querySelector("#campo-email");
const mensagemFormulario = document.querySelector(".mensagem-formulario");

// mostra a mensagem de erro ou sucesso, trocando a classe CSS que define a cor
function mostrarMensagem(texto, tipo) {
  mensagemFormulario.textContent = texto;
  mensagemFormulario.className = `mensagem-formulario ${tipo}`;
}

// valida o formulário de cadastro antes de aceitar o envio
function validarFormulario(event) {
  event.preventDefault(); // impede o recarregamento da página ao enviar o formulário

  const nome = campoNome.value.trim();   // trim() remove espaços do início/fim
  const email = campoEmail.value.trim();

  if (nome === "") {
    mostrarMensagem("Preencha seu nome.", "erro");
    return; // para a função aqui, não continua validando
  }

  if (email === "") {
    mostrarMensagem("Preencha seu e-mail.", "erro");
    return;
  }

  if (!email.includes("@")) {
    mostrarMensagem("Digite um e-mail válido.", "erro");
    return;
  }

  mostrarMensagem(`Cadastro confirmado, ${nome}!`, "sucesso");
  campoNome.value = "";
  campoEmail.value = "";
}
