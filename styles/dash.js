document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("gpaChart").getContext("2d");
  
    const gpaChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "2011 Q1",
          "2011 Q2",
          "2011 Q3",
          "2011 Q4",
          "2012 Q1",
          "2012 Q2",
          "2012 Q3",
          "2012 Q4",
          "2013 Q1",
          "2013 Q2"
        ],
        datasets: [
          {
            label: "GPA",
            data: [5000, 7000, 6000, 9000, 9500, 8500, 8000, 14000, 12000, 11000],
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "#fff",
            borderWidth: 2,
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            ticks: {
              color: "#fff"
            }
          },
          y: {
            ticks: {
              color: "#fff"
            }
          }
        }
      }
    });
  });
  