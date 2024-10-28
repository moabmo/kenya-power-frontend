import React from 'react';

function ReportList({ reports }) {
    return (
        <div>
            <h3>Your Reports</h3>
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.location}</td>
                            <td>{report.description}</td>
                            <td>{report.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReportList;
