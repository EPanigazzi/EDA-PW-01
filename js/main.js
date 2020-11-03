// Archivo JS donde guardamos las funciones comunes para los archivos JS

// VARIABLES GLOBALES
const opcionesMenu = document.querySelectorAll(".nav-bar-li"); //lista de opciones nav-bar
const iconoMenu = document.querySelector(".nav-bar-menu i"); // icono rallitas menu
const bannerCovid = document.querySelector('aside div img');

const validarNombreApellido = () => {
    const nombreApellido = document.querySelector("#nombre-apellido");
    const regexNombreCompleto = /^[a-z]+ [a-z]+$/i;

    if (!regexNombreCompleto.test(nombreApellido.value)) {
        mensajeError = "El nombre debe ser por ejemplo: 'Juan perez' ";
        document.querySelector("#errorNombre").textContent = mensajeError;
        nombreApellido.className = "errorInput";
        nombreApellido.focus();
        return false;
    }

    document.querySelector("#errorNombre").textContent = "";
    nombreApellido.classList.add("input-100", "campoParaVaciar");
    return true;
};

const vaciarCamposFormulario = () => {
    const camposAVaciar = document.querySelectorAll(".campoParaVaciar");

    for (i in camposAVaciar) {
        camposAVaciar[i].value = "";
    }
};



const mostrarOcultarMenu = () => {
    for (i in opcionesMenu) {
        if (opcionesMenu[i].className === "nav-bar-li ocultar") {
            opcionesMenu[i].classList.add("nav-bar-opciones");
            opcionesMenu[i].classList.remove("ocultar");
        } else if (
            opcionesMenu[i] &&
            opcionesMenu[i].className === "nav-bar-li nav-bar-opciones"
        ) {
            opcionesMenu[i].classList.remove("nav-bar-opciones");
            opcionesMenu[i].classList.add("ocultar");
        }
    }
};

// CAPTURO EL CLICK EN EL ICONO DEL MENU
iconoMenu.onclick = () => {
    if (screen.width >= 320 && screen.width <= 425) {
        mostrarOcultarMenu();
    }
};


if (screen.width > 425) {
    // ocultar icono de navbar
    for (i in opcionesMenu) {
        if (
            opcionesMenu[i].className === "nav-bar-li nav-bar-opciones" ||
            opcionesMenu[i].className === "nav-bar-li ocultar"
        ) {
            opcionesMenu[i].classList.add("nav-bar-opciones");
            opcionesMenu[i].classList.remove("ocultar");
            document.querySelector(".nav-bar-menu").style.display = "none";
        }
    }
    bannerCovid.src="img/banner-desktop.png";
}

