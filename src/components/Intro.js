import React from "react";
import { connect } from 'react-redux';

class Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="intro" className={this.props.basicReducer.classPresentation} onClick={this.toggleDisplay} >
                <h2>Markdown Live Editor</h2>
                <p>for React Redux</p>
                <p>by Anders Björkland</p>
                <p>(c) 2020 <a href="https://anders.femtearenan.se">anders.femtearenan.se</a></p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}

export default connect(mapStateToProps)(Intro);