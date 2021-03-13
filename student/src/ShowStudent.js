import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class ShowStudent extends Component{
    constructor(){
        super()
        this.state={
                student:[]
            }         
    }
    componentDidMount()
    {
        axios.get("http://localhost:4000/getdata").then((res)=> this.setState({student:res.data})).catch((err)=>console.log(err))

    }
    render(){
        let showData = this.state.student.map((a)=>         
        <tr>
            <td>{a.name}</td>
            <td>{a.age}</td>
            <td>{a.location}</td>            
        </tr> 
    )
        return(
            <div align='center'>
                <h3>Student Details Page</h3>
                <table border='3px'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                    </tr>
                    {showData}
                </table>
            </div>
        )
    }
}

export default ShowStudent;