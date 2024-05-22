import React, { useState, useEffect } from "react";
import { JobData } from "./types";
import "./styles.css";

interface MainTableProps {
    data: JobData[];
    onRowClick: (year: number) => void;
}

const MainTable: React.FC<MainTableProps> = ({ data, onRowClick }) => {
    const [sortedData, setSortedData] = useState<JobData[]>([]);
    const [sortOrder, setSortOrder] = useState<{
        column: string;
        ascending: boolean;
    }>({
        column: "",
        ascending: true,
    });

    useEffect(() => {
        setSortedData(data);
    }, [data]);

    const handleSort = (column: string) => {
        const newAscending =
            sortOrder.column === column ? !sortOrder.ascending : true;
        const newData = [...sortedData].sort((a, b) => {
            if (column === "Year") {
                return (a.work_year - b.work_year) * (newAscending ? 1 : -1);
            } else if (column === "TotalJobs") {
                return (a.salary - b.salary) * (newAscending ? 1 : -1);
            } else if (column === "AverageSalaryUSD") {
                return (a.salary_in_usd - b.salary_in_usd) * (newAscending ? 1 : -1);
            }
            return 0;
        });
        setSortedData(newData);
        setSortOrder({ column, ascending: newAscending });
    };

    return (
        <div>
            <h2>Main Table</h2>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort("Year")}>
                            <button className="header-button">Year</button>
                        </th>
                        <th onClick={() => handleSort("TotalJobs")}>
                            <button className="header-button">Number of Jobs</button>
                        </th>
                        <th onClick={() => handleSort("AverageSalaryUSD")}>
                            <button className="header-button">Average Salary (USD)</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={index} onClick={() => onRowClick(item.work_year)}>
                            <td>{item.work_year}</td>
                            <td>{item.salary}</td>
                            <td>{item.salary_in_usd}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MainTable;