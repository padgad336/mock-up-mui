import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { Button } from '@mui/material';

const App = () => {
  return (
    <Fragment>
      <Button style={{ backgroundColor: 'linear-gradient(to right bottom, #52BA95, #82C481 )' }} variant="contained">Contained</Button>
    </Fragment>
  );
}

export default App;
