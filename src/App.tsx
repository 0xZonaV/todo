import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from "./routes/HomePage.route";
import AddTaskRoute from "./routes/AddTask.route";
import EditTaskRoute from "./routes/EditTask.route";
import TaskRoute from "./routes/TaskPage.route";

function App() {
  return (
      <>
        <Routes>
            <Route path='/'>
                <Route index element={<HomePage />} />
                <Route path='task/'>
                    <Route path='add' element={<AddTaskRoute />} />
                    <Route path='edit/:taskID' element={<EditTaskRoute />} />
                    <Route path=':taskID' element={<TaskRoute />} />
                </Route>
            </Route>
        </Routes>
      </>
  );
}

export default App;
