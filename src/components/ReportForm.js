import React, { useState } from 'react';
import { createReport } from '../services/reportService';
import './ReportForm.css'; // Separate CSS file for form-specific styling if needed

function ReportForm({ customerId, onReportCreated }) {
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reportData = { customerId, location, description };
        try {
            await createReport(reportData);
            setMessage('Report submitted successfully!');
            setLocation('');
            setDescription('');
            onReportCreated();
        } catch (error) {
            setMessage('Failed to submit report.');
        }
    };

    return (
        <div className="container">
            <h2>Report a Power Failure</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <button type="submit">Submit report</button>
                {message && (
                    <p className={message.includes('success') ? 'success-message' : 'error-message'}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}

export default ReportForm;
