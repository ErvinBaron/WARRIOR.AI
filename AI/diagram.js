google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawAreaChart);
google.charts.load("current", { packages: ["timeline"] });
google.charts.setOnLoadCallback(drawChart);
function drawPieChart() {
  var data = google.visualization.arrayToDataTable([
    ["running", "Hours per Day"],
    ["Running", 11],
    ["Hiit", 2],
    ["Core training", 2],
    ["Rucking", 2],
    ["Weight lifting", 7],
  ]);

  // Define pie chart options
  var options = {
    title: "Daily Activitie ratios",
    colors: ["#3D5A26", "#6B8E23", "#808000", "#ffeb3b", "yellowgreen"], // Custom colors
    backgroundColor: "transparent",
    animation: {
      startup: true,
      duration: 1000,
      easing: "out",
    },
    legend: { position: "top" },
    pieStartAngle: "0",
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
    ["Weeks", "averge malshab", "using warrior.ai"],
    ["w1", 7, 6],
    ["w2", 9, 9],
    ["w3", 8, 12.5],
    ["w4", 7, 16],
    ["w5", 8, 19],
    ["w6", 9, 22],
    ["w7", 10, 26],
    ["w8", 7, 28],
  ]);

  // Define area chart options
  var options = {
    title: "Success rate",
    legend: { position: "top" },
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    backgroundColor: "transparent",
    position: "bottom",
    textStyle: { color: "blue", fontSize: 16 },
    animation: {
      startup: true, // Enable animation on startup
      duration: 1000, // Animation duration in milliseconds
      easing: "inAndOut", // Easing function ('linear', 'in', 'out', 'inAndOut')
    },
  };

  // Render the area chart
  var chart = new google.visualization.AreaChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Observes within the viewport
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  // Callback to run when elements intersect the viewport
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const chartId = entry.target.id;

        // Trigger the appropriate chart drawing function
        if (chartId === "piechart") drawPieChart();
        if (chartId === "chart_div") drawAreaChart();

        // Stop observing after the chart is drawn
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Start observing the chart containers
  observer.observe(document.getElementById("piechart"));
  observer.observe(document.getElementById("chart_div"));
});
// function drawChart() {
//   // Get the container where the chart will be rendered
//   var container = document.getElementById("timeline");

//   // Create a new Timeline chart instance
//   var chart = new google.visualization.Timeline(container);

//   // Define the DataTable structure and add data
//   var dataTable = new google.visualization.DataTable();
//   dataTable.addColumn({ type: "string", id: "Day" });
//   dataTable.addColumn({ type: "string", id: "Name" });
//   dataTable.addColumn({ type: "date", id: "Start" });
//   dataTable.addColumn({ type: "date", id: "End" });

//   dataTable.addRows([
//     [
//       "Sunday",
//       "runnng",
//       new Date(0, 0, 0, 14, 0, 0),
//       new Date(0, 0, 0, 16, 0, 0),
//     ],
//     [
//       "Monday",
//       "HIIT",
//       new Date(0, 0, 0, 14, 30, 0),
//       new Date(0, 0, 0, 16, 30, 0),
//     ],
//     [
//       "Tuesday",
//       "weight liftting",
//       new Date(0, 0, 0, 16, 30, 0),
//       new Date(0, 0, 0, 19, 30, 0),
//     ],
//     [
//       "Wendsday",
//       "runnng",
//       new Date(0, 0, 0, 16, 30, 0),
//       new Date(0, 0, 0, 18, 0, 0),
//     ],
//     [
//       "Thursday",
//       "aerobics",
//       new Date(0, 0, 0, 14, 30, 0),
//       new Date(0, 0, 0, 16, 30, 0),
//     ],
//     [
//       "Firday",
//       "core",
//       new Date(0, 0, 0, 16, 30, 0),
//       new Date(0, 0, 0, 18, 30, 0),
//     ],
//   ]);

//   // Render the chart with the data
//   chart.draw(dataTable);
// }
