import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='LOADING...'
      style={{ display: 'block', margin: 'auto', width: '200px' }}
    />
  </Fragment>
);
export default Spinner;
