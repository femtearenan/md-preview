import React from "react";
import { connect } from 'react-redux';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    updateInput = input => {
        this.setState({ input });
    }

    render() {
        return (
            <div>
                <textarea defaultValue={this.props.basicReducer.input}></textarea>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}


export default connect(mapStateToProps)(Editor);