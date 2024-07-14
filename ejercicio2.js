// Ejercicio 2

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
  
  let totalVolumen = 0;
  
  let soundCount = 0;
  
  
  
  for (const items of users) {
    for (const item in items.favoritesSounds) {
      totalVolumen += items.favoritesSounds[item].volume;
      soundCount++;
        
      }
    }
  
  let averageVolume = totalVolumen/soundCount;
  
  console.log(totalVolumen);
  
  console.log("Media del volumen de todos los sonidos favoritos:", averageVolume);