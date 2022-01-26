//Ejecutando funciones
const URLjson = "Recursos/post.json";
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarsesion);

//Declarando variables
let formulario_login = document.querySelector(".formulario__login");
let contenedor_login_register = document.querySelector(".contenedor__login-register");

//FUNCION

function iniciarsesion(e) {
  e.preventDefault();
  let username = $("#user").val().trim();
  let password = $("#password").val().trim();
  console.log(username);
  console.log(password);
  if (username != "" && password != "") {
    $.ajax({
      url: "Recursos/posts.json",
      type: "get",
      success: function (response) {
        let existe = response.some((element) => {
          return element.username === username && element.password === password;
        });
        if (existe) {
          window.location = "index.html";
        } else {
          //alert("No existe");
          $("#textoerror").prepend(`<h3>Usuario o Contraseña incorrecta</h3>`);
          $("#textoerror").fadeIn(1250);
          $("#textoerror").fadeOut(3000);
        }
      },
    });
  }
}
