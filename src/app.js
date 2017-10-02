var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

var bar = d3.select('.chart')
  .append('svg')
    .attr('width', 225)
    .attr('height', 300)
  .selectAll('g')
  .data(scores)
  .enter()
    .append('g')
    .attr('transform', (d, i) => 'translate(0, ' + i * 33 + ')');

bar.append('rect')
    .style('width', d => d.score)
    .attr('class', 'bar')
    .on('mouseover', function (d, i, elements) {
      d3.select(this)
        .style('transform', 'scaleX(2)')
      d3.selectAll(elements)
        .filter(':not(:hover)')
        .style('fill-opacity', 0.5)
    })
    .on('mouseout', function (d, i, elements) {
      d3.select(this)
        .style('transform', 'scaleX(1)')
      d3.selectAll(elements)
      .style('fill-opacity', 1)
    });

bar.append('text')
  .attr('y', 20)
  .text(function (d) {
    return d.name;
  });
