// from data.js
var tableData = data;

// YOUR CODE HERE!

//originally created table, put below to see if the filter in nested function works
var tbody = d3.select("tbody")

console.log(tableData)

tableData.forEach((cityData) => {   
    console.log(cityData)
    var row = tbody.append('tr');
    Object.entries(cityData).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value)
    });
});
//end here


// Select the submit Button
var submit = d3.select("#submit")

submit.on("click", function () {
    // Prevent the page from refreshing
    d3.select("tbody").html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    //console.log(inputElement)
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // console.log(inputValue)
    // console.log(tableData);

    var filteredData = tableData.filter(date => date.datetime === inputValue)

    var tbody2 = d3.select("tbody")
    console.log(filteredData)
    
    filteredData.forEach((updatedCityData) => {
        var row = tbody2.append('tr');
        Object.entries(updatedCityData).forEach(([Key, value]) =>{
            var cell = row.append('td');
            cell.text(value)
        });
    });
});


