import React from 'react';
import './App.css';
import Product from './pages/Product';
import hooks from './hooks';

function App() {
  const [data, loading] = hooks.useFetch(
    'https://www.mocky.io/v2/5c6c3a92320000e83bbef971',
  );

  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <Product product={data.product} />
      )}
    </div>
  );
}

export default App;
