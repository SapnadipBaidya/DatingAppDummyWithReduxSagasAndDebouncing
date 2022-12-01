import "./rightsection.css";
import React from "react";
import { makeStyles } from "@material-ui/core";
import creditCardPic from "../constants/images/creditcardImg.png";
import ringlogo from "../constants/images/ringlogo.png";
import drinklogo from "../constants/images/drinklogo.png";
import likeicon from "../constants/images/likeicon.png";
import loveicon from "../constants/images/loveicon.png";
import calenderlogo from "../constants/images/calenderlogo.png";
import Icon_male from "../constants/images/Icon_male.png";
import event_add from "../constants/images/event_add.png";
import drop from "../constants/images/drop.png";
import dpone from "../constants/images/dpone.png";
import dptwo from "../constants/images/dptwo.png";
import clsx from "clsx";

const useStyles = makeStyles({
  section: {
    minWidth: "50vw",
  },
  oneContainer: {
    minHeight: "50vh",
  },
  twoContainer: {
    minHeight: "30vh",
    display: "flex",
    flexDirection: "row",
  },
  cardContainerStyle: {
    display: "flex",
    flexDirection: "row",
    margin: "1vh",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "1vh",
    borderRadius: "0.8vh",
    maxWidth:"20vw",
   
  },
  cardContainerStyleConditional:{
    marginLeft:"4vw",
  },
  basicDetailsContainerStyle:{
    minWidth: "7vw",
    maxWidth: "8vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor:"white",
    color:"#F59B5A",
    borderRadius:"1vh"

  },
  basicDetailsContainerStyleConditional:{
    backgroundColor:"#F59B5A",
    color:"white"
  }
});
const basicDetailsArr = [
  { img: Icon_male, text: "male" },
  { img: event_add, text: "30-35 years" },
  { img: drop, text: "New York" }
 
];

let cardContainerDetailsArr = [
  { img: dpone, name: "Angela Taylor", location: "Cincinati, OH" },
  { img: dptwo, name: "Mike Johnson", location: "NY City, NY" },
  { img: dpone, name: "Angela Taylor", location: "Cincinati, OH" },
];
function RightSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div lassName="icons">
        <div className={classes.oneContainer}>
          <img
            src={ringlogo}
            style={{
              maxHeight: "7vh",
              zIndex: "9",
              position: "fixed",
              left: "62%",
            }}
            alt="ringlogo"
            className="icons"
          />

          <img
            src={drinklogo}
            style={{
              maxHeight: "6vh",
              minHeight: "5vh",
              zIndex: "9",
              position: "fixed",
              top: "45%",
              left: "57%",
            }}
            alt="drinklogo"
            className="icons"
          />

          <img
            src={likeicon}
            style={{
              maxHeight: "4vh",
              zIndex: "9",
              position: "fixed",
              top: "10%",
              left: "81%",
            }}
            alt="likeicon"
            className="icons"
          />

          <img
            src={loveicon}
            style={{
              maxHeight: "8vh",
              zIndex: "9",
              position: "fixed",
              top: "30%",
              left: "89%",
            }}
            alt="loveicon"
            className="icons"
          />

          <img
            src={calenderlogo}
            style={{
              maxHeight: "12vh",
              zIndex: "9",
              position: "fixed",
              top: "50%",
              left: "90%",
            }}
            alt="calenderlogo"
            className="icons"
          />
        </div>

        <div className={classes.twoContainer}>
          <div
            style={{ minWidth: "25vw", zIndex: "30" }}
            className="icons"
          >
            <div
              style={{
                maxWidth: "22vw",
                minHeight: "5vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                overflowY:"overlay"
              }}
            >
              {basicDetailsArr.map((e,i) => (
                <div
                  style={{
                    margin:"0.4vh"
                  }}

                  className={clsx(classes.basicDetailsContainerStyle, {[classes.basicDetailsContainerStyleConditional]: i%2!==0 })}
                >
                  <img src={e.img} alt="imgg" />
                  <div style={{ fontSize: "1.5vh" }}>{e.text}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "1vh",
                maxWidth: "26vw",
                maxHeight: "55%",
                overflowX: "overlay"
              }}
            >
              {cardContainerDetailsArr.map((e,i) => (
                <div className={clsx(classes.cardContainerStyle, {[classes.cardContainerStyleConditional]: i%2!==0 })}>
              
                  <img src={e.img} alt="dp" style={{ maxHeight: "9vh" }} />

                  <div>
                    <div
                      style={{
                        color: "#333333",
                        fontSize: "2vh",
                        fontWeight: "bold",
                      }}
                    >
                      {e.name}
                    </div>
                    <div style={{ color: "#979696" ,fontSize:"1.5vh"}}>{e.location}</div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#F59B5A",
                      fontSize: "2vh",
                      minWidth: "5vw",
                      padding: "0.9vh",
                      border: "none",
                      borderRadius: "0.6vh",
                      color: "white",
                    }}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>

          <img
            style={{
              maxWidth: "25vw",
              zIndex: "30",
              paddingTop: "3vw",
              position: "absolute",
              paddingLeft: "30vw",
            }}
            src={creditCardPic}
            alt="card pic"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
