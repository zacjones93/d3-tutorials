var quantizeScale = d3.scaleQuantize() 
// breaks range into different equal 'categories'
  .domain([0, 100])
  .range(["red", "white", "green"])


  console.log(quantizeScale(22));
  console.log(quantizeScale(50));
  console.log(quantizeScale(88));
  console.log(quantizeScale(90));

  console.log(quantizeScale.invertExtent('white'))

  // for mapping input data to specific set of output values