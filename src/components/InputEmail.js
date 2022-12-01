import React from 'react'
import { makeStyles } from "@material-ui/core";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const useStyles = makeStyles({
    inputMail:{ 
     maxWidth:"33vw",
     minHeight:"8vh",
     backgroundColor:"white",
     borderRadius:"5vh",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
flexDirection:"row",
  
    }
  });

function InputEmail() {
    const classes = useStyles();
  return (
    <div className={classes.inputMail} >
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",minWidth:"10vw",marginLeft:"1vh",fontSize:"2vh"}}>
    <MailOutlineIcon style={{color:"#adaeb4"}}/>
    <input placeholder="Enter your email" style={{border: "none",outline:"none",color:"#adaeb4",marginLeft:"2vh",minWidth:"10vw",fontSize:"2vh"}}/>
    </div>
    
    <button style={{backgroundColor:"#F59B5A",color:"white",border:"none",minHeight:"6vh",minWidth:"10vw",borderRadius:"5vh",marginRight:"1vh",  cursor: "pointer",fontSize:"2vh"}}>Get Started</button>
    </div>
  )
}

export default InputEmail