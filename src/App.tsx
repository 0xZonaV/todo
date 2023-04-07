import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./routes/HomePage.route";

function App() {
  return (
      <>
        <Routes>
            <Route path='/'>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
      </>
  );
}

export default App;
