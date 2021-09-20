import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) => ({
    justify: {
        display: 'flex',
        justtifyContent: 'center',
    },
    card: {
        margin: theme.spacing(2),
    },
}));

export const MediaCard = ({ projects }) => {
    const classes = useStyles();

    return (
        <Grid className="max-vh-100">
            <Grid className={classes.justify}>
                {projects.map((project) => (
                    <Card className={classes.card} sx={{ maxWidth: 345 }} >
                        <CardMedia
                            component="img"
                            image={project.image}
                            alt={project.name}
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div">
                                {`${project.name}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {`${project.info}`}
                            </Typography>
                        </CardContent>
                        <CardActions className="d-flex justify-content-center p-2">
                            <a id="icons" className="align-self-center p-2" href={project.repo} aria-label="Github" target="_blank"><i className="black fab fa-github fa-3x socialicons"></i></a>
                            <a id="icons" className="align-self-center p-2" href={project.deployed} aria-label="Website" target="_blank">Website</a>
                        </CardActions>
                    </Card>
                ))}
            </Grid>
        </Grid>
    );
};

export default MediaCard;