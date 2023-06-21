//LOGIN

let btnLogin = document.getElementById("btnLogin");
let emailLog = document.getElementById("email_log");
let passLog = document.getElementById("pass_log");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const logIn = {
    email: emailLog.value,
    password: passLog.value,
  };
  console.log(logIn);
  window.location.href = "./index.html";
  localStorage.setItem("email", emailLog.value);
});

//REGISTER

let btnReg = document.getElementById("btnReg");
let userReg = document.getElementById("user_reg");
let emailReg = document.getElementById("email_reg");
let passReg = document.getElementById("pass_reg");

btnReg.addEventListener("click", (e) => {
  e.preventDefault();
  const register = {
    username: userReg.value,
    email: emailReg.value,
    password: passReg.value,
  };

  if (emailReg.value == localStorage.getItem("email")) {
    alert("Usted ya esta registrado");
  } else {
    window.location.href = "./index.html";
  }
  console.log(register);
  localStorage.setItem("username", userReg.value);
});

localStorage.getItem("username");
