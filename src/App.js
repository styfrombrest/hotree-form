import React from 'react';

// import { fetchQueue, loadBorder, loadBordersList, setFilter } from './../../actions';

import Header from './components/Header/';
import AboutForm from './containers/AboutForm/';
// import Form from './components/Form/';

import Button from './components/Button/';

import './global-styles';

const App = () => (
  <div>
    <Header />
    <AboutForm />

    {/*     <Form title="Coordinator" />

        <Form title="When" /> */}

    <Button title="Publish Event" uppercase clickHandler={() => console.log('click!')} />
  </div>
);

// TODO: REMOVE ROUTER!
export default App;
