import React from 'react';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import AppLayout from '../ui/app-layout';

function App() {
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <AppLayout/>
    </div>
  );
}

export default App;
