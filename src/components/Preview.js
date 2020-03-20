import React from "react";
import { connect } from 'react-redux';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log("PROPS in Preview")
        console.log(this.props)
        return (
            <div>
                <pre>{this.props.basicReducer.input}</pre>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}


export default connect(mapStateToProps)(Preview);