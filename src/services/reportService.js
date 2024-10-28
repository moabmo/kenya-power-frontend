// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/reports';

// export const createReport = (reportData) => axios.post(API_URL, reportData);
// export const getAllReports = () => axios.get(API_URL);

// // New function to fetch reports by customer ID
// export const getReportsByCustomerId = (customerId) => 
//     axios.get(`${API_URL}?customerId=${customerId}`);


import axios from 'axios';

const API_URL = 'http://localhost:8080/api/reports';

export const createReport = (reportData) => axios.post(API_URL, reportData);
export const getAllReports = () => axios.get(API_URL);

// New function to fetch reports by customer ID
export const getReportsByCustomerId = (customerId) => 
    axios.get(`${API_URL}/customer/${customerId}`);
