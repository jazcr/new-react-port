import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import headShot from '../Assets/picture.jpg';

const useStyles = makeStyles((theme) => ({
    font: {
        color: 'white',
        padding: '5px',
        margin: '1%',
        lineHeight: '22px',
        fontSize: '1.20rem',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();
    return (
        <Box className="min-vh-100 container-fluid" height="100vh" sx={{ flexGrow: 1 }}>
            <Grid className="d-flex justify-content-center">
                <img src={headShot} height="200px" alt="Resume" />
            </Grid>
            <Grid className="d-flex justify-content-center" container spacing={2}>
                <Container id="about-me">
                    <h1 className="m-1">
                        About Me
                    </h1>
                    <Typography className={classes.font} margin={2} variant="body1" gutterBottom>
                    Belive it or not, my path to Web Development started in <em>Psychology</em>. I started my college journey learning about the human mind and behavior because I knew I wanted to positively impact people's lives. Little did I know, building convenient, yet beautiful websites has become one of the easiest ways to make an impact on someone's daily life.
                    </Typography>
                </Container>
            </Grid>
            <Grid className="d-flex justify-content-center" container spacing={2}>
                <Container id="about-me">
                    <h1 className="m-1">
                        Skills
                    </h1>
                    <Typography className={classes.font} margin={2} variant="body1" gutterBottom>
                        CLI, Git, HTML5, CSS, JavaScript/jQuery, MERN - (Mongoose, Express.js, React.js, Node.js), MySQL
                    </Typography>
                </Container>
            </Grid>
            <Grid className="d-flex justify-content-center" container spacing={2}>
                <Container id="about-me">
                    <h1 className="m-1">
                        Education
                    </h1>
                    <Typography className={classes.font} margin={2} variant="body1" gutterBottom>
                        Fullstack WebDevelopment Bootcamp Certificate - University of Denver 2021
                        Associates of Arts - Front Range Community College 2018
                    </Typography>
                </Container>
            </Grid>
        </Box>
    );
}