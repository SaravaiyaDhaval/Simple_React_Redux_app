import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        color: 'unset',
        textDecoration: 'unset'
    }
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            activeTab: 'login'
        }
    }
    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={styles.grow}>
                            Redux Demo
                        </Typography>
                        <Link to='/' style={styles.link}><Button color="inherit">Login</Button></Link> 
                        <Link to='/home' style={styles.link}><Button color="inherit" >Home</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default Header;