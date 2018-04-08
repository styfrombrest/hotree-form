import React from 'react';
import Header from './components/Header/';
import AboutForm from './containers/AboutForm/';
// import Form from './components/Form/';

import './global-styles';

const App = () => (
  <div>
    <Header />
    <AboutForm title="About" />

    {/*     <Form title="Coordinator" />

    <Form title="When" /> */}
  </div>
);

export default App;
