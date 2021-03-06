import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { modalStyle } from './feedbackConsts';
import './Feedback.scss';
import { ModalBody } from './modalBody/ModalBody';

export const Feedback = ({ step3, responseOk }) => {
  // styles

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 'fit-content',
      height: '25%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  // Open Modal state
  const [open, setOpen] = useState(false);
  // Open modal if it is the step3
  useEffect(() => {
    step3 ? handleOpen() : handleClose();
  }, [step3]);
  //  Handling Modal
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Modal body
  const body = (
    <div style={modalStyle} className={classes.paper}>
      {responseOk === 200 ? <ModalBody type='success' /> : <ModalBody type='error' />}
      <Feedback />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

// Typing props
Feedback.propTypes = {
  step3: PropTypes.bool,
  responseOk: PropTypes.number,
};
