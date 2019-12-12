import React, { Component } from 'react'
import home from './home.png'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Redirect } from 'react-router-dom'
import List from './List';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            ret: [],
            add: false,
            statusEdit: false,
            statusDelete: false
        }
    }
    onclickHome(e) {
        this.setState({ home: true })
    }
    componentDidMount() {
        axios.get('http://localhost:3000/jeepme/retrieveAll')
            .then(response => {
                this.setState({ret: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }
    edit(e) {
        this.setState({statusEdit: true})
    }

    delete(e) {
        this.setState({statusDelete: true})
    }

    add(e) {
        this.setState({add: true})
    }

    dataTable() {
        return this.state.ret.map((res, i) => {
            return <List obj={res} key={i} />;
        })
    }
    render() {
        if (this.state.add) {
            return (
                <Redirect to="/addroute"/>
            )
        }
        if(this.state.statusDelete) {
            return (
                <Redirect to="/deleteroute"/>
            )
        }
        if(this.state.statusEdit) {
                return (
                    <Redirect to="/changeroute"/>
                )
        }
        if (!this.state.home) {
            return (
                <center>
                    <div>
                        <img src={home} alt="Smiley face" onClick={(e) => this.onclickHome(e)} />
                    </div>
                    <div className="table-wrapper">
                        <h1 id="ListRetrieve">List of Routes</h1>
                        <button onClick={(e)=>this.add(e)}>Add</button>
                        <button onClick={(e)=>this.edit(e)}>Edit</button><button onClick={(e)=>this.delete(e)}>Delete</button>
                    <Table className="ui fixed single line selectable celled table">
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Places</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </Table>
                </div>
                </center>
                
            )
        // } else {
        //     return (
        //         <Redirect to="/options"/>
        //     )
        }
    }
}
export default Home;