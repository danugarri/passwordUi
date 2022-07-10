import React from 'react';
import { ProductInformation } from './views/ProductInformation/ProductInformation';
import { Form } from './views/Form/Form';
import { Feedback } from './views/Feedback/Feedback';
import './App.scss';
import { Header } from './components/header/Header';
import { Card } from './components/card/Card';
import { useSelector } from 'react-redux/es/exports';
import Spinner from './components/spinner/Spinner';

const App = () => {
  // Redux store
  const step1 = useSelector((state) => state.stepsReducer.steps.step1);
  const step2 = useSelector((state) => state.stepsReducer.steps.step2);
  const step3 = useSelector((state) => state.stepsReducer.steps.step3);
  // Type number
  const responseOk = useSelector((state) => state.submitFormReducer.status);
  const loading = useSelector((state) => state.submitFormReducer.loading);

  return (
    <div>
      <Header />
      {/* iF loading not to render */}
      {!loading && (
        <Card>
          {step1 && <ProductInformation />}
          {step2 && <Form />}
          {step3 && <ProductInformation />}
        </Card>
      )}
      {!loading ? <Feedback step3={step3} responseOk={responseOk} /> : <Spinner />}
    </div>
  );
};

export default App;
