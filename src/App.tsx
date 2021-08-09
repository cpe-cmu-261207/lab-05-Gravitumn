import React from 'react';
import './App.css';
import { useState } from 'react'
import Heading from './Header'
import Task from './Todo'
import TodoList from './Todo';

function App() {
  return (
    <div>
      <Heading name="Thanisorn Chaiwut" id={630610738}></Heading>
      <TodoList></TodoList>
      <p className='text-center text-gray-400'> Copyright © 2021 </p>
    </div>
  );
}

export default App;
