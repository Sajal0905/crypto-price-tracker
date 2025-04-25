import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCrypto } from '../redux/cryptoSlice';

const PriceUpdater = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 5);
      const randomPriceChange = Math.random() * (5 - -5) + -5;
      const randomPercentChange = Math.random() * (5 - -5) + -5;

      dispatch(updateCrypto({
        id: randomIndex,
        data: {
          price: Math.round(Math.random() * 10000) + 1000,
          percent1h: randomPercentChange,
          percent24h: randomPercentChange,
          percent7d: randomPercentChange,
          volume24h: Math.round(Math.random() * 100000000) + 1000000,
        },
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};

export default PriceUpdater;
