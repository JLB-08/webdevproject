import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Delete from "./Delete"
// import { Link } from 'react-router-dom';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            values: "",
            statusEdit: false,
            statusDelete: false
        }
    }

    edit(e) {
        this.setState({statusEdit: true})
    }

    delete(e) {
        this.setState({statusDelete: true})
    }


    render() {
        // if(this.state.statusDelete) {
        //     return (
        //         <Redirect to="/deleteroute"/>
        //     )
        // }
        
        if(!this.state.status) {
            return (
                <tr>
                    <td>{this.props.obj.jeepneyRoute}</td>
                    <td>{this.props.obj.passes}</td>
                    <td><button onClick={(e)=>this.delete(e)}>Edit</button><Delete/></td>
                </tr>
            );
         } 
        //else {
        //     return (
        //         <Redirect to="/changeroute"/>
        //     )
        // }
        
    }
}

export default List;