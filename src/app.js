let data;
// fetches data from api
var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

let update = d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('rect')
  .data(scores, function (d) {
    return d ? d.name : this.innerText;
  })
  .enter()
    .append('rect')
    .attr('y', (d, i) => i * 33)
    .style('width', d => d.score)
    .text(function (d) {
      return d.name;
    })
    .attr('class', 'bar')
