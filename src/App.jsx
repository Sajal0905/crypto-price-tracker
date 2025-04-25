import React from 'react';
import CryptoTable from './components/CryptoTable';
import PriceUpdater from './components/PriceUpdater';

const App = () => {
  return (
    <div className="app">
      <h1>Real-Time Crypto Price Tracker</h1>
      <PriceUpdater />
      <CryptoTable />
    </div>
  );
};

export default App;
