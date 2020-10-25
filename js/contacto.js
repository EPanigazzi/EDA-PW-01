const validarnombreCompleto = (nombreCompleto) => {
    const regexnombreCompleto = /^[a-z]+ [a-z]+$/i;

    if (nombreCompleto.length >= 50) {
        return "Este campo debe tener menos de 50 caracter";
    }
    if (!regexnombreCompleto.test(nombreCompleto)) {
        return "El nombre debe tener solo letras y contener un espacio ej: 'Juan salvo'";
    }

    return "";
};

const validarEmail = (email) => {
    const regexEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

    if (!regexEmail.test(email)) {
        return "El campo email debe ser seguir el orden del ejemplo 'nombre@mail.com'";
    }
    return "";
};

const validarTelefono = (telefono) => {
    const regexTelefono = /^\(?\d{3}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;

    if (telefono.length !== 0) {
        if (!regexTelefono.test(telefono)) {
            return "El campo telefono debe contener contener 11 caracteres '011-1234-5678'";
        }
    }
    return "";
};

const validarGenero = (genero) => {
    if (!genero) {
        return "Debe seleccionar al menos una opcion de sexo";
    }

    return "";
};

const validarDescripcionConsulta = (descripcionConsulta) => {
    if (descripcionConsulta.length >= 1000) {
        return "La consulta no puede ser superior a 1000 caracteres";
    }

    return "";
};

const validarFormulario = (Event) => {
    const $form = document.querySelector("#formularioContacto");

    const nombreCompleto = $form.nombreCompleto.value;
    const email = $form.email.value;
    const telefono = $form.telefono.value;
    const descripcionConsulta = $form["descripcion-consulta"].value;
    // const genero = $form.genero.value;

    const errorNombre = validarnombreCompleto(nombreCompleto);
    const errorTelefono = validarTelefono(telefono);
    const errorEmail = validarEmail(email);
    const errorDescripcionConsulta = validarDescripcionConsulta(
        descripcionConsulta
    );

    const errores = {
        nombreCompleto: errorNombre,
        email: errorEmail,
        telefono: errorTelefono,
        'descripcion-consulta': errorDescripcionConsulta,
    };

    const manejoErrores = manejarErrores(errores);

    if(manejoErrores === 0){
        const $errores = document.querySelector('#errores');
        $errores.className="ocultar";
        mensajeExito()

        setInterval(() => {
            document.querySelector('#exito').style.display='none';
        }, 5000);
    }

    Event.preventDefault();
};

const manejarErrores = (errores) => {
    
    const $keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    let contadorErrores = 0;

    $keys.forEach(function(key){
        const error = errores[key];

        if(error){
            $form[key].className ="error";

            const $error = document.createElement('li');
            $errores.classList.remove("ocultar");
            $error.innerText = error;

            $errores.appendChild($error);
            contadorErrores++;
        }else{
            
            $form[key].className ="input-100";
        }
    })
    return contadorErrores;
};

const mensajeExito = () =>{
    const mensaje = document.querySelector('#exito');
    mensaje.className="mensaje-exito";
}

const $form = document.querySelector("#formularioContacto");
$form.onsubmit = validarFormulario;
