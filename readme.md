1. Esperando a que la página cargue:

window.addEventListener("load", () => { ... });: Esta línea dice "espera a que la página web termine de cargarse por completo, y cuando eso ocurra, ejecuta el código que está dentro de las llaves {}." 2. Encontrando los elementos:

const display = document.querySelector(".calculator-display");: Aquí se busca en la página el elemento que tiene la clase "calculator-display" (que probablemente sea la pantalla de la calculadora) y se guarda en la variable display.
const keypadButtons = document.getElementsByClassName("keypad-button");: Se buscan todos los elementos que tienen la clase "keypad-button" (que probablemente sean los botones de la calculadora) y se guardan en la variable keypadButtons.
const keypadButtonsArray = Array.from(keypadButtons);: Se convierte la colección de botones keypadButtons (que no es un array real) en un array de JavaScript, para poder trabajar con ellos más fácilmente. 3. Asignando eventos a los botones:

keypadButtonsArray.forEach((button) => { ... });: Se recorre el array de botones (keypadButtonsArray) y se ejecuta el código dentro de las llaves {} para cada botón.
button.addEventListener("click", () => { ... });: A cada botón se le asigna un evento de clic. Cuando se haga clic en un botón, se ejecutará la función anónima que está dentro de las llaves {}. 4. Función para manejar los clics en los botones:

calculadora(button, display);: Cuando se hace clic en un botón, se llama a la función calculadora (que no está definida en este fragmento de código) y se le pasan como argumentos el botón pulsado (button) y la pantalla de la calculadora (display). Esta función será la encargada de decidir qué hacer según el botón que se haya pulsado.
En resumen, este código:

Espera a que la página cargue.
Encuentra los elementos de la calculadora (pantalla y botones).
Asigna eventos de clic a los botones.
Cuando se hace clic en un botón, llama a una función para procesar la acción.
La función calculadora (que no está incluida en este fragmento) será la que implemente la lógica de la calculadora, como sumar, restar, multiplicar, etc.

¡Aquí va una explicación completa del código de la calculadora!

1. Preparación al cargar la página:

window.addEventListener("load", () => { ... });: Espera a que la página cargue por completo antes de ejecutar el código dentro de las llaves.
const display = document.querySelector(".calculator-display");: Selecciona el elemento de la pantalla de la calculadora.
const keypadButtons = document.getElementsByClassName("keypad-button");: Selecciona los botones de la calculadora.
const keypadButtonsArray = Array.from(keypadButtons);: Convierte los botones a un array para facilitar su manejo. 2. Asignación de eventos a los botones:

keypadButtonsArray.forEach((button) => { ... });: Recorre cada botón del array.
button.addEventListener("click", () => { ... });: Asigna un evento de clic a cada botón. Cuando se hace clic en un botón, llama a la función calculadora. 3. Función principal de la calculadora:

function calculadora(button, display) { ... }: Decide qué hacer según el botón pulsado.
switch (button.innerHTML) { ... }: Analiza el texto del botón pulsado.
Caso "C": Llama a la función borrar para limpiar la pantalla.
Caso "=": Llama a la función calcular para resolver la operación.
Caso por defecto: Llama a la función actualizar para agregar el número o símbolo a la pantalla. 4. Funciones auxiliares:

function calcular(display) { ... }:
Usa eval para evaluar la expresión matemática en la pantalla y muestra el resultado.
function actualizar(display, button) { ... }:
Agrega el texto del botón a la pantalla, reemplazando el 0 inicial si es necesario.
function borrar(display) { ... }:
Limpia la pantalla poniendo un 0.
En resumen:

El código espera a que la página cargue.
Encuentra los elementos de la calculadora (pantalla y botones).
Asigna eventos de clic a los botones.
Cuando se hace clic en un botón, llama a la función calculadora.
La función calculadora decide qué hacer según el botón pulsado.
Las funciones calcular, actualizar y borrar realizan las acciones específicas de la calculadora.

Una HTMLCollection es una colección de elementos HTML en una página web, representada como un objeto en JavaScript.

Características clave:

Se obtiene a través de métodos como getElementsByTagName(), getElementsByClassName(), querySelectorAll(), etc.
Ordenada: Los elementos se mantienen en el orden en que aparecen en el documento HTML.
Dinámica: Se actualiza automáticamente si la estructura del HTML cambia.
No es un array: No tiene todos los métodos y propiedades de los arrays de JavaScript.
Propiedades:

length: Indica el número de elementos en la colección.
item(): Permite acceder a un elemento por su índice (empezando desde 0).
namedItem(): Permite acceder a un elemento por su nombre (atributo name o id).
Ejemplos de obtención de HTMLCollections:

JavaScript
// Obtener todos los elementos <p> de la página:
const parrafos = document.getElementsByTagName("p");

// Obtener todos los elementos con la clase "boton":
const botones = document.getElementsByClassName("boton");

// Obtener todos los elementos que coincidan con un selector CSS:
const elementosSeleccionados = document.querySelectorAll(".clase1, .clase2");
Usa el código con precaución. Más información
Usos comunes:

Recorrer y manipular elementos HTML:
Cambiar estilos (colores, tamaños, etc.).
Modificar contenido (texto, imágenes, etc.).
Agregar o eliminar elementos.
Asignar eventos a elementos:
Clicks, hovers, cambios de valor, etc.
Filtrar elementos:
Obtener un subconjunto de elementos que cumplan ciertas condiciones.
Recuerda:

HTMLCollection es un tipo de objeto específico del DOM (Document Object Model).
Si necesitas más flexibilidad y métodos de manipulación, a menudo es conveniente convertir la HTMLCollection a un array de JavaScript usando Array.from().
