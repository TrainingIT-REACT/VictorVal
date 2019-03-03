import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';

import UserProfile from '../../components/UserProfile';

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


class UserPage extends React.PureComponent {
  render() {
    const { classes, user } = this.props;
    return (
      <main className={classes.main}>
        <UserProfile user={user} />
      </main>
    );
  }
}

const mapStateToProps = (state/*, otherProps */) => ({
  user: state.user.user,
})

const mapDispatchToProps = (dispatch) => ({
  // addUser: user => dispatch(addUser(user)),
})

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(UserPage);
