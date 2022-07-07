import React from 'react';
import { ProductInformation } from './views/ProductInformation/ProductInformation';
import { Form } from './views/Form/Form';
import { Feedback } from './views/Feedback/Feedback';
import './App.scss';
import { Header } from './components/header/Header';
import { Card } from './components/card/Card';
import { useSelector } from 'react-redux/es/exports';

const App = () => {
  const step1 = useSelector((state) => state.stepsReducer.steps.step1);
  const step2 = useSelector((state) => state.stepsReducer.steps.step2);
  const step3 = useSelector((state) => state.stepsReducer.steps.step3);

  return (
    <div className='App'>
      <main className='App-content'>
        <Header />
        <Card>
          {step1 && <ProductInformation />}
          {step2 && <Form />}
          {step3 && <Feedback />}
        </Card>
      </main>
    </div>
  );
};

export default App;
