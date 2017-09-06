var ordinalScale = d3.scaleOrdinal() 
// discreet non-numeric values that we want to map to specific output values
  .domain(["poor", "good", "great"])
  .range(["red", "white", "green"])


  console.log(ordinalScale("good"));
  console.log(ordinalScale("great"));
  console.log(ordinalScale("poor"));
  

