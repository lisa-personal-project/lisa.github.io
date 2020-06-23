import React from 'react';
import injectSheet from "react-jss";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from './static/raw.jpg';

import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import styles from './App.css';
import CardOne from './components/Card';

import CardTwo from './components/Card2';
import CardThree from './components/Card3';
import CardFour from './components/Card4';

function App() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    console.log(checked);
    setChecked(!checked);
  };
  
  return (
    <div className="App">{!checked ?
      <Button style={{
        width: "100vw", height: "100vh",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "stretch",
      }} onClick={() => handleChange()}>
        <div className="App-header" style={{
          display: "flex !important",
          flexDirection: "column !important",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "stretch"
        }}>

          <div>
            <div style={{ width: "100vw", height: "80vh", fontSize: 80, fontWeigth: 700, color: "white" }}> DEVELOPPEUR WEB</div>
            <div>
              Click here

            </div>
            <ExpandMoreIcon style={{ color: "white" }} />
          </div>
        </div>
      </Button> : <></>} <Slide direction="up" in={checked} mountOnEnter unmountOnExit>

        <div style={{
          width: "100vw", height: "100vh",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "stretch"
        }}>
          <div style={{    width:"100%",display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "stretch"}}>

         <CardOne />
         
         <CardTwo />
         
         <CardThree />
         
         <CardFour />
          </div>
        </div>

      </Slide>

    </div>
  );
}

export default injectSheet(styles)(App);



/**
 *  <div style={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} style={{ width: "70vw", height: "20vh" }}>
              <div className={{
                padding: "theme.spacing(2)",
                backgroundColor: "#282c34"
              }}>DEVELOPPER WER</div>
            </Grid>
            <Grid item xs={6}>
              <div className={{
                padding: "theme.spacing(2)",
                backgroundColor: "#282c34"
              }}>xs=6</div>
            </Grid>
            <Grid item xs={6}>
              <div className={{
                padding: "theme.spacing(2)",
                backgroundColor: "#282c34"
              }}>xs=6</div>
            </Grid>
            <Grid item xs={3}>
              <div className={{
                padding: "theme.spacing(2)",
                backgroundColor: "#282c34"
              }}>xs=3</div>
            </Grid>
            <Grid item xs={3}>
              <div className={{
                padding: "theme.spacing(2)",
                backgroundColor: "#282c34"
              }}>xs=3</div>
            </Grid>
            <Grid item xs={3}>
              <div className={{
                padding: "theme.spacing(2)",
                backgroundColor: "#282c34"
              }}>xs=3</div>
            </Grid>
            <Grid item xs={3}>
              <div className={{
                padding: "theme.spacing(2)",
                color: "#282c34"
              }}>xs=3</div>
            </Grid>
          </Grid>
        </div>
 */