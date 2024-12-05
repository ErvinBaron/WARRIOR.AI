google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawAreaChart);

function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ]);

  // Define pie chart options
  var options = {
    title: "My Daily Activities",
    colors: ["#f44336", "#2196f3", "#4caf50", "#ffeb3b", "#9c27b0"], // Custom colors
    backgroundColor: "transparent",
  };

  // Render the pie chart
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}

// Function to draw the area chart
function drawAreaChart() {
  // Prepare the data for the area chart
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ]);

  // Define area chart options
  var options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    backgroundColor: "transparent",
  };

  // Render the area chart
  var chart = new google.visualization.AreaChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
