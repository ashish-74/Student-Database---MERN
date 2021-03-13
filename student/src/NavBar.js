import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(
            <div align='center' style={{backgroundColor:'orange',color:'white'}}>
                <table>
                    <tr>
                        <th><Link to='/addStudent'>Add Student</Link></th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <th><Link to='/showStudent'>Show Student</Link></th>
                    </tr>
                </table>                
            </div>
        )
    }
}

export default NavBar;