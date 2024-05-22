import React, { useState } from "react";
import MainTable from "./MainTable";
import AggregatedJobTitlesTable from "./AggregatedJobTitlesTable";
import LineGraph from "./LineGraph"; 
import { JobData } from "./types";

const Dashboard: React.FC<{ data: JobData[] }> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleRowClick = (year: number) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  return (
    <div>
      <LineGraph data={data} /> 
      {selectedYear !== null && (
        <AggregatedJobTitlesTable year={selectedYear} data={data} />
      )}
      <MainTable data={data} onRowClick={handleRowClick} />
    </div>
  );
};

export default Dashboard;
