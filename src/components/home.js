
//https://reqres.in/api/login

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
const styles ={
    root: {
      flexGrow: 1,
      margin:'20px',
      display: 'flex'
    },
    paper: {
      padding: '15px',
      margin: 'auto',
    },
  };
  

class Home extends Component {

    render() {
        let {user,auth} = this.props;
        console.log('auth',auth);
        return (
            <div style={styles.root}>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={4}/>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={1} style={styles.paper}>
                            <Typography variant="h5" component="h3">
                                Welcome to Redux MR. {user && user.email}
                            </Typography>
                            {auth && 
                            <Typography variant="h5" component="h3">
                             {auth.data && auth.data.token}
                            </Typography>}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}/>
                </Grid>
            </div>
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
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

