import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddStudent extends Component{
    sendData(event)
    {
        const body = {
            name:this.refs.name.value,
            age:this.refs.age.value,
            class:this.refs.class.value,
            phone:this.refs.phone.value
        }
        const header = {"Content-type":"application/x-www-form-urlencoded"}
        axios.post("http://localhost:4000/adddata",body,{header}).then((res)=>console.log("Data has been inserted "+res))
    }

    render(){
        return(
            <div align='center'>
                
                <br></br><br></br>  
                <form onSubmit={()=>this.sendData()}>                  
                <label>Student name :</label><input type = "text" ref="name"/><br></br><br></br>
                <label>Student age :</label><input type = "text" ref="age"/><br></br><br></br>
                <label>Student location :</label><input type = "text" ref="location"/><br></br><br></br>
                <button type='submit' onClick={()=>this.sendData()} style={{backgroundColor:'green',color:'white'}}>Add Student</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;