import React from "react";
import Typography from "@material-ui/core/Typography";
import { useContext, useState, useEffect, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Presenta from "../Composant/Presenta";
import Card from "../Composant/Paper";
import Box from "@mui/material/Box";
import Logo from "../../Images/Logo C.png";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}
const useStyles = makeStyles((theme) => ({
  vide2: {
    height: "50px",
  },
  Corp2: {
    width: "98.9vw",
    height: "1800px",
    [theme.breakpoints.down("1000")]: { height: "1500px" },
    [theme.breakpoints.down("660")]: { height: "1350px" },
    backgroundImage: "#F6FEF6",
  },
  bloc: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
    alignItems: "center",
    height: "1500px",
    
    width: "90vw",
    display: "Grid",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("1000")]: { height: "1200px" },
    [theme.breakpoints.down("660")]: { height: "1040px" },
  },
  BlocTitre: {
    width: "92vw",
    
    height: "180px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexdirection: "row",
  },
  BlocTitreEcris: {
    width: "1500px",
    
    minWidth: "300px",
    height: "220px",
    [theme.breakpoints.down("800")]: { height: "150px" },
    [theme.breakpoints.down("600")]: { height: "120px" },
    [theme.breakpoints.down("525")]: { height: "100px" },
  },
  EcrisBleu: {
    fontFamily: " 'Manrope', sans-serif",
    color: "#024097",
    display: "flex",
    flexdirection: "row",
    fontSize: "55px",
    marginTop: "-10px",
    fontWeight: "bold",
    [theme.breakpoints.down("800")]: { fontSize: "38px" },
    [theme.breakpoints.down("600")]: { fontSize: "34px" },
    [theme.breakpoints.down("525")]: { fontSize: "28px" },
  },
  Ecris1: {
    fontFamily: " 'Manrope', sans-serif",
    color: "black",
    display: "flex",
    flexdirection: "row",
    fontSize: "38px",
    marginTop: "10px",
    fontWeight: "bold",
    [theme.breakpoints.down("800")]: { fontSize: "26px", marginTop: "5px" },
    [theme.breakpoints.down("600")]: { fontSize: "21px", marginTop: "5px" },
    [theme.breakpoints.down("525")]: { fontSize: "17px", marginTop: "4px" },
  },
  Ecris2: {
    fontFamily: " 'Manrope', sans-serif",
    color: "black",
    fontSize: "38px",
    marginTop: "-5px",
    fontWeight: "bold",
    marginBottom: "60px",
    [theme.breakpoints.down("800")]: { fontSize: "26px", marginTop: "0px" },
    [theme.breakpoints.down("600")]: { fontSize: "21px", marginTop: "0px" },
    [theme.breakpoints.down("525")]: { fontSize: "17px", marginTop: "0px" },
  },
  BlocLogo: {
    width: "150px",
    height: "150px",
    [theme.breakpoints.down("1000")]: { height: "150px" },
  },
  Logo: {
    width: "190px",
    height: "190px",
    marginTop: "-30px",
    [theme.breakpoints.down("600")]: { width: "150px", height: "150px" },
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
    }, []);
    return size;
  }
  useWindowSize();
  //************************************************* */
  return (
    <div>
      <div className={classes.Corp2} id="2">
        <div className={classes.vide2}>
          {" "}
          <Typography> </Typography>{" "}
        </div>
        <div className={classes.BlocTitre}>
          <div className={classes.BlocTitreEcris}>
            <div style={{ height: "30px" }}> </div>{" "}
            <Typography
              style={{ display: "flex", flexdirection: "row" }}
              component="div"
              align={"left"}
            >
              <Box className={classes.EcrisBleu}>Servy </Box>{" "}
              <Box className={classes.Ecris1}> , Your Place To Start Your </Box>{" "}
            </Typography>{" "}
            <Typography
              className={classes.Ecris2}
              component="div"
              align={"left"}
            >
              Selling Online Business...{" "}
            </Typography>{" "}
          </div>{" "}
          <div className={classes.BlocLogo}>
            <div style={{ height: "30px" }}> </div>{" "}
            <img src={Logo} className={classes.Logo} alt="fireSpot" />
          </div>{" "}
        </div>
        <div className={classes.bloc}>
          <Presenta
            num="1"
            Titre="Build a Shop to publish your Gorgeous Products."
            Desc=" Create a shop and start filling it with your physical shop products so you can start beiung known to the customers"
          />
          <Presenta
            num="2"
            Titre="Start for free and Grow your business by Servy Packs."
            Desc=" Create a shop and start filling it with your physical shop products so you can start beiung known to the customers"
          />
          <Presenta
            num="3"
            Titre="Custimize your Shop to be Different."
            Desc=" Create a shop and start filling it with your physical shop products so you can start beiung known to the customers"
          />
        </div>{" "}
      </div>{" "}
    </div>
  );

  //******************************************** */
}
