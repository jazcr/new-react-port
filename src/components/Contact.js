import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    fields: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fieldColor: {
        backgroundColor: 'rgb(165, 165, 165)'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'whitesmoke'
    },
    button: {
        backgroundColor: 'midnightblue',
        color:'whitesmoke',
        padding: '10px 15px',
        fontSize: '15px',
        borderRadius: '15px'
    }
}));

export default function MultilineTextFields() {
    const classes = useStyles();
    const [setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid class="min-vh-100">
            <h1 className={classes.header}>Contact Me</h1>
            <Box
                className={classes.fields}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        className={classes.fieldColor}
                        id="filled-textarea"
                        label="Name"
                        placeholder="Name"
                        multiline
                        variant="filled"
                    />
                </div>
            </Box>
            <Box
                className={classes.fields}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        className={classes.fieldColor}
                        id="filled-textarea"
                        label="Email Address"
                        placeholder="Email"
                        multiline
                        variant="filled"
                    />
                </div>
            </Box>
            <Box
                className={classes.fields}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        className={classes.fieldColor}
                        id="filled-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        placeholder="Please provide a brief description of your project."
                        variant="filled"
                    />
                </div>
            </Box>
            <Grid class="d-flex justify-content-center align-items-center">
                <Button variant="contained" className={classes.button}>Submit</Button>
            </Grid>
        </Grid>
    );
}