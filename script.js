const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Time", "Improvment", "Success Chance(%)"],
    ["M1", 21, 10],
    ["M2", 35, 35],
    ["M3", 45, 70],
    ["M4", 51, 93],
  ]);
  var options = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    backgroundColor: "transparent",
    animation: {
      startup: true,
      duration: 1000,
      easing: "inAndOut",
    },
    colors: ["red", "olivedrab"],
  };
  var chart = new google.visualization.AreaChart(
    document.getElementById("chart")
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

        if (chartId === "chart") drawAreaChart();

        // Stop observing after the chart is drawn
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Start observing the chart containers

  observer.observe(document.getElementById("chart"));
});
