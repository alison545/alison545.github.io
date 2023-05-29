let menuVisible = false;
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    form.reset();
  });

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

const boton = document.querySelector('#boton');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const colaborando = document.querySelector('#colaborando');
const nacionalidad = document.querySelector('#nacionalidad');
const oriundo = document.querySelector('#oriundo');
const foto = document.querySelector('#foto');

const generarUsuario = async () => {
    //consultar a la API
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first;
    apellido.textContent = datos.name.last;
    correo.textContent = datos.email;
    colaborando.textContent = datos.registered.date;
    nacionalidad.textContent = datos.location.country;
    oriundo.textContent = datos.location.state;
    console.log(results[0])
}


// evento para que el DOM inicie con un chef 
document.addEventListener('DOMContentLoaded', generarUsuario);
boton.addEventListener('click', generarUsuario);