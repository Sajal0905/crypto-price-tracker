import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', logo: '/btc-logo.png', price: 40000, marketCap: 700000000000, volume24h: 5000000000, circulatingSupply: 19000000, maxSupply: 21000000, percent1h: 0, percent24h: 0, percent7d: 0, chart: '/7d-chart.png' },
    { id: 2, name: 'Ethereum', symbol: 'ETH', logo: '/eth-logo.png', price: 3000, marketCap: 400000000000, volume24h: 3000000000, circulatingSupply: 115000000, maxSupply: 115000000, percent1h: 0, percent24h: 0, percent7d: 0, chart: '/eth7d.jpeg' },
    { id: 3, name: 'Tether', symbol: 'USDT', logo: '/usdt-logo.png', price: 1, marketCap: 70000000000, volume24h: 60000000000, circulatingSupply: 70000000000, maxSupply: 70000000000, percent1h: 0, percent24h: 0, percent7d: 0, chart: '/usdt7d.jpeg' },
    { id: 4, name: 'XRP', symbol: 'XRP', logo: '/xrp-logo.png', price: 0.5, marketCap: 25000000000, volume24h: 1000000000, circulatingSupply: 100000000000, maxSupply: 100000000000, percent1h: 0, percent24h: 0, percent7d: 0, chart: '/xrp7d.jpeg' },
    { id: 5, name: 'Binance Coin', symbol: 'BNB', logo: '/bnb-logo.png', price: 350, marketCap: 60000000000, volume24h: 2000000000, circulatingSupply: 170000000, maxSupply: 170000000, percent1h: 0, percent24h: 0, percent7d: 0, chart: '/bnb7d.jpeg' },
    { id: 6, name: 'Solana', symbol: 'SOL', logo: '/sol-logo.jpeg', price: 100, marketCap: 35000000000, volume24h: 1500000000, circulatingSupply: 350000000, maxSupply: 500000000, percent1h: 0, percent24h: 0, percent7d: 0, chart: '/sol7d.jpeg' },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCrypto: (state, action) => {
      const { id, data } = action.payload;
      const assetIndex = state.assets.findIndex((asset) => asset.id === id);
      if (assetIndex !== -1) {
        state.assets[assetIndex] = { ...state.assets[assetIndex], ...data };
      }
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
