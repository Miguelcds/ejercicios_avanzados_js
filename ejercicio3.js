//Ejercicio 3

const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Santiago",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Laura",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
  
  
  const result = {};
  
  for (const items of users) {
    for (const item in items.favoritesSounds) {
  
      // Esta condición verifica si el item ya existe como una clave en el objeto result.
      // Si es verdadero (es decir, si el item ya existe en result), incrementa el valor asociado a esa clave en 1.
  //   Si es falso (es decir, si el item no existe en result), agrega el item como una nueva clave en el objeto result y le asigna un valor de 1.
      if (result[item]) {
        result[item] += 1;
      } else {
        result[item] = 1;
      }
    }
  }
  
  console.log(result);