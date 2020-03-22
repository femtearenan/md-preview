import React from "react";
import { connect } from 'react-redux';

import { initialAction } from '../redux/actions';

class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.className = "display";
    }

    toggleDisplay() {
        this.props.initialAction(this.props);
    }

    render() {
        return (
            <div id="presentation" className={this.props.basicReducer.classPresentation} onClick={this.toggleDisplay}>
                <p>React V 16.3</p>
                <p>Redux V 4.0.5</p>
                <p>marked.js V 0.8.1</p>
                <p>DOMPurify V 2.0.8</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);