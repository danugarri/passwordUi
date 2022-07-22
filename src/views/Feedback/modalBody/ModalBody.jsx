import React from 'react';
import { useTranslation } from 'react-i18next';
import { Buttons } from '../../../components/buttons/Buttons';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import PropTypes from 'prop-types';

export const ModalBody = ({ type }) => {
  const { t } = useTranslation(['step3']);
  return (
    <main>
      <section className='modal-header'>
        {type === 'success' ? (
          <CheckCircleOutlineIcon
            style={{ color: 'rgb(20, 216, 20)', fontSize: 50 }}
            className='feedback-icon'
          />
        ) : (
          <ReportProblemOutlinedIcon
            color='error'
            style={{ fontSize: 50 }}
            className='feedback-icon'
          />
        )}
        <section className='modal-text'>
          <p className='modal-text-header  space'>{t(`step3.${type}.header`)}</p>
          <p className='modal-subtitle space'>{t(`step3.subtitle.${type}`)}</p>
        </section>
      </section>
      <Buttons step1={false} step2={true} step3={false} final={true} />
    </main>
  );
};
// Typing props
ModalBody.propTypes = {
  type: PropTypes.string,
};
