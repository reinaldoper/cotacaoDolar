import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Pie } from "react-chartjs-2";
import PropTypes from 'prop-types';

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

function PieChart({ chartData }) {
  return <Pie data={chartData} />;
}

PieChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default PieChart;