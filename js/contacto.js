//---------VALIDACIONES CONTACTO ------------------------
//Almaceno los valores de cada validacion en variables
//Comparo para ver el tipo de mensaje que recibe el usuario
const validarFormularioContacto = () => {
    const nombreApellido = validarNombreApellido();
    const email = validarEmail();
    const telefono = validarTelefono();

    if (nombreApellido && email && telefono) {
        mostrarMensajeEnvioSatisfactorio();
        setInterval(() => {
            ocultarMensajeEnvioSatisfactorio();
        }, 5000);

        //Si dejo true postea y se no ve el cartel
        //return true;
    }

    return false;
};

const validarNombreApellido = () => {
    const nombreApellido = document.querySelector("#nombre-apellido").value;

    if (nombreApellido === "") {
        mensajeError = "El nombre no puede ser vacio";
        document.querySelector("#errorNombre").innerHTML = mensajeError;
        document
            .querySelector("#nombre-apellido")
            .classList.remove("input-100");
        document.querySelector("#nombre-apellido").className = "errorInput";
        return false;
    }
    document.querySelector("#errorNombre").textContent = "";
    document.querySelector("#nombre-apellido").classList.remove("errorInput");
    document.querySelector("#nombre-apellido").className = "input-100";
    return true;
};

const validarEmail = () => {
    const email = document.querySelector("#email").value;
    const regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    if (!regexEmail.test(email)) {
        mensajeError = "El email debe contener '@'";
        document.querySelector("#errorEmail").innerHTML = mensajeError;
        document.querySelector("#email").classList.remove("input-100");
        document.querySelector("#email").className = "errorInput";
        return false;
    }
    document.querySelector("#errorEmail").textContent = "";
    document.querySelector("#email").classList.remove("errorInput");
    document.querySelector("#email").className = "input-100";
    return true;
};

const validarTelefono = () => {
    const telefono = document.querySelector("#telefono").value;
    const regexTelefono = /^\(?\d{3}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;

    if (!regexTelefono.test(telefono)) {
        mensajeError = "El numero de telefono debe ser 'XX-XXXX-XXXX' ";
        document.querySelector("#errorTelefono").innerHTML = mensajeError;
        document.querySelector("#telefono").classList.remove("input-100");
        document.querySelector("#telefono").className = "errorInput";
        return false;
    }
    document.querySelector("#errorTelefono").textContent = "";
    document.querySelector("#telefono").classList.remove("errorInput");
    document.querySelector("#telefono").className = "input-100";
    return true;
};

const validarCantidadCaracteres = () => {
    const caracteresEnUso = document.querySelector("#consulta").value.length;
    const CANTIDAD_MAX_CARACTERES = 1000;
    let caracteresRestantes = CANTIDAD_MAX_CARACTERES - caracteresEnUso;
    let mensajeError = document.querySelector("#errorConsulta");

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
    const mensajeSatisfactorio = document.querySelector(".mensajeEnvio p");
    mensajeSatisfactorio.style.display = "block";
};
const ocultarMensajeEnvioSatisfactorio = () => {
    const mensajeSatisfactorio = document.querySelector(".mensajeEnvio p");
    mensajeSatisfactorio.style.display = "none";
    document.querySelector("#nombre-apellido").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#telefono").value = "";
};
