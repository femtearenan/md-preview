import React, { Component } from 'react';
import Editor from './components/Editor';
import Intro from './components/Intro';
import Presentation from './components/Presentation';
import Preview from './components/Preview';
import './App.css';

import { fullscreen, splitHeight, splitVertical } from './redux/actions';

import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);
    this.fullscreen = this.fullscreen.bind(this);
    this.splitHeight = this.splitHeight.bind(this);
    this.splitVertical = this.splitVertical.bind(this);
  }

  fullscreen() {
    this.props.fullscreen();
  }

  splitHeight() {
    this.props.splitHeight();
  }

  splitVertical() {
    this.props.splitVertical();
  }
  
  render() {
    return (
      <div className="App">
        <header className="Header">
          <div id="header-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="424.312" height="189.125" viewBox="0 0 424.312 189.125">
            <g id="Logo" transform="translate(-45 -301.5)">
              <path id="line7" d="M347.5,189.125V168h95.812v21.124H347.5Zm-109.5,0V168h95.812v21.124H238Zm-109.5,0V168h82.125v21.124H128.5Zm-13.688,0H87.437V168h27.375v21.124h0Zm-68.438,0H19V168H46.374v21.124h0Z" transform="translate(26 301.5)" fill="#fafdff"/>
              <path id="line6" d="M374.873,161H347.5V140h27.374v21h0Zm-109.5,0H238V140h27.375v21h0Zm-37.914,0H196.937V140h30.523v21h0Zm-71.586,0H128.5V140h27.375v21h0Zm-41.062,0H87.437V140h27.375v21h0Zm-68.438,0H19V140H46.374v21h0Z" transform="translate(26 301.5)" fill="#cfebf7"/>
              <path id="line5" d="M374.873,133H347.5V112h27.374v21h0Zm-109.5,0H238V112h27.375v21h0Zm-37.914,0H196.937V112h30.523v21h0Zm-71.586,0H128.5V112h27.375v21h0Zm-41.062,0H87.437V112h27.375v21h0Zm-68.438,0H19V112H46.374v21h0Z" transform="translate(26 301.5)" fill="#c7e5ff"/>
              <path id="line4" d="M374.873,105H347.5V84h27.374v21h0Zm-109.5,0H238V84h27.375v21h0Zm-37.914,0H196.937V84h30.523v21h0Zm-71.586,0H128.5V84h27.375v21h0Zm-41.062,0H87.437V84h27.375v21h0Zm-41.063,0H60.062V84H73.75v21h0Zm-27.375,0H19V84H46.374v21h0Z" transform="translate(26 301.5)" fill="#b8e5ff"/>
              <path id="line3" d="M347.5,77V56h82.125V77H347.5Zm-82.126,0H238V56h27.375V77h0ZM227.46,77H196.937V56h30.523V77h0Zm-71.586,0H128.5V56h27.375V77h0ZM19,77V56h95.812V77H19Z" transform="translate(26 301.5)" fill="#5cbdf3"/>
              <path id="line2" d="M374.873,49H347.5V28h27.374V49h0Zm-109.5,0H238V28h27.375V49h0Zm-54.751,0H183.25V28h27.374V49h0Zm-54.75,0H128.5V28h27.375V49h0ZM73.75,49V28h41.063V49H73.75ZM19,49V28H60.062V49H19Z" transform="translate(26 301.5)" fill="#49aee5"/>
              <path id="line1" d="M347.5,29.5V8.5h95.812v21H347.5Zm-82.126,0H238V8.5h27.375v21h0ZM128.5,29.5V8.5h68.438v21H128.5Zm-13.688,0H87.437V8.5h27.375v21h0Zm-68.438,0H19V8.5H46.374v21h0Z" transform="translate(26 293)" fill="#028cff"/>
            </g>
          </svg>
          </div>
          <div><p onClick={this.fullscreen}>Fullscreen</p></div>
          <div><p onClick={this.splitHeight}>Split H</p></div>
          <div><p onClick={this.splitVertical}>Split V</p></div>
          <div><a href="#">Blocks Menu</a></div>
          <div><a href="#">Search Menu</a></div>
          <div><a href="#">Run Other</a></div>
          <div><a href="#">Edit Other</a></div>
          <div><a href="#">Insert</a></div>
          <div><a href="#">Fold/Unfold</a></div>
          <div><a href="#">Line Insert</a></div>
          <div id="version"><a href="#">Version 0.1</a></div>
        </header>
        <div id="display-wrapper" className={this.props.displayReducer.wrapper}>
          <section id="editor" className={this.props.displayReducer.display}>
            <Intro />
            <Presentation />
            <Editor />
          </section>
          <section id="preview">
            <h2>Live preview</h2>
            <Preview/>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fullscreen: () => dispatch(fullscreen()),
  splitHeight: () => dispatch(splitHeight()),
  splitVertical: () => dispatch(splitVertical())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
