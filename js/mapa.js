$(document).ready(function () {
    const listaHospitalesPopUp = $(".lista-hospitales ul li");

    const mostarPopUpSegunHospitalClickeado = () => {
        for (i in listaHospitalesPopUp) {
            listaHospitalesPopUp[i].onclick = (e) => {
                const idPopUpClickeado = e.target.id;
                $("#content-popup").removeClass("ocultar");
                ocultarTodosPopUps();
                $(`#${idPopUpClickeado}PopUp`).fadeIn();
                $(window).scrollTop(20);
            };
        }
    };

    const ocultarTodosPopUps = () => {
        const popUpHospitales = $(".popup-detalles");
        popUpHospitales.hide();
    };

    const cerrarPopUp = () => {
        const crucesCierre = $(".cruz-cierre");

        for (i in crucesCierre) {
            crucesCierre[i].onclick = () => {
                $("#content-popup").addClass("ocultar");
            };
        }
    };

    mostarPopUpSegunHospitalClickeado();
    cerrarPopUp();
});
