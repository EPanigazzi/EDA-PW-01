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

const validarNombreApellido = () => {
    const nombreApellido = document.querySelector("#nombre-apellido");
    const regexNombreCompleto = /^[a-z]+ [a-z]+$/i;

    if (!regexNombreCompleto.test(nombreApellido.value)) {
        mensajeError = "El nombre debe ser por ejemplo: 'Juan perez' ";
        document.querySelector("#errorNombre").textContent = mensajeError;
        nombreApellido.className = "errorInput";
        return false;
    }

    document.querySelector("#errorNombre").textContent = "";
    nombreApellido.classList.add("input-100", "campoParaVaciar");
    return true;
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

const validarTelefono = () => {
    const telefono = document.querySelector("#telefono");
    const regexTelefono = /^\(?\d{3}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;

    if (!regexTelefono.test(telefono.value)) {
        mensajeError = "El número de teléfono debe ser 'XX-XXXX-XXXX' ";
        document.querySelector("#errorTelefono").textContent = mensajeError;
        telefono.className = "errorInput";
        return false;
    }

    document.querySelector("#errorTelefono").textContent = "";
    telefono.classList.add("input-100", "campoParaVaciar");
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

const vaciarCamposFormulario = () => {
    const camposAVaciar = document.querySelectorAll(".campoParaVaciar");

    for (i in camposAVaciar) {
        camposAVaciar[i].value = "";
    }
};
