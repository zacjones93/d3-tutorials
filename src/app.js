// modify a DOM element in d3
// var secondLink = d3.selectAll('a:nth-child(2)')
//   .attr('href', 'http://google.com')
//   .classed('red', true)
//   .html('Inventory <b>SALE</b>')

d3.select('.title')
  .append('div')
    .style('color', 'red')
    .html('Inventory <b>SALE</b>')
  .append('button')
    .style('display', 'block')
    .text('submit');
    


// d3.json('https://swapi.co/api/people', function (data) {
//   //console.log(data.results)
//   var costExtent =  d3.extent(data.results, function (d) {
//     let cost = parseInt(d.cost_in_credits, 10)
//     if (typeof cose !== NaN) {
//       return cost
//     } else return
      
//   })
//   console.log(costExtent)
//   let scale = d3.scaleQuantize()
//     .domain(costExtent)
//     .range(["small", "medium", "large", "fucking huge"])

//   let scaledCost = [];
//   data.results.forEach(function(spaceCraft){
//     scaledCost.push(scale(spaceCraft.cost_in_credits))
//   })

// })