import React from 'react';
import injectSheet from "react-jss";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import img from "../static/dev.jpg";

const CardAgile = props => {
    const [cardOne, setCardOne] = React.useState(false);
    const handleChangeCardOne = () => {
        console.log(cardOne);
        setCardOne(!cardOne);
        props.f();
    };
    return (
        <Card style={!cardOne?{ maxWidth: 345, minHeight: 345 }:{ minWidth: 345,width:"70vw", minHeight: 345 }}>
            <CardActionArea>
                <CardMedia
                    style={{ height: 145 }}
                    image={img}
                    title="Manifest agile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Les missions du developpeur/euse
</Typography>
                    {!cardOne ? <Typography variant="body2" color="textSecondary" component="p"> 
                    Les missions principales d’un développeur web consistent à réaliser une analyse des besoins du client...
</Typography> :

                        <Typography variant="body2" color="textSecondary" component="p">
                           Les missions principales d’un développeur web consistent à réaliser une analyse des besoins du client, afin de concevoir la conception du site internet. Ensuite, pour mener à bien sa mission, il doit aussi créer l’architecture technique du site, par le biais de logiciels et outils nécessaires à la création d’un site web, grâce au langage informatique appris (PHP, SQL, Java Script…). 
Enfin, la dernière étape consiste à mettre en place des tests de vérification, afin de s’assurer du bon fonctionnement des différentes fonctionnalités mises en place. Le projet doit ensuite être approuvé par le client, qui peut demander à ce que des améliorations soient éventuellement apportées au site, au fur et à mesure de son utilisation.



</Typography>}
                </CardContent>
            </CardActionArea>
            <CardActions>

                <Button size="small" color="primary" onClick={() => handleChangeCardOne()}>
                    
                {!cardOne?"Learn More":"See Less"}
</Button>
            </CardActions>
        </Card>
    )

}

export default CardAgile;
