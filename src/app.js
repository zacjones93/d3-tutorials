var scores = [
  { name: 'Alice', score: 96 },
  { name: 'Billy', score: 83 },
  { name: 'Cindy', score: 91 },
  { name: 'David', score: 96 },
  { name: 'Emily', score: 88 }
];

let update = d3.select('.chart')
  .selectAll('div')
  .data(scores, function (d) {
    return d ? d.name : this.innerText;
  })
  .style('color', 'blue')

  let enter = update.enter()
    .append('div')
    .text(function (d) {
      return d.name;
    })
    .style('color', 'green');

  update.exit().remove();

  update.merge(enter)
    .style('width', d => d.score + 'px')
    .style('height', '50px')
    .style('background', 'lightgreen')
    .style('border', '1px solid black')
// ============================================

let data;
// fetches data from api
d3.json('https://swapi.co/api/people', (err, json) => {
  if (err) return console.warn(err);
// selects divs in the .chart-2 class
  let update = d3.select(".chart-2")
    .selectAll('div')
    .data(json.results, (d) => {
      return d ? d.name : this.innerText;
    })
// adds divs based on the amount of items in fetched data    
  let enter = update.enter()
  .append('div')
  .text((d) => {
    return d.name
  })
  .style('color', 'black')
// styles divs based on data attributes
  update.merge(enter)
    .style('width', d => d.mass + 'px')
    .style('height', d => '50px')
    .style('background', d => {
      if(d.gender === 'male'){
        return 'lightblue'
      } else if(d.gender === 'female') {
        return 'pink'
      } else {
        return 'gray'
      }
       
    })
    .style('border', '1px solid black')
 })