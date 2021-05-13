import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './Registation.css';
import Button from '@material-ui/core/Button';











export default class RegistationPages extends React.Component{
    constructor(){
        super()
        this.state = {
            title : ' Create your Google Account  ',
           
        }
    }


    handleChange = (e) => {
        console.log(e.target.value);
    }


    render() {
        return (
           
            
         
           <div>
                <div className = "title" >
                    <div className = "header" >{this.state.title}</div>
                    <div className= "Ignore">{"////////////////// text to ignore ////////////////////"}</div>
                    <div className="body">
                <div className="name" ><TextField  label="FirstName" variant="outlined" size = "small"  />{"  "}
                <TextField  label="LastName"  variant="outlined" size = "small"   />
                </div>
                <div className= "Ignore1">{"////////////////// text to ignore ////////////////////"}</div>
                <div className="Email"><TextField  label="UserName" helperText="you can use letter,number and period "  layout="fullWidth" variant="outlined"  size = "small"/></div>
                <div className= "Ignore2">{"////////////////// text to ignore ////////////////////"}</div>
                <div class ="Tag" ><h1 style={{color: "blue" ,fontSize: 12}}>Use My Current Email Address </h1></div>
                <div className= "Ignore3">{"////////////////// text to ignore ////////////////////"}</div>
                <div className = "passWord" helperText="Use 8 or more characters with a mix of letters, numbers & symbols "  ><TextField  label="PassWord" variant="outlined" size = "small" multilin rowsMax={4} />{"    "}
               < TextField  label="Confirm"  variant="outlined" size = "small"  multiline rowsMax={4}  />
                </div>
                </div>
                <div className= "Ignore4">{"////////////////// text to ignore ////////////////////"}</div>
                <div className="box"><FormControlLabel control={<Checkbox name="checkedC" />} label="ShowPassword" /></div>
                
                <div className= "Ignore5">{"////////////////// text to ignore ////////////////////"}</div>
                <div><Button variant="contained" color="primary" href="#">Next</Button></div>
                

  

                 </div>
                
                 </div>
                
        )
    }
}