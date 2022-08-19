import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/soft-ui/perfectscrollbar.min.js';
import './theme/soft-ui/soft-ui.min.js';
import './theme/soft-ui/soft-ui.css';

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
