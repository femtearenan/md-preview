import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="Header">
        <h1>Markdown Live Editor</h1>
      </header>
      <section>
        <h2>Edit</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Editor />
      </section>
      <section>
        <h2>Live preview</h2>
        <Preview/>
      </section>
    </div>
  );
}

export default App;
