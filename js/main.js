// Archivo JS donde guardamos las funciones comunes para los archivos JS
$(document).ready(function () {
    const opcionesNavbar = $(".nav-bar-li");
    const iconoRallitasNavbar = $(".nav-bar-menu i");
    const iconoCruzNavbar = $(".close-nav-bar");

    const mostrarOpcionesMenuNavbar = () => {
        opcionesNavbar.show();
        iconoCruzNavbar.show();
    };
    const ocultarOpcionesMenuNavbar = () => {
        opcionesNavbar.hide();
        iconoCruzNavbar.hide();
    };

    const clickNavbar = () => {
        $(".nav-bar-menu").click(function (e) {
            if (e.target.className === "fas fa-bars") {
                mostrarOpcionesMenuNavbar();
            }
            if (e.target.className === "close-nav-bar") {
                ocultarOpcionesMenuNavbar();
            }
        });
    };

    const navbarDispositivosMayoresMobile = () => {
        $('.nav-bar-menu').hide();
        opcionesNavbar.show();
    };

    const navbarDispositivosMobile = () => {
        opcionesNavbar.hide();
        iconoCruzNavbar.hide();
        $('.nav-bar-menu').show();
    }

    // Lo hicimos para que reconozca el tamaño de la pantalla ni bien ingresa el usuario
    const navbarSegunAnchoPantalla = () => {
        if ($(window).width() < 768) {
            navbarDispositivosMobile();
            clickNavbar();
        } else {
            navbarDispositivosMayoresMobile();
        }
    };

    // Reconoce el tamaño de pantalla de manera responsive
    const navbarConCambiosResolucionPantalla = () => {
        $(window).resize(function () {
            navbarSegunAnchoPantalla();
        });
    };

    navbarSegunAnchoPantalla();
    navbarConCambiosResolucionPantalla();
});

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
