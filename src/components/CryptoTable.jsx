/*import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  const formatPercentage = (percent) => {
    return percent > 0 ? `+${percent}%` : `${percent}%`;
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th></th>
            <th></th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td><img src={asset.logo} alt={asset.name} className="logo" /></td>
              <td>{asset.name}</td>
              <td className="symbol-cell">{asset.symbol}</td>
              <td className="price-cell">{formatPrice(asset.price)}</td>
              <td className={asset.percent1h > 0 ? 'positive' : 'negative'}>
                {formatPercentage(asset.percent1h)}
              </td>
              <td className={asset.percent24h > 0 ? 'positive' : 'negative'}>
                {formatPercentage(asset.percent24h)}
              </td>
              <td className={asset.percent7d > 0 ? 'positive' : 'negative'}>
                {formatPercentage(asset.percent7d)}
              </td>
              <td>{formatPrice(asset.marketCap)}</td>
              <td>{formatPrice(asset.volume24h)}</td>
              <td>{asset.circulatingSupply}</td>
              <td>{asset.maxSupply}</td>
              <td><img src={asset.chart} alt={`${asset.name} 7d Chart`} className="chart" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;*/

import React from 'react';
import { useSelector } from 'react-redux';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  const formatPercentage = (percent) => {
    return percent > 0 ? `+${percent}%` : `${percent}%`;
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="table-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th></th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td data-label="#"> {index + 1}</td>
              <td data-label="Name">
                <img src={asset.logo} alt={asset.name} className="logo" />
              </td>
              <td data-label="Name">{asset.name}</td>
              <td data-label="Symbol">{asset.symbol}</td>
              <td data-label="Price">{formatPrice(asset.price)}</td>
              <td
                className={asset.percent1h > 0 ? 'positive' : 'negative'}
                data-label="1h %"
              >
                {formatPercentage(asset.percent1h)}
              </td>
              <td
                className={asset.percent24h > 0 ? 'positive' : 'negative'}
                data-label="24h %"
              >
                {formatPercentage(asset.percent24h)}
              </td>
              <td
                className={asset.percent7d > 0 ? 'positive' : 'negative'}
                data-label="7d %"
              >
                {formatPercentage(asset.percent7d)}
              </td>
              <td data-label="Market Cap">{formatPrice(asset.marketCap)}</td>
              <td data-label="24h Volume">{formatPrice(asset.volume24h)}</td>
              <td data-label="Circulating Supply">{asset.circulatingSupply}</td>
              <td data-label="Max Supply">{asset.maxSupply}</td>
              <td data-label="7D Chart">
                <img src={asset.chart} alt={`${asset.name} 7d Chart`} className="chart" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;





