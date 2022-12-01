import {Typography } from '@mui/material';
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core";
import React from 'react'
import InputEmail from './InputEmail';
const useStyles = makeStyles({
    firstPara: {
   
      zIndex: 7,
      minHeight:"80vh",
      maxWidth:"40vw",
    },
    navbar:{
      maxWidth:"9vw",
    },
    firstParaTxtStyle: {
      fontWeight: "600 !important",
      fontSize: "3vw !important",
    },
    BottomTitleStyle: {
      fontWeight: "600 !important",
      fontSize: "2.6vw !important",
    },
    BottomTitleStyleConditional:{
      color:"#B25E21"
    },
  
    secondPara: {
      color: "#1A1D32",
      maxWidth: "20%",
      top: "43vh",
      left: "20vw",
      zIndex: 7,
      position: "absolute",
    },
    subtitleStyle: {
      display: "flex",
      flexDirection: "row",
      minWidth: "34rem",
      fontSize: "1.2vw !important",
    },
  });

const bottomTxts = [
    {
      amount: "15k+",
      text: `Dates and matches
  made everyday`
    },
    {amount: "1,456",
    text: `New members
    signup every day`},
    {amount: "1M+",
    text: `Members from 
    around the world`}
  ];
function LeftSection() {
    const classes = useStyles();
  return (
    <div className={classes.firstPara}>
        <Typography
          style={{
            fontWeight: "600",
            color: "#ed9b59",
            minWidth: "25vw",
            fontSize: "1.6vw",
          }}
        >
          Because you deserve better!
        </Typography>
        <Typography>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              minWidth: "30vw",
              fontSize: "3.5vw",
            }}
          >
            {" "}
            <Typography className={classes.firstParaTxtStyle}>
              Get noticed for
            </Typography>{" "}
            <Typography
              className={classes.firstParaTxtStyle}
              style={{
                marginLeft: "1vw",
                color: "#ed9b59",
              }}
            >
              {" "}
              who
            </Typography>
          </span>
          <span
            style={{ display: "flex", flexDirection: "row", minWidth: "30vw" }}
          >
            {" "}
            <Typography className={classes.firstParaTxtStyle}>
              you are,
            </Typography>{" "}
            <Typography
              className={classes.firstParaTxtStyle}
              style={{
                marginLeft: "1vw",
                color: "#ed9b59",
                fontWeight: "600",
                fontSize: "3.5vw",
              }}
            >
              not what
            </Typography>
          </span>
          <Typography
            className={classes.firstParaTxtStyle}
            style={{ minWidth: "20vw" }}
          >
            you look like.
          </Typography>
        </Typography>

        <Typography style={{ marginTop: "2.5vh" }}>
          <Typography className={classes.subtitleStyle}>
            You’re more than just a photo. You have stories to tell, and{" "}
          </Typography>
          <Typography className={classes.subtitleStyle}>
            passions to share, and things to talk about that are more{" "}
          </Typography>
          <Typography className={classes.subtitleStyle}>
            interesting than the weather. Because you deserve what{" "}
          </Typography>
          <Typography className={classes.subtitleStyle}>
            dating deserves: better.{" "}
          </Typography>
        </Typography>

        <div style={{ marginTop: "1.2vw" }}>
          <InputEmail />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "overlay",
              minWidth: "33vw",
              maxWidth:"40%",
              marginTop:"3vw"
            }}
          >
           
          {
            bottomTxts.map((e,i)=><div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "2vw",
            }}
          >
            <Typography className={clsx(classes.BottomTitleStyle, {[classes.BottomTitleStyleConditional]: i%2!==0 })} >{e.amount}</Typography>
            <Typography
              style={{ maxWidth: "10vw", minWidth: "9vw", fontSize: "2vh" }}
            >
              {e.text}
            </Typography>
          </div>)
          }
          
          </div>
        </div>
      </div>
  )
}

export default LeftSection