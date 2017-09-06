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