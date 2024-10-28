import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import CustomerReports from './pages/CustomerReports';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './App.css';


function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <AccountCircleIcon style={{ marginRight: 8 }} />
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Kenya Power Reporting App
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Customer Dashboard</Button>
                    <Button color="inherit" component={Link} to="/customer">My Reports</Button>
                    <Button color="inherit" component={Link} to="/admin">Admin Dashboard</Button>
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '2em' }}>
                <Routes>
                    <Route path="/" element={<CustomerDashboard />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/customer" element={<CustomerReports />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
