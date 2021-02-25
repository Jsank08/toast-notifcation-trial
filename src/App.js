import React from 'react';
import ToastNotify from "./component/ToastNotify";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ToastNotify />
    </div>
  );
}

export default App;