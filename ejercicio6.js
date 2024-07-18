const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  
  
  function swap(array, a , b) {
  
  let change = array[a]
  
  array[a] = array[b]
  
  array[b] = change
  
  console.log(array);
  
  }
  
  swap(fantasticFour, 0 , 2)