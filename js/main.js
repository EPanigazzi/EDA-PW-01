// Archivo JS donde guardamos las funciones comunes para los archivos JS
$(document).ready(function () {
    const opcionesNavbar = $(".nav-bar-li");
    const iconoRallitasNavbar = $(".nav-bar-menu i");
    const iconoCruzNavbar = $(".close-nav-bar");

    const mostrarNavbar = () => {
        for (i in opcionesNavbar) {
            if (opcionesNavbar[i].className === "nav-bar-li ocultar") {
                opcionesNavbar.removeClass("ocultar");
                iconoRallitasNavbar.css("display", "none");
                iconoCruzNavbar.removeClass("ocultar");
            }
        }
    };
    const ocultarNavbar = () => {
        for (i in opcionesNavbar) {
            if (opcionesNavbar[i].className === "nav-bar-li") {
                opcionesNavbar.addClass("ocultar");
                iconoRallitasNavbar.css("display", "block");
                iconoCruzNavbar.addClass("ocultar");
            }
        }
    };
    const mostrarNavbarMayoresMobile = () => {
        opcionesNavbar.removeClass("ocultar");
        $(".nav-bar-menu").hide();
    };

    if ($(window).width() > 425) {
        mostrarNavbarMayoresMobile();
        $("#banner-telefono-responsive").attr("src", "img/banner-desktop.png");
    }

    $(".nav-bar-menu").click(function (e) {
        if ($(window).width() <= 425) {
            if (e.target.className === "fas fa-bars") {
                mostrarNavbar();
            }
            if (e.target.className === "close-nav-bar") {
                ocultarNavbar();
            }
        }
    });

    $(".slider-content").bxSlider({
        auto:true

    });
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
