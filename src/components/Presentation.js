import React from "react";

class Presentation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="presentation">
                <p>React V 16.3</p>
                <p>Redux V 4.0.5</p>
                <p>marked.js V 0.8.1</p>
                <p>DOMPurify V 2.0.8</p>
            </div>
        );
    }
}


export default Presentation;