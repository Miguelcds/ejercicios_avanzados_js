// Ejercicio 5


function rollDice(numFaces) {

    if (numFaces < 1) {
      return "El número de caras debe ser al menos 1";
  }
  
  const result = Math.floor(Math.random() * numFaces) + 1;
  
  console.log(result);
  
  }
  
  rollDice(4)
  