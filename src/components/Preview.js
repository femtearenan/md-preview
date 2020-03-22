import React from "react";
import { connect } from 'react-redux';
import marked, { Renderer } from 'marked'
import DOMPurify from 'dompurify';

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    interpretMarkdown() {
        let output = DOMPurify.sanitize(marked(this.props.basicReducer.input));
        return { __html: output };
    }

    render() {
        
        return (
            <div dangerouslySetInnerHTML={this.interpretMarkdown()} />
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}


export default connect(mapStateToProps)(Preview);