import React, { useState, useEffect } from 'react';
import { getAllReports } from '../services/reportService';
import './AdminDashboard.css';

function AdminDashboard() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const response = await getAllReports();
            setReports(response.data);
        } catch (error) {
            console.error("Error fetching reports:", error);
        }
    };

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>
            <table className="report-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer ID</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Report Date</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.customerId}</td>
                            <td>{report.location}</td>
                            <td>{report.description}</td>
                            <td>{report.status}</td>
                            <td>{new Date(report.reportDate).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;
