var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0 ,1), new Date()])
  .range([0, 100]);

  // takes an input range of January 1, 2016 - now and outputs it on a linear scale from 0 - 100

console.log(timeScale(new Date(2016, 4, 15)));
console.log(timeScale(new Date(2016, 10, 3)));
console.log(timeScale(new Date(2017, 4, 15)));

console.log(timeScale.invert(50))