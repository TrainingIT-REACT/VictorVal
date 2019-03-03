import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import UserIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import pink from '@material-ui/core/colors/pink';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = () => ({
  card: {
    maxWidth: 400,
  },
  avatar: {
    backgroundColor: pink[500],
  },
});


const UserProfile = ({ classes, user }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            <UserIcon />
          </Avatar>
        }
        // title={user ? user.username : (<span className="usernameTitle">John Doe</span>)}
        title={<span className="usernameLabel">{user ? user.username : 'John Doe'}</span>}
        subheader={<span className="emailLabel">{user ? user.email : 'johndoe@email.com'}</span>}
      />
      <CardContent>
        {'TODO - user profile contents ...'}
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(UserProfile);
