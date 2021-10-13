import { Bar } from "react-chartjs-2";
import './BarChart.css';

function BarChart() {
  return (
    <div className="BarChart">
      <div style={{ maxWidth: "200px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["20", "30", "80", "40", "20"],
            datasets: [
              {
                // Label for bars
                label: null,
                // Data or value of your each variable
                data: [20,30,80,40,20],
                // Color of each bar
                backgroundColor: ["#EFFCEF", "#C4EEC8", "#EFFCEF", "#C4EEC8","#EFFCEF"],
                // Border color of each bar
                borderColor: ["#EFFCEF", "#C4EEC8", "#EFFCEF", "#C4EEC8","#EFFCEF"],
                borderWidth: 0.5,
                borderRadius: 5
              },
            ],
          }}
          // Height of graph
          height={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],

            },
            plugins:{
                legend:{
                    display: false
                }
            }
          }}
        />
      </div>
    </div>
  );
}
  
export default BarChart;