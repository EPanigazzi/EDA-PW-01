document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {

        plugins: ['dayGrid'],
        locale: 'es',
        events: [
            {
                title: 'DNI terminado en 1',
                start: '2020-04-06',
                end: '2020-04-08'
            },
            {
                title: 'DNI terminado en 2',
                start: '2020-04-08',
                end: '2020-04-10'
            },
            {
                title: 'DNI terminado en 3',
                start: '2020-04-10'
            },
            {
                title: 'DNI terminado en 3',  
                start: '2020-04-13'    
            },
            {
                title: 'DNI terminado en 4',
                start: '2020-04-14',
                end: '2020-04-16'
            },
            {
                title: 'DNI terminado en 5',
                start: '2020-04-16',
                end: '2020-04-18'
            },
            {
                title: 'DNI terminado en 6',
                start: '2020-04-20',
                end: '2020-04-22'
            },
            {
                title: 'DNI terminado en 7',
                start: '2020-04-22',
                end: '2020-04-24'
            },
            {
                title: 'DNI terminado en 8',
                start: '2020-04-24'
            },
            {
                title: 'DNI terminado en 8',  
                start: '2020-04-27'    
            },
            {
                title: 'DNI terminado en 9',
                start: '2020-04-28',
                end: '2020-04-30'
            },
            {
                title: 'Cañada de Gómez 2754 (Virrey Del Pino)',
                start: '2020-06-16'
            },
            {
                title: 'Marcos Paz 4979 (Laferrere)',
                start: '2020-06-16'
            },
            {
                title: 'Alonso Pareja 6400 (González Cátan)',
                start: '2020-06-17'
            },
            {
                title: 'Bermejo 5050 (San Justo)',
                start: '2020-06-17'
            },
            {
                title: 'Sudámerica y Lanza (Rafael Castillo)',
                start: '2020-06-17'
            },
            {
                title: 'Comedor "Volviendo a Sonreir" (Ciudad Evita)',
                start: '2020-06-17'
            },
            {
                title: 'Rodney 5959 (Laferrere)',
                start: '2020-06-18'
            },
            {
                title: 'Sociedad de Fomento "San Pedro" (Isidro Casanova)',
                start: '2020-06-18'
            },
            {
                title: 'Plaza Eva Duarte (Ciudad Evita)',
                start: '2020-06-19 09:00:00'
            },
            {
                title: 'Lanin 4920 (Rafael Castillo)',
                start: '2020-06-19'
            },
            {
                title: 'DNI terminado en 0',
                start: '2020-09-23'
            },
            {
                title: 'DNI terminado en 1',
                start: '2020-09-24'
            },
            {
                title: 'DNI terminado en 2',
                start: '2020-09-25'
            },
            {
                title: 'DNI terminado en 3',
                start: '2020-09-28'
            },
            {
                title: 'DNI terminado en 4',
                start: '2020-09-29'
            },
            {
                title: 'DNI terminado en 5',
                start: '2020-09-30'
            },
            {
                title: 'DNI terminado en 6',
                start: '2020-10-01'
            },
            {
                title: 'DNI terminado en 7',
                start: '2020-10-02'
            },
            {
                title: 'DNI terminado en 8',
                start: '2020-10-05'
            },
            {
                title: 'DNI terminado en 9',
                start: '2020-10-06'
            },
            {
                title: 'DNI terminado en 0 y 1',
                start: '2020-10-07'
            },
            {
                title: 'DNI terminado en 2 y 3',
                start: '2020-10-08'
            },
            {
                title: 'DNI terminado en 4 y 5',
                start: '2020-10-09'
            },
            {
                title: 'DNI terminado en 6 y 7',
                start: '2020-10-13'
            },
            {
                title: 'DNI terminado en 8 y 9',
                start: '2020-10-14',
                className: 'fechas'
            }
        ]
    });

    calendar.render();
});