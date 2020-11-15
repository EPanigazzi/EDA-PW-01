document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendario");

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ["dayGrid"],
        locale: "es",

        header: {
            left: "prev, next today",
            right: "title",
        },

        events: [
            {
                title: "DNI terminado en 1",
                start: "2020-04-06",
                end: "2020-04-08",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 2",
                start: "2020-04-08",
                end: "2020-04-10",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 3",
                start: "2020-04-10",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 3",
                start: "2020-04-13",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 4",
                start: "2020-04-14",
                end: "2020-04-16",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 5",
                start: "2020-04-16",
                end: "2020-04-18",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 6",
                start: "2020-04-20",
                end: "2020-04-22",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 7",
                start: "2020-04-22",
                end: "2020-04-24",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 8",
                start: "2020-04-24",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 8",
                start: "2020-04-27",
                className: "fechas-abril",
            },
            {
                title: "DNI terminado en 9",
                start: "2020-04-28",
                end: "2020-04-30",
                className: "fechas-abril",
            },
            {
                title: "Virrey Del Pino",
                start: "2020-06-16",
                className: "fechas-junio",
            },
            {
                title: "Laferrere",
                start: "2020-06-16",
                className: "fechas-junio",
            },
            {
                title: "González Cátan",
                start: "2020-06-17",
                className: "fechas-junio",
            },
            {
                title: "San Justo",
                start: "2020-06-17",
                className: "fechas-junio",
            },
            {
                title: "Rafael Castillo",
                start: "2020-06-17",
                className: "fechas-junio",
            },
            {
                title: "Ciudad Evita",
                start: "2020-06-17",
                className: "fechas-junio",
            },
            {
                title: "Laferrere",
                start: "2020-06-18",
                className: "fechas-junio",
            },
            {
                title: "Isidro Casanova",
                start: "2020-06-18",
                className: "fechas-junio",
            },
            {
                title: "Ciudad Evita",
                start: "2020-06-19",
                className: "fechas-junio",
            },
            {
                title: "Rafael Castillo",
                start: "2020-06-19",
                className: "fechas-junio",
            },
            {
                title: "DNI terminado en 0",
                start: "2020-09-23",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 1",
                start: "2020-09-24",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 2",
                start: "2020-09-25",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 3",
                start: "2020-09-28",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 4",
                start: "2020-09-29",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 5",
                start: "2020-09-30",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 6",
                start: "2020-10-01",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 7",
                start: "2020-10-02",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 8",
                start: "2020-10-05",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 9",
                start: "2020-10-06",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 0 y 1",
                start: "2020-10-07",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 2 y 3",
                start: "2020-10-08",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 4 y 5",
                start: "2020-10-09",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 6 y 7",
                start: "2020-10-13",
                className: "fechas-septiembre-octubre",
            },
            {
                title: "DNI terminado en 8 y 9",
                start: "2020-10-14",
                className: "fechas-septiembre-octubre",
                description: "Mensaje de prueba",
            },
        ],
    });

    calendar.render();
});
