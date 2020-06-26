import React from 'react';
import injectSheet from "react-jss";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import img from "../static/langage.jpg";

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
                        Les principaux langages du web d'aujourd'hui
</Typography>
                    {!cardOne ? <Typography variant="body2" color="textSecondary" component="p">
                    Le développeur doit connaître les principaux langages...
</Typography> :

                        <Typography variant="body2" color="textSecondary" component="p">
                            <ul style={{listStyleType: "none"}}>
                                <li>Langage Java    </li>
                                <li>JavaScript</li>
                                <li>J2EE</li>
                                <li>J2ME</li>
                                <li>Langage C/C++</li>
                                <li>Langage Pascal</li>
                                <li>Langage Ada</li>
                                <li>Langage C#</li>
                                <li>Langage Cobol</li>
                                <li>Langage Fortran</li>
                                <li>Langage HTML</li>
                                <li>Langage Lisp</li>
                                <li>Langage Perl</li>
                                <li>Langage PHP</li>
                                <li>Langage SQL</li>
                                <li>Langage Visual Basic</li>
                                <li>WLangage</li>
                            </ul>

Le développeur doit connaître les principaux langages, utilisés sur le marché, afin d’être polyvalent mais surtout, pour mieux maîtriser et appréhender une nouvelle technologie, en fonction des fonctionnalités nécessaires à la réalisation du projet client.
Le métier est constamment en évolution et les technologies du développement web changent très régulièrement. Aujourd’hui, la technologie leader du marché, en ce qui concerne le développement web est le JavaScript. De plus, une multitude de « Framework » se basent à partir de cette technologie, dont les plus populaires aujourd’hui, sont le VueJs, AngularJs et le ReactJs.


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
