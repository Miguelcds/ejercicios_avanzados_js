
// Ejercicio 4.1

function findArrayIndex(array, text) {
  let position = array.indexOf(text);

  console.log(position + 1, "If count like a Human");
  console.log(position, "Like a Robot");
}


// Ejercicio 4.2


function removeItem(array, text) {
  // declaro la variable find que coja la funcion anterior , indicando que el array y el text seran lo mismo  y esta me devolvera ya un numero con la posicion que quiera buscar
  let find = findArrayIndex(array, text);
  // consulto si el resultado es diferente a -1, es decir si existe, y en casa afirmativo recojo el valor recibido de find , realizo el splice de x a solo 1 posicion y devuelvo el array sin ese parametro
  if (find !== -1) {
    array.splice(find, 1);
  }

  console.log(array);
}


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

findArrayIndex(mainCharacters, "Leia");

// removeItem(mainCharacters, "Chewbacca");
