import React, { Component } from 'react';

class Display extends Component {
    render() { 
        return ( 
            <div className="display">
                <h2 id="display">{this.props.result}</h2>
            </div>
         );
    }
}
 
export default Display;