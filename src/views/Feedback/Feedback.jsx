import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Buttons } from '../../components/buttons/Buttons';
import PropTypes from 'prop-types';
import { modalStyle } from './feedbackConsts';
import './Feedback.scss';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';

export const Feedback = ({ step3, responseOk }) => {
  // Translations
  const { t } = useTranslation(['step3']);
  // styles

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '30rem',
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
      {/* success */}
      {responseOk === 200 ? (
        <main>
          <section className='modal-header'>
            <CheckCircleOutlineIcon
              style={{ color: 'rgb(20, 216, 20)', fontSize: 50 }}
              className='feedback-icon'
            />
            <section className='modal-text'>
              <p className='modal-text-header  space'>{t('step3.success.header')}</p>
              <p className='modal-subtitle space'>{t('step3.subtitle.success')}</p>
            </section>
          </section>
          <Buttons step1={false} step2={true} step3={false} final={true} />
        </main>
      ) : (
        <main>
          <section className='modal-header'>
            {/* error */}
            <ReportProblemOutlinedIcon
              color='error'
              style={{ fontSize: 50 }}
              className='feedback-icon'
            />
            <section className='modal-text'>
              <p className='modal-text-header  space'>{t('step3.error.header')}</p>
              <p className='modal-subtitle space'>{t('step3.subtitle.error')}</p>
            </section>
          </section>
          <Buttons step1={false} step2={true} step3={false} final={true} />
        </main>
      )}
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
