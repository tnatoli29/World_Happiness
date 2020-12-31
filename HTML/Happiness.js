
function filterHappyCountries(country) {
    return country.Overall_rank < 16;
}

var filteredCountries = data2018.filter(filterHappyCountries);

//console.log(filteredCountries);

var countries = filteredCountries.map(countries => countries.Country_or_region);

//console.log(countries);

var happiness = filteredCountries.map(countries => countries.Happiness_Score);

console.log(happiness);

// 5. Create your trace.
var trace = {
  x: countries,
  y: happiness,
  type: "bar"
};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
  title: "Top 10 Happiest Countries in 2019",
  xaxis: { title: "Country" },
  yaxis: { title: "Happiness Score"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);
