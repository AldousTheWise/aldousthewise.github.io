"use strict"

new Vue({
    el: '#app',
    data: {
        opcionElegida: '',
        imagenes: [
            {
                url: "./img/boomer.png",
                nombre: "Baby boomers",
                definicion: "Deberían respetarnos, aunque ustedes, jóvenes, no sean aptos para la vida."
            },
            {
                url: "./img/genx.png",
                nombre: "Gen X",
                definicion: "Estamos tristes. ¿Qué tal si nos ponemos hasta el cuello de drogas duras?"
            },
            {
                url: "./img/xennial.jpg",
                nombre: "Xennial",
                definicion: "Siempre recordaremos cuando veíamos videos en vhs y nuestro primer blog de porquerías."
            },
            {
                url: "./img/millenials.jpg",
                nombre: "Millenials",
                definicion: "Quiero mi capuchino de Starbucks con un poco de conciencia social, pero solo un poco, por el colon, ¿Cachai?"
            },
            {
                url: "./img/genz.jpg",
                nombre: "Gen Z",
                definicion: "Y con esta selfie representamos nuestra protesta, por todos los errores de la gente que vino antes."
            }
        ]
    }
})