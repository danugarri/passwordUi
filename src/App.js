import React from 'react';
import { ProductInformation } from './views/ProductInformation/ProductInformation';
import { Form } from './views/Form/Form';
import { Feedback } from './views/Feedback/Feedback';
import './App.scss';
import { Header } from './components/header/Header';
import { Card } from './components/card/Card';
import { useSelector } from 'react-redux/es/exports';

const App = () => {
  const hover1 = useSelector((state) => state.stepsReducer.steps.hover1);
  const hover2 = useSelector((state) => state.stepsReducer.steps.hover2);
  const hover3 = useSelector((state) => state.stepsReducer.steps.hover3);

  return (
    <div className='App'>
      <main className='App-content'>
        <Header />
        <Card>
          {hover1 && <ProductInformation />}
          {hover2 && <Form />}
          {hover3 && <Feedback />}
        </Card>
      </main>
    </div>
  );
};

export default App;
