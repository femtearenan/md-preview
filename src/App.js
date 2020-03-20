import React, { Component } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="Header">
        <h1>MDLE</h1>
        <div>Run</div>
        <div>Test</div>
        <div>Indent</div>
        <div>Blocks Menu</div>
        <div>Search Menu</div>
        <div>Run Other</div>
        <div>Edit Other</div>
        <div>Insert</div>
        <div>Fold/Unfold</div>
        <div>Line Insert</div>
        <div id="version">Version 0.1</div>
      </header>
      <section id="editor">
        <h2>Edit</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Editor />
      </section>
      <section id="preview">
        <h2>Live preview</h2>
        <Preview/>
      </section>
    </div>
  );
}

export default App;
