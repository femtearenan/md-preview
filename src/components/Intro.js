import React from "react";

class Intro extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="intro">
                <h2>Markdown Live Editor</h2>
                <p>for React Redux</p>
                <p>by Anders Björkland</p>
                <p>(c) 2020 <a href="https://anders.femtearenan.se">anders.femtearenan.se</a></p>
            </div>
        );
    }
}


export default Intro;