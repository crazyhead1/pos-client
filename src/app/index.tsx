import React from 'react';
import { Toaster } from 'react-hot-toast';
import { POSEngine } from '../ui/pos-engine';

function App() {
  const products = [
    {
      name: 'Product 1',
      unitPrice: 10,
      unitsInStock: 10,
    },
    {
      name: 'Product 2',
      unitPrice: 20,
      unitsInStock: 20,
    },
    {
      name: 'Product 3',
      unitPrice: 30,
      unitsInStock: 30,
    }
  ];
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <POSEngine products={products} />
    </div>
  );
}

export default App;
