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
        setCardOne(!cardOne);
    };
    return (
        <Card style={{ maxWidth: 345, maxHeight: 345, minHeight: 335 }}>
            <CardActionArea>
                <CardMedia
                    style={{ height: 145 }}
                    image={img}
                    title="Manifest agile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Manifeste agile
</Typography>
                    {!props.cardOne ? <Typography variant="body2" color="textSecondary" component="p">
                        The twelve rules at the begining of all agile managment methode
</Typography> :

                        <Typography variant="body2" color="textSecondary" component="p">
                            Nous suivons ces principes:
                            Notre plus haute priorité est de satisfaire le client
                            en livrant rapidement et régulièrement des fonctionnalités
                            à grande valeur ajoutée.

                            Accueillez positivement les changements de besoins,
                            même tard dans le projet. Les processus Agiles
                            exploitent le changement pour donner un avantage
                            compétitif au client.

                            Livrez fréquemment un logiciel opérationnel avec des
                            cycles de quelques semaines à quelques mois et une
                            préférence pour les plus courts.

                            Les utilisateurs ou leurs représentants et les
                            développeurs doivent travailler ensemble quotidiennement
                            tout au long du projet.

                            Réalisez les projets avec des personnes motivées.
                            Fournissez-leur l’environnement et le soutien dont ils
                            ont besoin et faites-leur confiance pour atteindre les
                            objectifs fixés.

                            La méthode la plus simple et la plus efficace pour
                            transmettre de l’information à l'équipe de développement
                            et à l’intérieur de celle-ci est le dialogue en face à face.

                            Un logiciel opérationnel est la principale mesure d’avancement.

                            Les processus Agiles encouragent un rythme de développement
                            soutenable. Ensemble, les commanditaires, les développeurs
                            et les utilisateurs devraient être capables de maintenir
                            indéfiniment un rythme constant.

                            Une attention continue à l'excellence technique et
                            à une bonne conception renforce l’Agilité.

                            La simplicité – c’est-à-dire l’art de minimiser la
                            quantité de travail inutile – est essentielle.

                            Les meilleures architectures, spécifications et
                            conceptions émergent d'équipes autoorganisées.

                            À intervalles réguliers, l'équipe réfléchit aux moyens
                            de devenir plus efficace, puis règle et modifie son
                            comportement en conséquence.


</Typography>}
                </CardContent>
            </CardActionArea>
            <CardActions>

                <Button size="small" color="primary" onClick={() => handleChangeCardOne()}>
                    Learn More
</Button>
            </CardActions>
        </Card>
    )

}

export default CardAgile;
