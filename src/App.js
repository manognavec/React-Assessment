import React from 'react';
import ReactAssessment from './Components';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReactAssessment />
      </div>
    </Provider>
  );
}

export default App;
