import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { ProductInformation } from './ProductInformation';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../test/utils/i18n';

describe('the ProductInformation component', () => {
  test('it renders correctly', () => {
    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ProductInformation />
        </I18nextProvider>
      </Provider>
    );
  });
});
