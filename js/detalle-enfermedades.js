// VARIABLES GLOBALES
const $form = document.querySelector("#detalle-enfermedades");
const mensajeErrorSintomas = "El valor debe ser 'Si' o 'No'";
let cantidadSintomasPositivos = 0;

const ValidarFormularioEnfermedades = () => {
    const nombreApellido = validarNombreApellido();
    const telefono = validarTelefono();
    const DNI = validarDNI();
    const sintomasValidos = validarSintomas();

    if(nombreApellido && telefono && DNI && sintomasValidos){
        document.querySelector('.campos-obligatorios').className="ocultar";
        mostrarMensajeExito();
        setInterval(() => {
            document.querySelector('#mensaje-exito').className="ocultar"
        }, 5000);
    }
        
    return false;
};

const validarDNI = () => {
    const nroDNI = document.querySelector("#dni");
    const regexDNI = /^[0-9]{8}$/;
    const mensajeError = "Ingrese 8 digitos '29.012.543'";

    if (!regexDNI.test(nroDNI.value)) {
        nroDNI.className = "errorInput";
        document.querySelector("#errorDNI").innerHTML = mensajeError;
        return false;
    }
    nroDNI.className = "input-100";
    document.querySelector("#errorDNI").innerHTML = "";
    return true;
};

//Preguntas sintomas

const validarSintomas = () => {
    const fibre = validarPreguntaFiebre();
    const dolorCabeza = validarPreguntaDolorCabeza()
    const tos = validarPreguntaTos()
    const dolorGarganta = validarPreguntaDolorGarganta()
    const respirar = validarPreguntaRespirar()

    if (
        fibre &&
        dolorCabeza &&
        tos &&
        dolorGarganta &&
        respirar
    ) {
        return true;
    }
    return false;
};

//validar sintoma por sintoma
//FIEBRE
const validarPreguntaFiebre = () => {
    const fiebreSintoma = $form.fiebre.value;
    const mensajeError = document.querySelector("#errorCheckedFiebre");

    if (fiebreSintoma === "") {
        mensajeError.textContent = mensajeErrorSintomas;
        return false;
    } else {
        mensajeError.textContent = "";
        return true;
    }
};
//DOLOR DE CABEZA
const validarPreguntaDolorCabeza = () => {
    const doloraCabezaSintoma = $form.dolorCabeza.value;
    const mensajeError = document.querySelector("#errorCheckedDolorCabeza");

    if (doloraCabezaSintoma === "") {
        mensajeError.textContent = mensajeErrorSintomas;
        return false;
    } else {
        mensajeError.textContent = "";
        return true;
    }
};
// TOS
const validarPreguntaTos = () => {
    const tosSintoma = $form.tos.value;
    const mensajeError = document.querySelector("#errorCheckedTos");

    if (tosSintoma === "") {
        mensajeError.textContent = mensajeErrorSintomas;
        return false;
    } else {
        mensajeError.textContent = "";
        return true;
    }
};
//DOLOR GARGANTA
const validarPreguntaDolorGarganta = () => {
    const gargantaSintoma = $form.dolorGarganta.value;
    const mensajeError = document.querySelector("#errorCheckedDolorGaraganta");

    if (gargantaSintoma === "") {
        mensajeError.textContent = mensajeErrorSintomas;
        return false;
    } else {
        mensajeError.textContent = "";
        return true;
    }
};
//DIFICULTAD PARA RESPIRAR
const validarPreguntaRespirar = () => {
    const respirarSintoma = $form.dificultadRespirar.value;
    const mensajeError = document.querySelector("#errorCheckedRespirar");

    if (respirarSintoma === "") {
        mensajeError.textContent = mensajeErrorSintomas;
        return false;
    } else {
        mensajeError.textContent = "";
        return true;
    }
};
//CONTAR CANTIDAD DE SINTOMAS POSITIVOS
const contarCantidadDeSintomasPositivos = () => {
    const sintomasPositivos = document.querySelectorAll(".checkarValor");

    for (let i = 0; i < sintomasPositivos.length; i++) {
        if (sintomasPositivos[i].checked) {
            cantidadSintomasPositivos = cantidadSintomasPositivos + 1;
        }
    }

    return cantidadSintomasPositivos;
};
// --- FIN ---- PREGUNTAS SINTOMAS

const mostrarMensajeExito = () => {
    document.querySelector('.mensaje-exito').className = 'mensaje-exito'
    const mensajeExito = document.querySelector('.mensaje-exito p');

    mensajeExito.textContent = `Él formulario fue completado correctamente. 
    ${contarCantidadDeSintomasPositivos()} síntomas de COVID-19 fueron registrados`;
}

const mostarCampo = (labelName, inputId) => {
    document.querySelector(`[for = '${labelName}']`).className = "form-label";
    document.querySelector(`#${inputId}`).className = "input-100";
};
const ocultarCampo = (labelName, inputId) => {
    document.querySelector(`[for = '${labelName}']`).className = "ocultar";
    document.querySelector(`#${inputId}`).className = "ocultar";
};
