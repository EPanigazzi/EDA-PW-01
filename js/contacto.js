//---------VALIDACIONES CONTACTO ------------------------
let mensajeError = "";

const validarFormularioContacto = () => {
    const nombreApellido = validarNombreApellido();
    const email = validarEmail();
    const telefono = validarTelefono();

    if (nombreApellido && email && telefono) {
        mostrarMensajeEnvioSatisfactorio();
        setInterval(() => {
            ocultarMensajeEnvioSatisfactorio();
        }, 5000);
    }

    return false;
};

const validarEmail = () => {
    const email = document.querySelector("#email");
    const regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    if (!regexEmail.test(email.value)) {
        mensajeError =
            "El email debe contener debe ser por ejemplo: 'juan@mail.com' ";
        document.querySelector("#errorEmail").textContent = mensajeError;
        email.className = "errorInput";
        return false;
    }

    document.querySelector("#errorEmail").textContent = "";
    email.classList.add("input-100", "campoParaVaciar");
    return true;
};

const validarCantidadCaracteres = () => {
    const caracteresEnUso = document.querySelector("#consulta").value.length;
    const CANTIDAD_MAX_CARACTERES = 1000;
    let caracteresRestantes = CANTIDAD_MAX_CARACTERES - caracteresEnUso;
    mensajeError = document.querySelector("#errorConsulta");

    if (caracteresEnUso >= 0) {
        mensajeError.innerHTML = `${caracteresRestantes} / ${CANTIDAD_MAX_CARACTERES}`;
    }

    if (caracteresEnUso > 900) {
        mensajeError.style.color = "red";
    } else {
        mensajeError.style.color = "black";
    }
};
//---------FIN VALIDACIONES CONTACTO ------------------------

//---------MENSAJES DE ENVIOS -------------------------------

const mostrarMensajeEnvioSatisfactorio = () => {
    const mensajeSatisfactorio = document.querySelector(".mensaje-envio");
    mensajeSatisfactorio.classList.remove("ocultar");
};
const ocultarMensajeEnvioSatisfactorio = () => {
    const mensajeSatisfactorio = document.querySelector(".mensaje-envio");
    mensajeSatisfactorio.classList.add("ocultar");
    vaciarCamposFormulario();
};


