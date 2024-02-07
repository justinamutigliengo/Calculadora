// creamos un listener que escucha cuando se carga completamente el html
// creamos 2 constantes: para buscar los botones y el display

window.addEventListener("load", () => {
  // para buscar el display creamos una constante, como es uno solo alcanza con usar querySelector que lo que
  // va a hacer es buscar de la clase que le pasamos el primer elemento que encuentre y lo va a guardar
  const display = document.querySelector(".calculator-display");
  // para los botones, como necesitamos buscar varios y guardarlos en la constante
  const keypadButtons = document.getElementsByClassName("keypad-button");

  // necesitamos darle funcionalidad, para eso vamos a ir iterando sobre todos los botones y le vamos a asignar
  // a cada uno un listener que este escuchando si el usuario hace click sobre cada boton.
  // necesitamos convertir el htmlCollection a array y desp iterar sobre el array
  // va a agarrar el htmlCollection y la va a convertir en array y guardarla en la constante que acabamos de crear
  const keypadButtonsArray = Array.from(keypadButtons);

  // vamos a iterar sobre este nuevo array y por cada boton le vaya agregando el evento de click
  keypadButtonsArray.forEach((button) => {
    button.addEventListener("click", () => {
      // cuando el usuario haga click imprime el texto que tenga dentro
      // console.log(button.innerHTML);
      // necesitamos que cuando toquemos un boton la calculadora sepa que accion tomar
      // hacemos que todos los botones llamen a la funcion calculadora, le vamos a pasar el boton que se presiono
      // y el display
      calculadora(button, display);
    });
  });
});

// dependiendo el boton que se presione se va a tomar una accion predeterminada
function calculadora(button, display) {
  switch (
    button.innerHTML // pregunta por button.innerHTML asi sabemos que boton se apreto
  ) {
    case "C":
      borrar(display);
      break;

    case "=":
      calcular(display);
      break;

    default:
      actualizar(display, button); // actualizar el texto del display con el boton particular que haya apretado
      break;
  }
}

function calcular(display) {
  // preguntamos por el texto que hay en el display para saber que operacion tenemos que resolver
  // la palabra reservada eval va a tomar el string de la operacion y lo va a resolver
  // lo escribimos en el display igualandolo
  display.innerHTML = eval(display.innerHTML);
}

// tiene que borrar el 0 inicial si existe y agregarle al innerHTML del display el innerHTML del boton
// que acabamos de tocar
function actualizar(display, button) {
  if (display.innerHTML == 0) {
    display.innerHTML = "";
  }
  // va a ir poniendo cada numero que toquemos uno al lado del otro adentro del display
  display.innerHTML += button.innerHTML;
}

function borrar(display) {
  display.innerHTML = 0;
}

// window.addEventListener("load", () => {
//   const display = document.querySelector(".calculator-display");

//   const keypadButtons = document.getElementsByClassName("keypad-button");

//   const keypadButtonsArray = Array.from(keypadButtons);

//   keypadButtonsArray.forEach((button) => {
//     button.addEventListener("click", () => {
//       calculadora(button, display);
//     });
//   });
// });

// function calculadora(button, display) {
//   switch (button.innerHTML) {
//     case "C":
//       borrar(display);
//       break;

//     case "=":
//       calcular(display);
//       break;

//     default:
//       actualizar(display, button);
//       break;
//   }
// }

// function calcular(display) {
//   display.innerHTML = eval(display.innerHTML);
// }

// function actualizar(display, button) {
//   if (display.innerHTML == 0) {
//     display.innerHTML = "";
//   }

//   display.innerHTML += button.innerHTML;
// }

// function borrar(display) {
//   display.innerHTML = 0;
// }
