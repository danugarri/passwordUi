import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    top: ' 50%',
    position: 'absolute',
    left: '50%',
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color='secondary' />
    </div>
  );
}
