// VARIABLES CONSTANTES
const $form = document.querySelector('#detalle-enfermedades');
let contadorSintomas = 0;



const ValidarFormularioEnfermedades = () => {

    validarNombreApellido();
    validarTelefono();
    validarDNI();
    validarSintomaEsteChequeado();
    contarCantidadDeSintomasPositivos();
    //const nombreApellido = validarNombreApellido();
    // const DNI = validarDNI();
    // const telefono = validarTelefono();
    // const fiebre = validarPreguntaFiebre();
    // const dolorCabeza = validarPreguntaDolorCabeza();
    // const tos = validarPreguntaTos();
    // const dolorGarganta = validarPreguntaDolorGarganta();
    // const respirar = validarPreguntaRespirar();

    // const cantidadDeSintomasPositivos = calcularCantidadDeSintomasPositivos(
    //     fiebre,
    //     dolorCabeza,
    //     tos,
    //     dolorGarganta,
    //     respirar
    // );

    // const mensaje = `El fomulario fue completado correctamente. ${cantidadDeSintomasPositivos} sintomas de COVID-19 fueron registrados`;

    // if (nombreApellido && DNI && telefono)
    //     if (
    //         fiebre !== -1 &&
    //         dolorCabeza !== -1 &&
    //         tos !== -1 &&
    //         dolorGarganta !== -1 &&
    //         respirar !== -1
    //     ) {
    //         document.querySelector(".mensajeEnvio").classList.remove("ocultar");
    //         document.querySelector(".mensajeEnvio p").innerHTML = mensaje
    //     }

    return false;
};


const validarDNI = () => {
    const nroDNI = document.querySelector("#dni").value;
    const regexDNI = /^[0-9]{8}$/;
    const mensaje = "Campo obligatorio";

    if (!regexDNI.test(nroDNI)) {
        document.querySelector("#dni").className= "errorInput";
        document.querySelector("#errorDNI").innerHTML = mensaje;
        return false;
    }
    document.querySelector("#dni").classList.remove("errorInput");
    document.querySelector("#dni").className = "input-100";
    document.querySelector("#errorDNI").innerHTML = "";
    return true;
};

const mostarCampo = (labelName, inputId) => {
    document.querySelector(`[for = '${labelName}']`).className="form-label";
    document.querySelector(`#${inputId}`).className="input-100";
};
const ocultarCampo = (labelName, inputId) => {
    document.querySelector(`[for = '${labelName}']`).className="ocultar";
    document.querySelector(`#${inputId}`).className="ocultar";
};




const contarCantidadDeSintomasPositivos = () => {
    const sintomasPositivos = document.querySelectorAll('.checkarValor');
    
    for(let i=0; i<sintomasPositivos.length; i++){
        if(sintomasPositivos[i].checked){
            contadorSintomas = contadorSintomas + 1;
        }
    }
    
    return console.log("contadorSintomas " + " " + contadorSintomas);
}


const validarSintomaEsteChequeado = () =>{
    const sintomasCheckeados = document.querySelectorAll('.validarCheck');
    let mensajesDeErrores = document.querySelectorAll('.err');
    let aux = false;

    for(let i=1; i<sintomasCheckeados.length; i++){
        for (let j = 0; j < sintomasCheckeados.length-1 ; j++) {
            if(sintomasCheckeados[j].checked == sintomasCheckeados[j+1].checked){
                mensajesDeErrores[j].textContent = "Debe completar con 'Si' o 'No'";
            }
        }
    }
    // for(let i=0; i<sintomasCheckeados.length; i++){
    //     for (let j = 0; j < mensajesDeErrores.length; j++) {
    //         console.log(sintomasCheckeados[i].checked)
    //         // aux = sintomasCheckeados[i];
    //         // sintomasCheckeados[i] = 
    //         mensajesDeErrores[j].textContent = "Debe completar con 'Si' o 'No'";
    //     }
    // }

    return false;
}

//Preguntas sintomas

//Fiebre
const validarPreguntaFiebre = () => {
    const fiebreTrue = document.querySelector("#fiebreTrue").checked;
    const fiebreFalse = document.querySelector("#fiebreFalse").checked;

    if (fiebreTrue && !fiebreFalse) {
        document.querySelector("#errorCheckedFiebre").innerHTML = "";
        return 1;
    } else if (!fiebreTrue && fiebreFalse) {
        document.querySelector("#errorCheckedFiebre").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedFiebre").innerHTML =
        "Debe contestar 'Si' o 'No' ";
    return -1;
};
//Dolor cabeza
const validarPreguntaDolorCabeza = () => {
    const dolorCabezaTrue = document.querySelector("#dolorCabezaTrue").checked;
    const dolorCabezaFalse = document.querySelector("#dolorCabezaFalse")
        .checked;

    if (dolorCabezaTrue && !dolorCabezaFalse) {
        document.querySelector("#errorCheckedDolorCabeza").innerHTML = "";
        return 1;
    } else if (!dolorCabezaTrue && dolorCabezaFalse) {
        document.querySelector("#errorCheckedDolorCabeza").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedDolorCabeza").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};
//Tos
const validarPreguntaTos = () => {
    const tosTrue = document.querySelector("#tosTrue").checked;
    const tosFalse = document.querySelector("#tosFalse").checked;

    if (tosTrue && !tosFalse) {
        document.querySelector("#errorCheckedTos").innerHTML = "";
        return 1;
    } else if (!tosTrue && tosFalse) {
        document.querySelector("#errorCheckedTos").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedTos").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};
//DolorGarganta
const validarPreguntaDolorGarganta = () => {
    const dolorGargantaTrue = document.querySelector("#dolorGargantaTrue")
        .checked;
    const dolorGargantaFalse = document.querySelector("#dolorGargantaFalse")
        .checked;

    if (dolorGargantaTrue && !dolorGargantaFalse) {
        document.querySelector("#errorCheckedDolorGaraganta").innerHTML = "";
        return 1;
    } else if (!dolorGargantaTrue && dolorGargantaFalse) {
        document.querySelector("#errorCheckedDolorGaraganta").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedDolorGaraganta").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};
//Dificultad respirar
const validarPreguntaRespirar = () => {
    const dificultadRespirarTrue = document.querySelector(
        "#dificultadRespirarTrue"
    ).checked;
    const dificultadRespirarFalse = document.querySelector(
        "#dificultadRespirarFalse"
    ).checked;

    if (dificultadRespirarTrue && !dificultadRespirarFalse) {
        document.querySelector("#errorCheckedRespirar").innerHTML = "";
        return 1;
    } else if (!dificultadRespirarTrue && dificultadRespirarFalse) {
        document.querySelector("#errorCheckedRespirar").innerHTML = "";
        return 0;
    }

    document.querySelector("#errorCheckedRespirar").innerHTML =
        "Debe contestar 'Si' o 'No'";
    return -1;
};

// mostar / ocultar direccion

const mostarDireccion = () => {
    const dificultadRespirarTrue = document.querySelector(
        "#dificultadRespirarTrue"
    ).checked;
    const direccionLabel = document.querySelector("[for = 'address']");
    const direccionInput = document.querySelector("#address");

    if (dificultadRespirarTrue) {
        direccionLabel.style.display = "block";
        direccionInput.style.display = "block";
    }
};

const ocultarDireccion = () => {
    const dificultadRespirarFalse = document.querySelector(
        "#dificultadRespirarFalse"
    ).checked;
    const direccionLabel = document.querySelector("[for = 'address']");
    const direccionInput = document.querySelector("#address");

    if (dificultadRespirarFalse) {
        direccionLabel.style.display = "none";
        direccionInput.style.display = "none";
    }
};

// mostar / ocultar direccion

// funcion para contar la cantidad de sintomas

const calcularCantidadDeSintomasPositivos = (
    fiebre,
    tos,
    dolorCabeza,
    dolorGarganta,
    respirar
) => {
    let cantidadDeSintomasPositivos = 0;

    if (fiebre === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (tos === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (dolorCabeza === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (dolorGarganta === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }
    if (respirar === 1) {
        cantidadDeSintomasPositivos = cantidadDeSintomasPositivos + 1;
    }

    return cantidadDeSintomasPositivos;
};

//FIN funcion para contar la cantidad de sintomas