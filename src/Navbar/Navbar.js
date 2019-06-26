import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Home from '../Home';

const Navbar = () => (
    <Router>
        <AppBar position="static">
            <Toolbar>
             <Grid justify="space-between" container >
                <Typography variant="h6" style={{ color: '#fff'}}>
                   Boilerplate 
                </Typography>                         
                    {/* if is authenticated, will render authlinks 
                    if not will render guest links
                */}
                <Grid item>
                    <Button align="right">
                        <Link style={{ color:'#fff', textDecoration: 'none'}} underline='none' to="/">
                            Home
                        </Link>
                        
                    </Button>
                </Grid>
           </Grid>
           </Toolbar>
        </AppBar>
        <Switch>
        <Route path="/" component={Home} />
        </Switch>
    </Router>
)
export default Navbar;