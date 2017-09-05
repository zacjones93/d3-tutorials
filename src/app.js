var linearScale = d3.scaleLinear()
  .domain([0, 100]) // range of possible value of input
  .range([0, 600]) // normalize output so they fall somewhere 0-1
  .clamp(true) // clampped max/min output of scale

console.log(linearScale(0))
console.log(linearScale(50))
console.log(linearScale(105))

console.log(linearScale.invert(300)) // range -> domain