import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.css';



export default class RegistationPages extends React.Component{
    constructor(){
        super()
        this.state = {
            title : ' Use your Google Account  ',
           
        }
    }


    handleChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        return (
    <div className = "titleLogin" >
        <div className = "header" >{this.state.title}</div>
        <div className= "Ignore">{"////////////////// text to ignore ////////////////////"}</div>
        <div className = "Email or phone"  ><TextField id="standard-multiline-flexible" label="Email or phone" variant="outlined" size = "small" multilin rowsMax={4} ></TextField>
        
        <div ><h1 style={{color: "blue" ,fontSize: 14}}>Forget email? </h1></div>
        <div className= "Ignore1">{"////////////////// text to ignore ////////////////////"}</div>
        <div className="message">Not your computer? Use Guest mode to sign in privately</div>
        <div class="item"><a href="https://support.google.com/chrome/answer/6130773?hl=en">Learn more?</a></div>
        <div className= "Ignore1">{"////////////////// text to ignore ////////////////////"}</div>
       <div className="next"><Button variant="contained" color="primary" href="#">Next</Button></div> </div>
        </div>
        )
    }
}