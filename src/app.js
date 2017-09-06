// d3.json('data/data.json', function (data){
//  var min =  d3.min(data, function (d) {
//     return d.age
//   })
//   console.log(min)

//   var max =  d3.max(data, function (d) {
//     return d.age
//   })
//   console.log(max)

//   // captures the min and max in an array
//   var extent =  d3.extent(data, function (d) {
//     return d.age
//   })
//   console.log(extent)

//   var scale = d3.scaleLinear()
//     .domain(extent)
//     .range([0,600])
//     console.log(scale(37))

//   var ages = d3.set(data, function (d) {
//     return d.age;
//   })
//   console.log(ages.values())

// })

d3.json('https://swapi.co/api/starships', function (data) {
  //console.log(data.results)
  var costExtent =  d3.extent(data.results, function (d) {
    let cost = parseInt(d.cost_in_credits, 10)
    if (typeof cose !== NaN) {
      return cost
    } else return
      
  })
  console.log(costExtent)
  let scale = d3.scaleQuantize()
    .domain(costExtent)
    .range(["small", "medium", "large", "fucking huge"])

  let scaledCost = [];
  data.results.forEach(function(spaceCraft){
    scaledCost.push(scale(spaceCraft.cost_in_credits))
  })



})

// d3.csv('data/data.csv', function (data){
//   console.log(data);
// })

// d3.tsv('data/data.tsv', function (data){
//   console.log(data);
// })