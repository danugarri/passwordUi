import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Buttons } from '../../components/buttons/Buttons';

export const Feedback = ({ step3 }) => {
  const { t } = useTranslation(['step3']);
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 'fit-content',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    step3 ? handleOpen() : handleClose();
  }, [step3]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {/* success */}
      <section>
        <p className='header'>{t('step3.success.header')}</p>
      </section>
      {/* error */}
      <section>
        <p className='header'>{t('step3.error.header')}</p>
      </section>
      <Buttons step1={false} step2={true} step3={false} final={true} />
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
