import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  albumGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  album: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  albumMedia: {
    paddingTop: '56.25%', // 16:9
  },
  albumContent: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '10px',
    marginRight: '10px',
  }
});


const AlbumList = ({ classes, albums }) => {

  return (
    <div className={classNames(classes.layout, classes.albumGrid)}>
      <Grid container spacing={40}>
        {albums.map(album => (
          <Grid item key={album.id} sm={6} md={4} lg={3}>
            <NavLink activeClassName="active" className={classes.link} exact to={`/albums/${album.id}`}>
              <Card className={classes.album}>
                <CardMedia
                  className={classes.albumMedia}
                  image={album.cover} // eslint-disable-line max-len
                  title="Image title"
                />
                <CardContent className={classes.albumContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {album.name}
                  </Typography>
                  <Typography>
                    {album.artist}
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(AlbumList);
