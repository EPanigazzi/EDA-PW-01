// Archivo JS donde guardamos las funciones comunes para los archivos JS
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

const validarTelefono = () => {
    const telefono = document.querySelector("#telefono");
    const regexTelefono = /^\(?\d{3}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;

    if (!regexTelefono.test(telefono.value)) {
        mensajeError = "Debe ser: '011-XXXX-XXXX'";
        document.querySelector("#errorTelefono").textContent = mensajeError;
        telefono.className = "errorInput";
        return false;
    }

    document.querySelector("#errorTelefono").textContent = "";
    telefono.classList.add("input-100", "campoParaVaciar");
    return true;
};

const vaciarCamposFormulario = () => {
    const camposAVaciar = document.querySelectorAll(".campoParaVaciar");

    for (i in camposAVaciar) {
        camposAVaciar[i].value = "";
    }
};
