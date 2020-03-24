import React, { Component } from 'react';
import Editor from './components/Editor';
import Intro from './components/Intro';
import Presentation from './components/Presentation';
import Preview from './components/Preview';
import './App.css';

import { initialAction, fullscreen, splitHeight, splitVertical, copy, download, dismiss, themeSwitch, aboutSwitch } from './redux/actions';

import { connect } from 'react-redux';

class App extends Component {
  constructor (props) {
    super(props);
    this.fullscreen = this.fullscreen.bind(this);
    this.splitHeight = this.splitHeight.bind(this);
    this.splitVertical = this.splitVertical.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.copy = this.copy.bind(this);
    this.downloadMd = this.downloadMd.bind(this);
    this.dismiss = this.dismiss.bind(this);
    this.themeSwitch = this.themeSwitch.bind(this);
    this.aboutSwitch = this.aboutSwitch.bind(this);
    this.menuItems =[
      'fullscreen',
      'split-h',
      'split-v',
      'about-l'
    ];
  }

  toggleDisplay() {
    this.props.initialAction(this.props);
}

  fullscreen(event) {
    this.updateActiveMenuItem(event);
    this.props.fullscreen();
  }

  splitHeight(event) {
    this.updateActiveMenuItem(event);
    this.props.splitHeight(event);
  }

  splitVertical(event) {
    this.updateActiveMenuItem(event);
    this.props.splitVertical();
  }

  updateActiveMenuItem(event) {
    let elementId = event.currentTarget.id;
    let searchElement = null;
    this.menuItems.forEach(element => {
      searchElement = document.getElementById(element);
      if (searchElement.id !== elementId) {
        searchElement.className = '';
      } else {
        searchElement.className = 'active';
      }
    });
  }

  copy() {
    let element = document.getElementById("textarea");
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand("copy");
    element.setSelectionRange(0,0);
    this.props.copy();
    
  }

  downloadMd() {
    downloadFile(this.props.basicReducer.input, "text.md");
    this.props.download();
  }

  dismiss() {
    if (this.props.displayReducer.dismissable) {
      this.props.dismiss();
    }
  }

  themeSwitch() {
    this.props.themeSwitch();
  }

  aboutSwitch(event) {
    let elementId = event.currentTarget.id;
    let element = document.getElementById(elementId);
    let displayWrapper = document.getElementById("display-wrapper");
    if (this.props.displayReducer.about === "no-show") {
      element.className = 'active';
      displayWrapper.classList.add('no-show');
    } else {
      element.className = '';
      displayWrapper.classList.remove('no-show');

    }
    this.props.aboutSwitch();
  }
  
  render() {
    return (
      <div className={"App " + this.props.displayReducer.theme}>
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
          <div><p id={this.menuItems[0]} onClick={this.fullscreen}>Fullscreen</p></div>
          <div><p id={this.menuItems[1]} onClick={this.splitHeight}>Split H</p></div>
          <div><p id={this.menuItems[2]} onClick={this.splitVertical}>Split V</p></div>
          <div><p onClick={this.copy}>Copy md</p></div>
          <div><p onClick={this.downloadMd}>Download md</p></div>
          <div><a href="#editorAnchor">Editor</a></div>
          <div><a href="#previewAnchor">Preview</a></div>
          <div><p onClick={this.themeSwitch}>{this.props.displayReducer.applyTheme}</p></div>
          <div><a href="https://github.com/femtearenan/md-preview" target="_blank" rel="noopener noreferrer">Github</a></div>
          <div><p id={this.menuItems[3]} onClick={this.aboutSwitch}>About</p></div>
          <div id="message" onClick={this.dismiss}><p>{this.props.displayReducer.message}</p></div>
        </header>
        <div id="about" className={this.props.displayReducer.about}>
          <h2>About MDLE</h2>
          <p>MDLE (Markdown Live Editor) is a retro-inspired markdown editor/previewer. A source of inspiration has been AMOS for Amiga. It was an editor for writing a BASIC derivate on (most commonly) the Amiga 500.</p>
          <p>The creator of MDLE is me, Anders Björkland. You can read more about me and my projects over at <a href="https://anders.femtearenan.se" target="_blank" rel="noopener noreferrer">anders.femtearenan.se</a> or <a href="https://twitter.com/abjorkland" target="_blank" rel="noopener noreferrer">follow me on Twitter</a>.</p>
        </div>
        <div id="display-wrapper" className={this.props.displayReducer.wrapper}>
          <section id="editor" className={this.props.displayReducer.display} onClick={this.toggleDisplay}>
            <div className="anchor" id="editorAnchor"></div>
            <Intro />
            <Presentation />
            <Editor />
          </section>
          <section id="preview" className={this.props.displayReducer.display}>
            <div className="anchor" id="previewAnchor"></div>
            <Preview/>
          </section>
        </div>
      </div>
    );
  }
}

// A function to download data from browser. 
// Credit to user Kanchu https://stackoverflow.com/questions/13405129/javascript-create-and-save-file [2020-03-24]
function downloadFile(data, filename) {
  var file = new Blob([data], {type: "text/plain"});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  initialAction: () => dispatch(initialAction()),
  fullscreen: () => dispatch(fullscreen()),
  splitHeight: event => dispatch(splitHeight(event)),
  splitVertical: () => dispatch(splitVertical()),
  copy: () => dispatch(copy()),
  download: () => dispatch(download()),
  dismiss: () => dispatch(dismiss()),
  themeSwitch: () => dispatch(themeSwitch()),
  aboutSwitch: () => dispatch(aboutSwitch())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
