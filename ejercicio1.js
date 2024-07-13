// Ejercicio 1


const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];
  
  let allCategories = [];
  
  
  for (const items of movies) {
  
   for (const item of items.categories) {
  
    if(!allCategories.includes(item)){
      allCategories.push(item)
    }
  
   }
  
  }
  
  console.log(allCategories);