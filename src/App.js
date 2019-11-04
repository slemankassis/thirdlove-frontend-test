import React from 'react';
import './App.css';
import Product from './pages/Product';
import { useFetch } from './hooks';
// import mockData from './pages/Product/mocks/mockData';

function App() {
  const [data, loading] = useFetch(
    'https://www.mocky.io/v2/5c6c3a92320000e83bbef971',
  );

  // Test with mocked data
  // const [data, loading] = [mockData, false];

  // TODO: Use ErrorBoundary here for catch errors in Product component
  return (
    <div>
      {loading
        ? 'Loading...'
        : <Product product={data.product} />}
    </div>
  );
}

export default App;
