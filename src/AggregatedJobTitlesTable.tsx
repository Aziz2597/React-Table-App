import React from "react";
import { JobData } from "./types";

interface AggregatedJobTitlesTableProps {
  year: number;
  data: JobData[];
}

const AggregatedJobTitlesTable: React.FC<AggregatedJobTitlesTableProps> = ({
  year,
  data,
}) => {
  const filteredData = data.filter((item) => item.work_year === year);

  const aggregatedJobTitles: { [key: string]: number } = {};
  filteredData.forEach((item) => {
    if (aggregatedJobTitles[item.job_title]) {
      aggregatedJobTitles[item.job_title]++;
    } else {
      aggregatedJobTitles[item.job_title] = 1;
    }
  });

  return (
    <div>
      <h2>Aggregated Job Titles for {year}</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(aggregatedJobTitles).map((title, index) => (
            <tr key={index}>
              <td>{title}</td>
              <td>{aggregatedJobTitles[title]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AggregatedJobTitlesTable;
