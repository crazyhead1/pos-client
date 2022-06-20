import React from 'react';
import { Toaster } from 'react-hot-toast';
import Inventory from '../ui/inventory';
import { POSEngine } from '../ui/pos-engine';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const products = [
    {
      id: "qwertyuiop",
      name: 'Product 1',
      unitPrice: 10,
      unitsInStock: 10,
    },
    {
      id: "asdfghjkl",
      name: 'Product 2',
      unitPrice: 20,
      unitsInStock: 20,
    },
    {
      id: "zxcvbnm",
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
      <Inventory/>
    </div>
  );
}

export default App;
