import React from "react";
import { connect } from 'react-redux';

import { initialAction } from '../redux/actions';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.props.initialAction(this.props);
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

const mapDispatchToProps = dispatch => ({
    initialAction: () => dispatch(initialAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Intro);