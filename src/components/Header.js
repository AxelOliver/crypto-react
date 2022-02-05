import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, Toolbar, Typography, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: '#ED254E',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
}))

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        type: 'dark',
    },
});

const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const {currency, setCurrency} = CryptoState();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => history.push('/')} className={classes.title}>
                            React Crypto
                            <Select variant='outlined'
                                style={{
                                    width: 100,
                                    height: 40,
                                    marginLeft: 15,
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}>
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'AUD'}>AUD</MenuItem>
                            </Select>
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
