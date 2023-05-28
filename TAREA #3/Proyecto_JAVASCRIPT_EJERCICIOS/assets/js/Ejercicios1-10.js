console.log(document);
/** Desarrollo Ejercicio #1- Verificar Edad 
 * ENUNCIADO:
 * Crear una función que en base a la edad que ingreso el usuario devolver un mensaje 
 * si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/
function verificarEdad() {
    var edad = parseInt(document.getElementById('edad').value);
    var resultado = (edad >= 18) ? "Eres mayor de edad." : "No eres mayor de edad.";  
    document.getElementById('resultado').innerHTML = resultado;
}

/** Desarrollo Ejercicio #2- Calcular Nota Final 
 * ENUNCIADO:
 * Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: 
 * •	Examen =20%
 * •	tareas = 40%
 * •	asistencia = 10%
*  •	investigación = 30%
*  Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/
function calcularNotaFinal() {
    var nombre = document.getElementById('nombre').value;
    var carnet = document.getElementById('carnet').value;
    var notaExamen = parseFloat(document.getElementById('examen').value);
    var notaTareas = parseFloat(document.getElementById('tareas').value);
    var notaAsistencia = parseFloat(document.getElementById('asistencia').value);
    var notaInvestigacion = parseFloat(document.getElementById('investigacion').value);
  
    var notaFinal = (notaExamen * 0.2) + (notaTareas * 0.4) + (notaAsistencia * 0.1) + (notaInvestigacion * 0.3);
  
    var resultado = "Alumno: " + nombre + "<br>";
        resultado += "Carnet No.: " + carnet + "<br>";
        resultado += "Nota Final: " + notaFinal.toFixed(2);
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  

/** Desarrollo Ejercicio #3- Calcular Aumento Salario de Trabajador 
 * ENUNCIADO:
 * CATEGORIA	AUMENTO
 *     A          15%
 *     B	      30%
 *     C	      10%
 *     D	      20%

 * Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
 * Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. 
 * Deberá demostrar en html los datos del empleado y el aumento salarial.
*/
function calcularAumentoSalarial() {
    var nombre = document.getElementById('nombre').value;
    var salario = parseFloat(document.getElementById('salario').value);
    var categoria = document.getElementById('categoria').value;
  
    var porcentajeAumento = 0;
    switch (categoria) {
      case 'A':
        porcentajeAumento = 0.15;
        break;
      case 'B':
        porcentajeAumento = 0.3;
        break;
      case 'C':
        porcentajeAumento = 0.1;
        break;
      case 'D':
        porcentajeAumento = 0.2;
        break;
    }
  
    var aumentoSalarial = salario * porcentajeAumento;
    var salarioTotal = salario + aumentoSalarial;
  
    var resultado = "Nombre: " + nombre + "<br>";
    resultado += "Salario: " + salario.toFixed(2) + "<br>";
    resultado += "Aumento Salarial: " + aumentoSalarial.toFixed(2) + "<br>";
    resultado += "Salario Total: " + salarioTotal.toFixed(2);
  
    document.getElementById('resultado').innerHTML = resultado;
  }

/** Desarrollo Ejercicio #4- Verificar Número Mayor
 * ENUNCIADO:
 * Crear una función que en base a 2 números enteros que ingrese el usuario, 
 * calcular cual número es el mayor y devolverlo. 
*/
function compararNumeros() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);  
    var resultado = "";
  
    if (numero1 > numero2) {
      resultado = "El número mayor es: " + numero1;
    } else if (numero2 > numero1) {
      resultado = "El número mayor es: " + numero2;
    } else {
      resultado = "Ambos números son iguales.";
    }
    document.getElementById('resultado').innerHTML = resultado;
}
  
    
/** Desarrollo Ejercicio #5- Calcular Descuento Auto
 * ENUNCIADO:
 * Realizar una función para una tienda de coches en donde se deberá calcular: 
 * Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. 
 * Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y 
 * si es un FORD ESCAPE el descuento será del 20%. 
 * Mostrar en html el coche seleccionado y el descuento que se 
 * aplicara en base a lo que selecciono el usuario.
*/
function calcularDescoche() {
    var cocheSeleccionado = document.getElementById('coche').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var descuento = 0;
  
    switch (cocheSeleccionado) {
      case 'FORD FIESTA':
        descuento = 0.05;
        break;
      case 'FORD FOCUS':
        descuento = 0.1;
        break;
      case 'FORD ESCAPE':
        descuento = 0.2;
        break;
    }
  
    var descuentoAplicado = precio * descuento;
    var precioFinal = precio - descuentoAplicado;
  
    var resultado = "Coche seleccionado: " + cocheSeleccionado.toUpperCase() + "<br>";
    resultado += "Descuento aplicado: " + (descuento * 100) + "%<br>";
    resultado += "Monto de Descuento aplicado: $" + descuentoAplicado.toFixed(2) + "<br>";
    resultado += "Nuevo precio del coche: $" + precioFinal.toFixed(2);
  
    document.getElementById('resultado').innerHTML = resultado;
    console.log('resultado');
  }
  
  

/** Desarrollo Ejercicio #6- Calcular Descuento Viajes
 * ENUNCIADO:
 * Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente: 
 * Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, 
 * si el destino es Panchimalco el descuento será del 10% 
 * y si el destino es Puerto el Triunfo el descuento será del 15%.

*/
function calcularDescuento() {
    var precio = parseFloat(document.getElementById('precio').value);
    var origen = 'LA PALMA';
    var destino = document.getElementById('destino').value.toLowerCase();
    var descuento = 0;
  
    if (destino === 'costa del sol') {
      descuento = 0.05;
    } else if (destino === 'panchimalco') {
      descuento = 0.1;
    } else if (destino === 'puerto el triunfo') {
      descuento = 0.15;
    }
  
    var descuentoAplicado = precio * descuento;
    var nuevoMonto = precio - descuentoAplicado;
  
    var resultado = "Origen: " + origen.toUpperCase() + "<br>";
    resultado += "Destino: " + destino.toUpperCase() + "<br>";
    resultado += "Descuento aplicado: " + (descuento * 100) + "%<br>";
    resultado += "Nuevo monto: $" + nuevoMonto.toFixed(2);
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  

/** Desarrollo Ejercicio #7- Calculo de Nota Media
 * ENUNCIADO:
 * Realizar programa para una web, en el cual el usuario introduce 2 notas y su valor ponderado 
 * (como cuando un examen vale un 30% y otro examen el 70%). 
 * Pulsando el botón “Calcula”, la web muestra como resultado la nota media ponderada.

*/
function calcularNotaMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var ponderado1 = parseFloat(document.getElementById('ponderado1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var ponderado2 = parseFloat(document.getElementById('ponderado2').value);
  
    var notaMediaPonderada = (nota1 * ponderado1 + nota2 * ponderado2) / (ponderado1 + ponderado2);
  
    var resultado = "Nota Media Ponderada: " + notaMediaPonderada.toFixed(2);
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  

/** Desarrollo Ejercicio #8- Calculo de Temperatura Fahrenheit
 * ENUNCIADO:
 * Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, 
 * una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
•	Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
•	Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
•	Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
•	Si no está entre ningún caso anterior la frase “Temperatura desconocida”
*/
function convertirTemperatura() {
    var temperaturaCelsius = parseFloat(document.getElementById('temperatura').value);
    var temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
  
    var resultado = "Temperatura en Fahrenheit: " + temperaturaFahrenheit.toFixed(2) + "<br>";
  
    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit < 32) {
      resultado += "Temperatura baja";
    } else if (temperaturaFahrenheit >= 32 && temperaturaFahrenheit < 68) {
      resultado += "Temperatura adecuada";
    } else if (temperaturaFahrenheit >= 68 && temperaturaFahrenheit < 96) {
      resultado += "Temperatura alta";
    } else {
      resultado += "Temperatura desconocida";
    }
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  

/** Desarrollo Ejercicio #9- Verificando Números
 * ENUNCIADO:
 * Se realiza la carga de 10 valores enteros por teclado. Se desea conocer: 
•	La cantidad de valores negativos ingresados.
•	La cantidad de valores positivos ingresados.
•	La cantidad de múltiplos de 15.
•	El valor acumulado de los números ingresados que son pares.

*/

function analizarValores() {
    var valores = document.getElementById('valores').value;
    var valoresArray = valores.split(",").map(Number);
  
    var cantidadNegativos = 0;
    var cantidadPositivos = 0;
    var cantidadMultiplos15 = 0;
    var acumuladoPares = 0;
  
    for (var i = 0; i < valoresArray.length; i++) {
      var valor = valoresArray[i];
  
      if (valor < 0) {
        cantidadNegativos++;
      } else if (valor > 0) {
        cantidadPositivos++;
      }
  
      if (valor % 15 === 0) {
        cantidadMultiplos15++;
      }
  
      if (valor % 2 === 0) {
        acumuladoPares += valor;
      }
    }
  
    var resultado = "Cantidad de valores negativos: " + cantidadNegativos + "<br>";
    resultado += "Cantidad de valores positivos: " + cantidadPositivos + "<br>";
    resultado += "Cantidad de múltiplos de 15: " + cantidadMultiplos15 + "<br>";
    resultado += "Valor acumulado de los números pares: " + acumuladoPares;
  
    document.getElementById('resultado').innerHTML = resultado;
  }
  

/** Desarrollo Ejercicio #10- Verificando Edades de Estudiantes
 * ENUNCIADO:
 * Se cuenta con la siguiente información: 
 * •	Las edades de 5 estudiantes del turno mañana. 
 * •	Las edades de 6 estudiantes del turno tarde. 
 * •	Las edades de 11 estudiantes del turno noche. 
 * 
 * Nota: Las edades de cada estudiante se deberán ingresar por la web. 
 * Lo que queremos devolver:
 * •	Obtener el promedio de las edades de cada turno (tres promedios).
 * •	Imprimir dichos promedios (promedio de cada turno).
 * •	Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor
*/

function calcularPromedios() {
    var manana1 = parseInt(document.getElementById('manana1').value);
    var manana2 = parseInt(document.getElementById('manana2').value);
    var manana3 = parseInt(document.getElementById('manana3').value);
    var manana4 = parseInt(document.getElementById('manana4').value);
    var manana5 = parseInt(document.getElementById('manana5').value);
  
    var tarde1 = parseInt(document.getElementById('tarde1').value);
    var tarde2 = parseInt(document.getElementById('tarde2').value);
    var tarde3 = parseInt(document.getElementById('tarde3').value);
    var tarde4 = parseInt(document.getElementById('tarde4').value);
    var tarde5 = parseInt(document.getElementById('tarde5').value);
    var tarde6 = parseInt(document.getElementById('tarde6').value);
  
    var noche1 = parseInt(document.getElementById('noche1').value);
    var noche2 = parseInt(document.getElementById('noche2').value);
    var noche3 = parseInt(document.getElementById('noche3').value);
    var noche4 = parseInt(document.getElementById('noche4').value);
    var noche5 = parseInt(document.getElementById('noche5').value);
    var noche6 = parseInt(document.getElementById('noche6').value);
    var noche7 = parseInt(document.getElementById('noche7').value);
    var noche8 = parseInt(document.getElementById('noche8').value);
    var noche9 = parseInt(document.getElementById('noche9').value);
    var noche10 = parseInt(document.getElementById('noche10').value);
    var noche11 = parseInt(document.getElementById('noche11').value);
  
    var promedioManana = (manana1 + manana2 + manana3 + manana4 + manana5) / 5;
    var promedioTarde = (tarde1 + tarde2 + tarde3 + tarde4 + tarde5 + tarde6) / 6;
    var promedioNoche = (noche1 + noche2 + noche3 + noche4 + noche5 + noche6 + noche7 + noche8 + noche9 + noche10 + noche11) / 11;
  
    var promedios = "Promedio de edades - Turno Mañana: " + promedioManana.toFixed(0) + "<br>";
    promedios += "Promedio de edades - Turno Tarde: " + promedioTarde.toFixed(0) + "<br>";
    promedios += "Promedio de edades - Turno Noche: " + promedioNoche.toFixed(0);
  
    document.getElementById('promedios').innerHTML = promedios;
  
    var mayorPromedio = "";
    if (promedioManana > promedioTarde && promedioManana > promedioNoche) {
      mayorPromedio = "El turno Mañana tiene el mayor promedio de edades.";
    } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
      mayorPromedio = "El turno Tarde tiene el mayor promedio de edades.";
    } else if (promedioNoche > promedioManana && promedioNoche > promedioTarde) {
      mayorPromedio = "El turno Noche tiene el mayor promedio de edades.";
    } else {
      mayorPromedio = "No hay un turno con un mayor promedio de edades.";
    }
  
    document.getElementById('mayorPromedio').innerHTML = mayorPromedio;
  }
  