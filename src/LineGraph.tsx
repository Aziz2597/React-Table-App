import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { JobData, GraphData } from "./types";

interface LineGraphProps {
  data: JobData[];
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
  const graphData: GraphData[] = data.reduce((acc: GraphData[], item) => {
    const existingYearData = acc.find((d) => d.Year === item.work_year);
    if (existingYearData) {
      existingYearData.TotalJobs += 1;
      existingYearData.TotalSalary += item.salary_in_usd;
    } else {
      acc.push({
        Year: item.work_year,
        TotalJobs: 1,
        TotalSalary: item.salary_in_usd,
      });
    }
    return acc;
  }, []);

  return (
    <div>
      <h2>Line Graph</h2>
      <LineChart width={600} height={300} data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TotalJobs" stroke="#8884d8" />
        <Line type="monotone" dataKey="TotalSalary" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineGraph;