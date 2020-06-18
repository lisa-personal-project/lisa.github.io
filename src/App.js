import React from 'react';
import injectSheet from "react-jss";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from './static/raw.jpg';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

import styles from './App.css';

function App() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    console.log(checked);
    setChecked(!checked);
  };
  return (
    <div className="App">{!checked &&
      <Button style={{width: "100vw", height: "100vh",
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
  
          <div style={{ width: "100vw", height: "70vh", fontSize: 80, fontWeigth: 700, color: "white" }}> DEVELOPPEUR WEB</div>
          <div>
            <ExpandMoreIcon style={{color:"white"}}/>
          </div>
          </div>
          </Button>}
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Button className="App-header" style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "stretch"
        }} onClick={() => handleChange()}>
          <header  style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            alignItems: "center",
            alignContent: "stretch"
          }}>
            <Button style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              justifyContent: "space-around",
              alignItems: "center",
              alignContent: "stretch"
            }} onClick={() => handleChange()}>
              <div style={{ width: "70vw", height: "70vh", fontSize: 80, fontWeigth: 700, color: "white" }}> DEVELOPPEUR WEB</div>
              <div>
              En quoi consiste le développement web  ?
              Le développement web repose sur l’utilisation des langages (HTML/CSS, JavaScript, PHP…) pour écrire des programmes qui sont ensuite exécutés par les ordinateurs. Les instructions sont mises en place sur Internet et sont effectuées sur des serveurs. En fonction des besoins des propriétaires du site ou des pages web, ces dernières peuvent être constituées uniquement de textes et d’éléments graphiques ressemblant à un document ou être interactives en affichant des informations qui évoluent (panier d’achat, par exemple).
              
              Le métier du développeur web
              Le développeur web s’occupe de la réalisation de l’ensemble des fonctionnalités techniques d’un site Internet ou d’une application web. En fonction des exigences présentées dans un cahier des charges précis, ce spécialiste analyse les besoins et définit la solution technique adaptée. Il développe ensuite les fonctionnalités du site ou de l’application web en rédigeant des lignes de code. Ses missions incluent également le diagnostic et la résolution de problèmes détectés sur un site déjà en ligne. La polyvalence, l’autonomie, la capacité d’adaptation ainsi que le respect des délais figurent parmi les qualités de ce professionnel. 
              
              Quelles sont les formations adéquates pour devenir développeur web  ?
              Différentes formations pour développeur web sont dispensées au sein des grandes écoles. L’IESA multimédia propose ainsi un Bac+3 en développement web, avec le Bachelor Chef de projet multimédia, accessible aux Bacheliers ou aux titulaires d’un Bac+1 ou Bac+2. La spécialisation en développement web s’effectue lors de la 3ème année.
              
              Pour obtenir un Bac+5 en développement web, les candidats doivent poursuivre deux années d’études supplémentaires pour acquérir des compétences techniques plus pointues dans ce domaine. À l’IESA multimédia, ils peuvent continuer leur cursus avec le Mastère Expert en stratégie digitale avec une spécialisation en direction de projet et développement web. Délivrée sur deux années, cette formation se déroule en alternance, sur la base de 4 jours en entreprise et 1 journée à l’école. Avec des périodes intensives dédiées à des projets de groupe : création d’un site en responsive design, développement d’une application mobile, compétition interclasses…
              </div>
            </Button>
          </header>
        </Button>
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