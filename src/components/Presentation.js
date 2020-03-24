import React from "react";
import { connect } from 'react-redux';

class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.className = "display";
    }

    render() {
        return (
            <div id="presentation" className={this.props.basicReducer.classPresentation}>
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

export default connect(mapStateToProps)(Presentation);