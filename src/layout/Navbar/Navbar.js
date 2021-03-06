import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MusicIcon from '@material-ui/icons/LibraryMusic';


const styles = theme => ({
  appBar: {
    position: 'static',
  },
  toolbarTitle: {
    flex: 1,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '10px',
    marginRight: '10px',
  }
});

const Navbar = ({ classes, user }) => (
  <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <MusicIcon fontSize="large" className={classes.icon} />
      <Typography variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
        <NavLink className={classes.link} activeClassName="active" exact to="/">Reactify</NavLink>
      </Typography>
      <div>
        <Button><NavLink activeClassName="active" className={classes.link} exact to="/albums">Albums</NavLink></Button>
        <Button><NavLink activeClassName="active" className={classes.link} exact to="/player">Player</NavLink></Button>
        {user ? (
          <Button><NavLink className={classes.link} activeClassName="active" to="/profile">My Profile</NavLink></Button>
        ) : (
          <Button><NavLink className={classes.link} activeClassName="active" to="/login">Login</NavLink></Button>
        )}
      </div>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = (state/*, otherProps */) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  //
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Navbar);

