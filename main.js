// console.log("Nuestra api")

// const URL="https://foodish-api.com/images/pizza";

// fetch(URL)
// .then(response => response.json())
// .then(data => {
//     const img = document.querySelector(`img`);
//     img.src = data[0].url;
// });



function validarFormulario() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var people = document.getElementById("people").value;
    var date = document.getElementById("date").value;
    var horario = document.getElementById("horario").value;
    var checkbox = document.getElementById("checkbox").checked;
  
    if (name == ""  || email == "" || telefono == "" || people == "" || date == "" || horario == "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return false;
    }
  
    if (!checkbox) {
      alert("Debe aceptar términos y condiciones para continuar.");
      return false;
    }
  
    return true;
  }