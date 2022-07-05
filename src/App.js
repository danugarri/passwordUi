import React from 'react';
import OpenbankLogo from './assets/img/key_openbank.png';
import Step1 from './views/ProductInformation';
import Step2 from './views/Form';
import Step3 from './views/Feedback';
import './App.scss';
import { Header } from './components/header/Header';

const App = () => {
  return (
    <div className='App'>
      <main className='App-content'>
        <Header />
      </main>
    </div>
  );
};

export default App;
