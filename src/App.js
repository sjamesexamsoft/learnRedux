import React from 'react';
//import './App.css';
import './components/AddToDo';
import Layout from './components/Layout';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <div>
      <header>
      </header>
      <main>
        <Layout />
        <AddToDo />
      </main>
    </div>
  );
}

export default App;
