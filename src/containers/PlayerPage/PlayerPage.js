import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { withStyles } from '@material-ui/core/styles';
import Player from '../../components/Player';

// Css
// import './App.css';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});


class PlayerPage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //     album: [],
  //     songs: [],
  //   }
  // }

  async componentDidMount() {
    const { match } = this.props;

    //
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Player />
      </main>
    );
  }
}

export default withRouter(withStyles(styles)(PlayerPage));
