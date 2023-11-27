function mostrarSenha() {
  let inputPass = document.getElementById("senha");
  let btnShowPass = document.getElementById("btn-senha");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    btnShowPass.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    inputPass.setAttribute("type", "password");
    btnShowPass.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}

function mostrarSenhaCadastro() {
  let inputPassCadastro = document.getElementById("senhaCadastro");
  let btnShowPassCadastro = document.getElementById("btn-senha-cadastro");

  if (inputPassCadastro.type === "password") {
    inputPassCadastro.setAttribute("type", "text");
    btnShowPassCadastro.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    inputPassCadastro.setAttribute("type", "password");
    btnShowPassCadastro.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}
function mostrarSenhaCadastro2() {
  let inputPassCadastro = document.getElementById("senhaCadastro2");
  let btnShowPassCadastro = document.getElementById("btn-senha-cadastro2");

  if (inputPassCadastro.type === "password") {
    inputPassCadastro.setAttribute("type", "text");
    btnShowPassCadastro.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    inputPassCadastro.setAttribute("type", "password");
    btnShowPassCadastro.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
}

function esconderCadastro() {
  let menuCadastro = document.getElementById("menu-cadastro");
  let formulario = document.getElementById("formulario");
  let btnCadastro = document.querySelector(".bx-right-arrow-alt");
  let btnCadastro2 = document.querySelector(".bx-left-arrow-alt");
  if (btnCadastro) {
    menuCadastro.style.width = "0vw";
    menuCadastro.style.overflow = "hidden";
    formulario.style.width = "100vw";
    btnCadastro.classList.replace("bx-right-arrow-alt", "bx-left-arrow-alt");
  } else {
    menuCadastro.style.width = "30vw";
    menuCadastro.style.overflow = "";
    formulario.style.width = "70vw";
    btnCadastro2.classList.replace("bx-left-arrow-alt", "bx-right-arrow-alt");
  }
}

function recuperarSenha() {
  let recuperarSenha = confirm("Tem certeza que deseja recuperar sua senha?");
  console.log(recuperarSenha);
  debugger;
  switch (recuperarSenha) {
    case true:
      alert(
        "Foi aberto um chamado para recuperação de senha! Para mais informações contate seu gestor."
      );
      break;
    default:
  }
}
