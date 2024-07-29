// src/components/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ onNotify }) => {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flights');
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };
    fetchFlights();
  }, []);

  const filteredFlights = flights.filter(flight =>
    flight.flightNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by Flight Number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <table className="min-w-full bg-white border border-gray-200 shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-center">Flight Number</th>
            <th className="border px-4 py-2 text-center">Status</th>
            <th className="border px-4 py-2 text-center">Gate No.</th>
            <th className="border px-4 py-2 text-center">Departure Date & Time</th>
            <th className="border px-4 py-2 text-center">Arrival Date & Time</th>
            <th className="border px-4 py-2 text-center">Notify</th>
          </tr>
        </thead>
        <tbody>
          {filteredFlights.map((flight) => (
            <tr key={flight.flightNumber} className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center">{flight.flightNumber}</td>
              <td className="border px-4 py-2 text-center">{flight.status}</td>
              <td className="border px-4 py-2 text-center">{flight.gate}</td>
              <td className="border px-4 py-2 text-center">{new Date(flight.departureTime).toLocaleString()}</td>
              <td className="border px-4 py-2 text-center">{new Date(flight.arrivalTime).toLocaleString()}</td>
              <td className="border px-4 py-2 flex justify-center">
                <button
                  onClick={() => onNotify(flight)}
                  type="button"
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2"
                >
                  Notify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
