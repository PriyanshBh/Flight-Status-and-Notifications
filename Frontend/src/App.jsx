import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import NotifyModal from './components/NotifyModal';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const openNotifyModal = (flight) => {
    setSelectedFlight(flight);
  };

  const closeNotifyModal = () => {
    setSelectedFlight(null);
  };

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Appbar */}
      <div className="shadow h-14 flex justify-between items-center px-4 bg-white">
        <div className="flex flex-col justify-center h-full font-bold">
          Flight Status & Notifications App
        </div>
        <div className="flex items-center">
          <div className="flex flex-col justify-center h-full mr-4">
            Hello
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center">
            <div className="text-xl">U</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 p-4">
        <Dashboard onNotify={openNotifyModal} />
        {selectedFlight && <NotifyModal flight={selectedFlight} onClose={closeNotifyModal} />}
      </main>
    </div>
  );
}

export default App;
