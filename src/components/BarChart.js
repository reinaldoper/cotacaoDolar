import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import PropTypes from 'prop-types';
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)


function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

BarChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default BarChart;