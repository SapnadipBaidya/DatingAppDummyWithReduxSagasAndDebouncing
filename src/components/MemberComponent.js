import { TextField, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDebounce } from '../helpers/customHooks';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
   root:{ marginLeft:"10vw",marginTop:"5vw"}
});

const searchData=["Sapnadip Baidya","sapan da","Sapnadip Baidya","sapan da","Sapnadip Baidya","sapan da","Sapnadip Baidya","sapan da","Sapnadip Baidya","sapan da","Sapnadip Baidya","sapan da",,"Ananya Kayal","Gourav Sharma","Ananya Baidya","Rahul Bhowmik"];
function MemberComponent() {
    const classes = useStyles();
    const[value,setValue]=useState();
    const[searchField,setSearchField]=useState();
    const handleOnKeyChage = (e)=>{
   
        setSearchField(e.target.value)
    }
    const debouncedSearch = useDebounce(searchField,500);


    useEffect(() => {
       setValue(debouncedSearch)
      }, [debouncedSearch])

  return (
    <div  className={classes.root}>
    <TextField id="filled-basic" label="Search Members" variant="filled" onChange={(e)=>handleOnKeyChage(e)}/>

 <div style={{maxHeight:"40vh",overflow:"overlay"}}>
 { searchData.map((word)=>{
    if(word?.toLowerCase()?.includes(value?.toLowerCase()) && value?.length>2){
        return <Typography variant="h3" style={{margin:"1vw" , color:"orange" , fontWeight:"bold"}}>{"- "+word}</Typography>
        
    }
   })}</div>
      
    
    </div>
  )
}

export default MemberComponent