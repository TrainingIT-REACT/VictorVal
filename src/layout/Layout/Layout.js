import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

import Navbar from '../Navbar';
import Footer from '../Footer';


const styles = theme => ({
  container: {
    minHeight: '100%',
  },
  main: {
    overflow: 'auto',
    paddingBottom: '100px',
  },
  footer: {
    position: 'realtive',
    height: '100px',
    marginTop: '-100px',
    clear: 'both',
  }
  // content: {
  //   display: 'flex',
  //   minHeight: '100%',
  //   flexDirection: 'column',
  // },
});

const Layout = ({ classes, children }) => (
  <React.Fragment>
    <CssBaseline />
    <Navbar />
    <div className={classes.container}>
      <main className={classes.main}>
        { children }
      </main>
    </div>
    <Footer className={classes.footer} />
  </React.Fragment>
);

export default withStyles(styles)(Layout);
