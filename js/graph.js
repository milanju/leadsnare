Chart.defaults.global.scaleFontSize = 10;
Chart.defaults.global.scaleFontColor = "#b1c1ca";
Chart.defaults.global.scaleFontFamily = "'Open Sans', 'sans-serif'";
Chart.defaults.global.tooltipFontFamily = "'Open Sans', 'sans-serif'";
Chart.defaults.global.tooltipTitleFontStyle = "normal";

var daysData = {
  labels: ["SUN","MON","TUES","WED","THURS","FRI","SAT"],
  datasets: [
    {
      label: "Recent Link",
      strokeColor: "#e1e1e1",
      pointColor: "#1abc9c",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#1abc9c",
      data: [5, 6, 4, 5, 3, 2, 1]
    },
    {
      label: "2nd Link",
      strokeColor: "#e1e1e1",
      pointColor: "#f68e56",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#f68e56",
      data: [4, 5, 3, 4, 2, 1, 0]
    }
  ]
}

window.onload = function() {
  var ctx = document.getElementById("timeGraphDays").getContext("2d");
  window.timeGraphDays = new Chart(ctx).Line(daysData, {
    responsive: true,
    scaleShowVerticalLines: false,
    bezierCurve: false,
    datasetFill: false,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].pointColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
    multiTooltipTemplate: "<%= value %>",
    pointDotRadius: 5
  });
  document.getElementById('timeGraphDaysLegend').innerHTML = window.timeGraphDays.generateLegend();
}
