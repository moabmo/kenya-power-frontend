import React, { useState, useEffect } from 'react';
import { getReportsByCustomerId } from '../services/reportService';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import './CustomerReports.css';

function CustomerReports() {
    const customerId = "12345";  // Simulating a logged-in customer ID
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCustomerReports();
    }, []);

    const fetchCustomerReports = async () => {
        try {
            const response = await getReportsByCustomerId(customerId);
            setReports(response.data);
        } catch (error) {
            console.error("Error fetching customer reports:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="customer-reports-container">
            <Card className="user-card">
                <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar style={{ backgroundColor: '#00529b', marginRight: '1em' }}>
                        <PersonIcon />
                    </Avatar>
                    <Typography variant="h6">Logged in as Customer #12345</Typography>
                </CardContent>
            </Card>
            <Typography variant="h4" style={{ marginTop: '1em', color: '#00529b' }}>Your Reports</Typography>
            {loading ? (
                <Typography>Loading reports...</Typography>
            ) : (
                reports.length > 0 ? (
                    <Table style={{ marginTop: '1em' }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Location</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Report Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reports.map((report) => (
                                <TableRow key={report.id}>
                                    <TableCell>{report.id}</TableCell>
                                    <TableCell>{report.location}</TableCell>
                                    <TableCell>{report.description}</TableCell>
                                    <TableCell>{report.status}</TableCell>
                                    <TableCell>{new Date(report.reportDate).toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                ) : (
                    <Typography>No reports found.</Typography>
                )
            )}
        </div>
    );
}

export default CustomerReports;
