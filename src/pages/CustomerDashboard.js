import React, { useState } from 'react';
import { createReport } from '../services/reportService';
import { TextField, Button, Typography, Alert } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

function CustomerDashboard() {
    const customerId = "12345";
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reportData = { customerId, location, description };

        try {
            await createReport(reportData);
            setSuccessMessage('Report submitted successfully!');
            setLocation('');
            setDescription('');
        } catch (error) {
            setSuccessMessage('Failed to submit report. Please try again.');
        }
    };

    return (
        <div className="container">
            <Typography variant="h4" style={{ color: '#00529b' }}>
                <ReportProblemIcon style={{ marginRight: 8 }} />
                Report a Power Failure
            </Typography>
            <form onSubmit={handleSubmit} style={{ marginTop: '1em' }}>
                <TextField
                    label="Location"
                    variant="outlined"
                    fullWidth
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    style={{ marginBottom: '1em' }}
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{ marginBottom: '1em' }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit Report
                </Button>
            </form>
            {successMessage && (
                <Alert severity="success" style={{ marginTop: '1em' }}>
                    {successMessage}
                </Alert>
            )}
        </div>
    );
}

export default CustomerDashboard;
