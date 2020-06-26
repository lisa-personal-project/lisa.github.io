import React from 'react';
import injectSheet from "react-jss";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import img from "../static/Manifeste-agile.jpg";

const CardAgile = props => {
    const [cardOne, setCardOne] = React.useState(false);
    const handleChangeCardOne = () => {
        console.log(cardOne);
        debugger
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
                        Manifeste agile <br/>
</Typography>
<br/><br/>
                    {!cardOne ? <Typography variant="body2" color="textSecondary" component="p">
                        The twelve rules at the begining of all agile managment methode
</Typography> :

                        <Typography variant="body2" color="textSecondary" component="p">
                            Nous suivons ces principes:
                            <ul style={{listStyleType: "none"}}>
                                <li>
                                    Notre plus haute priorité est de satisfaire le client
                                    en livrant rapidement et régulièrement des fonctionnalités
                                    à grande valeur ajoutée.
                            </li>
                                <li>
                                    Accueillez positivement les changements de besoins,
                                    même tard dans le projet. Les processus Agiles
                                    exploitent le changement pour donner un avantage
                                    compétitif au client.
                            </li>
                                <li>
                                    Livrez fréquemment un logiciel opérationnel avec des
                                    cycles de quelques semaines à quelques mois et une
                                    préférence pour les plus courts.
                            </li>
                                <li>
                                    Les utilisateurs ou leurs représentants et les
                                    développeurs doivent travailler ensemble quotidiennement
                            tout au long du projet.</li>
                                <li>
                                    Réalisez les projets avec des personnes motivées.
                                    Fournissez-leur l’environnement et le soutien dont ils
                                    ont besoin et faites-leur confiance pour atteindre les
                            objectifs fixés.</li>
                                <li>
                                    La méthode la plus simple et la plus efficace pour
                                    transmettre de l’information à l'équipe de développement
                            et à l’intérieur de celle-ci est le dialogue en face à face.</li>
                                <li>
                                    Un logiciel opérationnel est la principale mesure d’avancement.</li>
                                <li>
                                    Les processus Agiles encouragent un rythme de développement
                                    soutenable. Ensemble, les commanditaires, les développeurs
                                    et les utilisateurs devraient être capables de maintenir
                            indéfiniment un rythme constant.</li>
                                <li>
                                    Une attention continue à l'excellence technique et
                            à une bonne conception renforce l’Agilité.</li>
                                <li>
                                    La simplicité – c’est-à-dire l’art de minimiser la
                            quantité de travail inutile – est essentielle.</li>
                                <li>
                                    Les meilleures architectures, spécifications et
                            conceptions émergent d'équipes autoorganisées.</li>
                                <li>
                                    À intervalles réguliers, l'équipe réfléchit aux moyens
                                    de devenir plus efficace, puis règle et modifie son
                            comportement en conséquence.</li>
                            </ul>



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
