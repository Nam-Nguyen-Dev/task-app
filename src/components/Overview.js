import React, { Component } from 'react';

class Overview extends Component {
   /*  constructor(props){
        super(props);
    } */

    render() {
        return (
            this.props.tasks.map((task => <h1>task</h1>))
        )
    }
}

export default Overview;