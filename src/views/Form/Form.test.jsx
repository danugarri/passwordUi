import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Form } from './Form';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../test/utils/i18n';

describe('the Form component', () => {
  test('it renders correctly', () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Form />
        </I18nextProvider>
      </Provider>
    );
  });
});
