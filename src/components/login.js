// LoginRagister.js

import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { changeUserData } from './../store/action/userAction';
import { userAuth } from './action/userAuth';
const styles = {
    root: {
        flexGrow: 1,
        maxWidth: 500,
        margin: "20px auto"
    },
    buttonGridTopPadding: {
        paddingTop: '10px'
    },
};

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 2 }}>
            {props.children}
        </Typography>
    );
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            isLoginValid: false,
            user: {
                email: '',
                password: '',
            },
        }
    }

    handleUserChange = (event) => {
        const { name, value } = event.target;
        let { user } = this.state;

        let userData = {
            ...user,
            [name]: value,
        }
        this.props.changeUserData(userData);
    }

    handleUserSubmit = async (e) => {
        e.preventDefault();
        const { user } = this.state;
        let {auth} = this.props;
        this.setState({
            isLoginValid: true
        })
        if (user.email && user.password) {
            this.props.userAuth(user)
        }
    }

    handleUserClear = () => {
        const { user } = this.state;
        user.email = '';
        user.password = '';
        this.setState({
            isLoginValid: false,
            user
        });
    };
    componentDidUpdate(previousProps, previousState) {
        let { user,auth } = this.props;
        if (previousProps.user !== user) {
            this.setState({
                user
            });
        };
        if(auth ){
            this.props.history.push('/home');
        }
    };

    componentWillMount() {
        let { user,auth } = this.props;
        if (user) {
            this.setState({
                user
            });
        };
        if(auth ){
            this.props.history.push('/home');
        }
    };
    render() {
        const { activeTab, isLoginValid, user } = this.state;
        const {auth } = this.props;
        console.log('auth',this.props.auth);
        return (
            <Paper square style={styles.root}>
                <AppBar position="static">
                    <Tabs
                        value={activeTab}
                        variant="fullWidth"
                        indicatorColor="secondary" >
                        <Tab label="Login" />
                    </Tabs>
                </AppBar>
                <TabContainer>
                    <TextField
                        label="Email" type="email" name="email" margin="dense" variant="outlined" fullWidth
                        value={user && user.email}
                        onChange={this.handleUserChange}
                        error={isLoginValid && !user.email ? true : false}
                        helperText={isLoginValid && !user.email ? 'Email is Required' : ''}
                    />
                    <TextField
                        label="Password" type="password" name="password" margin="dense" variant="outlined" fullWidth
                        value={user && user.password}
                        onChange={this.handleUserChange}
                        error={isLoginValid && !user.password ? true : false}
                        helperText={isLoginValid && !user.password ? 'Password is Required' : ''}
                    />
                    <Grid container spacing={16} style={styles.buttonGridTopPadding}>
                        <Grid item xs={12} md={6}>
                            <Button variant="outlined" size="medium" fullWidth color="primary" onClick={this.handleUserSubmit}>
                               {isLoginValid ? !auth && 'loading...' : 'login' }
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant="outlined" size="medium" fullWidth color="secondary" onClick={this.handleUserClear} >
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </TabContainer>
            </Paper>

        )
    }
}
function mapStateToProps(state) {
    return ({
        user: state.userReducer.user,
        auth: state.userReducer.auth
    });
};
function mapDispatchToProps(dispatch) {
    return ({
        changeUserData: (user) => {
            dispatch(changeUserData(user))
        },
        userAuth: (user) => {
            dispatch(userAuth(user));
        }
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);