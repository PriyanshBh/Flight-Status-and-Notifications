import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NotifyModal = ({ flight, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notificationType, setNotificationType] = useState('email');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleNotify = async () => {
    try {
      if (notificationType === 'email') {
        await axios.post('http://localhost:5000/api/notify/email', {
          email,
          flightNumber: flight.flightNumber,
          status: flight.status
        });
      } else {
        await axios.post('http://localhost:5000/api/notify/sms', {
          phone,
          flightNumber: flight.flightNumber,
          status: flight.status
        });
      }
      alert('Notification sent successfully');
      onClose(); // Close the modal
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 md:w-128">
        <h2 className="text-2xl font-semibold mb-6">Notify about Flight: {flight.flightNumber}</h2>
        <div className="mb-6">
          <label className="block text-xl font-medium mb-3">Notification Type</label>
          <select
            value={notificationType}
            onChange={(e) => setNotificationType(e.target.value)}
            className="p-4 border border-gray-300 rounded-lg w-full text-lg"
          >
            <option value="email">Email</option>
            <option value="sms">SMS</option>
          </select>
        </div>
        {notificationType === 'email' ? (
          <div className="mb-6">
            <label className="block text-xl font-medium mb-3">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 border border-gray-300 rounded-lg w-full text-lg"
            />
          </div>
        ) : (
          <div className="mb-6">
            <label className="block text-xl font-medium mb-3">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-4 border border-gray-300 rounded-lg w-full text-lg"
            />
          </div>
        )}
        <div className="flex justify-between">
          <button
            onClick={handleNotify}
            className="bg-black text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-gray-800"
          >
            Send Notification
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-lg font-medium hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotifyModal;
