console.log("Luis Enrique Ruiz Restrepo");

let repetir = true;

let recuentos = {
    contadornumeros: 0,
    calculadorafactorial: 0,
    validacioncontrasena: 0,
    tablasmultiplicar: 0,
    adivinanumero: 0,
    sumanumerosprimos: 0,
    secuenciafibonacci: 0,
    convertidortemperatura: 0,
    calculadorapotencia: 0,
    piedrapapeltijeras: 0,
};

while (repetir) {
    let opcion = Number(
        prompt(
            "Seleccione:\n1 - Contador numeros pares e impares\n2 - Calculadora de Factorial\n3 - Validación de Contraseña\n4 - Generador de Tablas de Multiplicar\n5 -  Adivinar el Número\n6 - Suma de Números Primos\n7 - Secuencia de Fibonacci\n8 - Convertidor de Temperatura\n9 - Calculadora de Potencia\n10 - Juego de Piedra, Papel o Tijeras\n11 - Cerrar"
        )
    );

    switch (opcion) {
        case 1:
            console.log("Ejercicio 1: Contador de Numeros Pares e Impares");
            const numeroUsuario = parseInt(prompt("Ingrese un número el cual sera el limite de los numeros pares e impares que te proporcionaremos: "));

            if (!isNaN(numeroUsuario)) {
                console.log(`Números pares desde 1 hasta ${numeroUsuario}:`);
                for (let i = 1; i <= numeroUsuario; i++) {
                    if (i % 2 === 0) {
                        console.log(i);
                    }
                }

                console.log(`Números impares desde 1 hasta ${numeroUsuario}:`);
                for (let i = 1; i <= numeroUsuario; i++) {
                    if (i % 2 !== 0) {
                        console.log(i);
                    }
                }
            } else {
                console.log("Entrada no válida. Por favor, ingrese un número.");
            }
            recuentos.contadornumeros++;
            break;

        case 2:
            console.log("Ejercicio 2: Calculadora de Factorial");
            const numeroUsuariodos = parseInt(prompt("Ingrese un número para calcular su factorial: "));

            if (!isNaN(numeroUsuariodos)) {
                if (numeroUsuariodos < 0) {
                    console.log("El factorial no está definido para números negativos.");
                } else {
                    let factorial = 1;
                    for (let i = 1; i <= numeroUsuariodos; i++) {
                        factorial *= i;
                    }
                    console.log(`El factorial de ${numeroUsuariodos} es ${factorial}`);
                }
            } else {
                console.log("Entrada no válida. Por favor, ingrese un número.");
            }
            recuentos.calculadorafactorial++;
            break;

        case 3:
            console.log("Ejercicio 3: Validación de Contraseña");
            const contraseña = prompt("Ingrese una contraseña: ");

            if (contraseña === "secreto123") {
                console.log("Acceso concedido. ¡Bienvenido!");
            } else {
                console.log("Acceso denegado. La contraseña es incorrecta.");
            }
            recuentos.validacioncontraseña++;
            break;

        case 4:
            console.log("Ejercicio 4: Generador de Tablas de Multiplicar");
            const numeroUsuario4 = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar: "));

            if (!isNaN(numeroUsuario4)) {
                console.log(`Tabla de multiplicar de ${numeroUsuario4}:`);
                for (let i = 1; i <= 10; i++) {
                    const resultado = numeroUsuario4 * i;
                    console.log(`${numeroUsuario4} x ${i} = ${resultado}`);
                }
            } else {
                console.log("Entrada no válida. Por favor, ingrese un número.");
            }
            recuentos.tablasmultiplicar++;
            break;

        case 5:
            console.log("Ejercicio 5: Adivinar el Número");
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

            let intentos = 0;
            let adivinanza;

            while (adivinanza !== numeroAleatorio) {
                adivinanza = parseInt(prompt("Adivina el número (1-100): "));
                intentos++;

                if (isNaN(adivinanza)) {
                    console.log("Entrada no válida. Por favor, ingrese un número.");
                } else if (adivinanza < numeroAleatorio) {
                    console.log("Demasiado bajo. Inténtalo de nuevo.");
                } else if (adivinanza > numeroAleatorio) {
                    console.log("Demasiado alto. Inténtalo de nuevo.");
                }
            }

            console.log(`¡Correcto! El número era ${numeroAleatorio}. Tuviste ${intentos} intentos.`);

            recuentos.adivinanumero++;
            break;

        case 6:
            console.log("Ejercicio 6: Suma de Números Primos")
            const N = parseInt(prompt("Ingrese la cantidad de números primos que desea sumar: "));

            if (!isNaN(N) && N > 0) {
                let suma = 0;
                let contador = 0;
                let numeroActual = 2; // Comenzamos desde el primer número primo

                while (contador < N) {
                    let esPrimo = true;

                    if (numeroActual === 2 || numeroActual === 3) {
                        suma += numeroActual;
                        contador++;
                    } else if (numeroActual > 3) {
                        for (let i = 2; i <= Math.sqrt(numeroActual); i++) {
                            if (numeroActual % i === 0) {
                                esPrimo = false;
                                break;
                            }
                        }

                        if (esPrimo) {
                            suma += numeroActual;
                            contador++;
                        }
                    }

                    numeroActual++;
                }

                console.log(`La suma de los primeros ${N} números primos es ${suma}`);
            } else {
                console.log("Entrada no válida. Por favor, ingrese un número entero positivo.");
            }

            recuentos.sumanumerosprimos++;
            break;

        case 7:
            console.log("Ejercicio 7: Secuencia de Fibonacci");
            const n = parseInt(prompt("Ingrese el término hasta el cual desea generar la secuencia de Fibonacci: "));

            if (!isNaN(n) && n >= 0) {
                let a = 0;
                let b = 1;
                let resultado = "";

                if (n === 0) {
                    resultado = "0"; // Caso especial: si n es 0, la secuencia es solo 0.
                } else if (n === 1) {
                    resultado = "0, 1"; // Caso especial: si n es 1, la secuencia es 0, 1.
                } else {
                    resultado = "0, 1"; // Iniciamos con los primeros dos términos conocidos.
                    for (let i = 2; i <= n; i++) {
                        const siguiente = a + b;
                        resultado += `, ${siguiente}`;
                        a = b;
                        b = siguiente;
                    }
                }

                console.log(`Secuencia de Fibonacci hasta el término ${n}: ${resultado}`);
            } else {
                console.log("Entrada no válida. Por favor, ingrese un número entero no negativo.");
            }

            recuentos.secuenciafibonacci++;
            break;

        case 8:
            console.log("Ejercicio 8: Convertidor de Temperatura");
            const opcion = parseInt(prompt("Seleccione la dirección de la conversión:\n1 - De Celsius a Fahrenheit\n2 - De Fahrenheit a Celsius"));

            if (!isNaN(opcion) && (opcion === 1 || opcion === 2)) {
                if (opcion === 1) {
                    // Conversión de Celsius a Fahrenheit
                    const temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

                    if (!isNaN(temperaturaCelsius)) {
                        const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
                        console.log(`La temperatura en grados Fahrenheit es: ${temperaturaFahrenheit.toFixed(2)} °F`);
                    } else {
                        console.log("Entrada no válida. Por favor, ingrese una temperatura numérica.");
                    }
                } else {
                    // Conversión de Fahrenheit a Celsius
                    const temperaturaFahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit: "));

                    if (!isNaN(temperaturaFahrenheit)) {
                        const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;
                        console.log(`La temperatura en grados Celsius es: ${temperaturaCelsius.toFixed(2)} °C`);
                    } else {
                        console.log("Entrada no válida. Por favor, ingrese una temperatura numérica.");
                    }
                }
            } else {
                console.log("Selección no válida. Por favor, seleccione 1 o 2 para la dirección de la conversión.");
            }

            recuentos.convertidortemperatura++;
            break;

        case 9:
            console.log("Ejercicio 9: Calculadora de Potencia");
            const base = parseFloat(prompt("Ingrese la base: "));
            const exponente = parseInt(prompt("Ingrese el exponente: "));

            if (!isNaN(base) && !isNaN(exponente)) {
                const resultado = Math.pow(base, exponente);
                console.log(`${base} elevado a la ${exponente} es igual a ${resultado}`);
            } else {
                console.log("Entrada no válida. Por favor, ingrese valores numéricos.");
            }
            recuentos.calculadorapotencia++;
            break;
        case 10:
            console.log("Ejercicio 10: Juego de Piedra, Papel o Tijeras");
            const opciones = ["piedra", "papel", "tijeras"];

            // Función para que la computadora elija una opción al azar
            function computadoraElige() {
                const indice = Math.floor(Math.random() * 3);
                return opciones[indice];
            }

            const eleccionUsuario = prompt("Elige: piedra, papel o tijeras").toLowerCase();

            if (opciones.includes(eleccionUsuario)) {
                const eleccionComputadora = computadoraElige();

                console.log(`Usuario eligió: ${eleccionUsuario}`);
                console.log(`Computadora eligió: ${eleccionComputadora}`);

                if (eleccionUsuario === eleccionComputadora) {
                    console.log("¡Es un empate!");
                } else if (
                    (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
                    (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
                    (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
                ) {
                    console.log("¡Usuario gana!");
                } else {
                    console.log("¡Computadora gana!");
                }
            } else {
                console.log("Entrada no válida. Por favor, elige entre piedra, papel o tijeras.");
            }

            recuentos.piedrapapeltijeras++;
            break;

        case 11:
            repetir = false;
            break;

        default:
            console.log("Opción no válida. Por favor, seleccione una opción válida.");
            break;
    }
}

console.log("Recuento de operaciones:");
console.log("Contador de Numeros Pares e Impares:", recuentos.contadornumeros);
console.log("Calculadora de Factorial:", recuentos.calculadorafactorial);
console.log("Validación de Contraseña:", recuentos.validacioncontrasena);
console.log("Generador de Tablas de Multiplicar:", recuentos.tablasmultiplicar);
console.log("Adivinar el Número:", recuentos.adivinanumero);
console.log("Suma de Números Primos:", recuentos.sumanumerosprimos);
console.log("Secuencia de Fibonacci:", recuentos.secuenciafibonacci);
console.log("Convertidor de Temperatura:", recuentos.convertidortemperatura);
console.log("Calculadora de Potencia:", recuentos.calculadorapotencia);
console.log("Juego de Piedra, Papel o Tijeras:", recuentos.piedrapapeltijeras);
