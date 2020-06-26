import React from 'react';
import injectSheet from "react-jss";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import img from "../static/diplome.jpg";

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
                    La formation<br/>
</Typography>
<br/><br/>
                    {!cardOne ? <Typography variant="body2" color="textSecondary" component="p">
                    De nombreuses formations offrent la possibilité de préparer le métier de développeur web...
</Typography> :

                        <Typography variant="body2" color="textSecondary" component="p">
                           De nombreuses formations offrent la possibilité de préparer le métier de développeur web. Il est conseillé d’obtenir, au préalable, un diplôme de spécialisation dans l’informatique. Pour cela, il existe des formations courtes, comme celles prévues dans le programmes des instituts universitaires de technologie ou des brevets de techniciens supérieurs en informatique. Mais il est possible, ensuite, de poursuivre un cursus d’études supérieurs pour obtenir un diplôme de master spécialisé (master de méthodes informatiques appliquées à la gestion des entreprises, diplôme d’ingénieur, master professionnel), ou encore, d’intégrer des écoles d’ingénieur. 


</Typography>}
                </CardContent>
            </CardActionArea>
            <CardActions>
            <br/>
                <Button size="small" color="primary" onClick={() => handleChangeCardOne()}>
                    {!cardOne?"Learn More":"See Less"}
</Button>
            </CardActions>
        </Card>
    )

}

export default CardAgile;
