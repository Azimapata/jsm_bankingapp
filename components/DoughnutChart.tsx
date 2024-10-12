'use client'; // Add this line at the top

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    // Chart data
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3750], // Bank data
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'] // Chart colors
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3'] // Bank labels
    };

    return (
        <Doughnut
            data={data}
            options={{
                cutout: '60%', // Inner circle cutout size
                plugins: {
                    legend: {
                        display: false
                    }
                    // You can add plugins configurations here
                }
            }}
        />
    );
};

export default DoughnutChart;
