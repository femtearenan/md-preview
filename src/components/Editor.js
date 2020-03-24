import React from "react";
import { connect } from 'react-redux';

import { updateMd } from '../redux/actions';


class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput = event => {
        return this.props.updateMd(event);
    }

    render() {
        return (
            <div id="editable" className={this.props.basicReducer.classEdit}> 
                <textarea defaultValue={this.props.basicReducer.input} onKeyUp={this.updateInput} className={this.props.displayReducer.display}></textarea>
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
    updateMd: (event) => dispatch(updateMd(event))
});


export default connect(mapStateToProps, mapDispatchToProps)(Editor);