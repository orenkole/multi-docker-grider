import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Test travis: Set PGPASSWORD to postgrespassword!
      <Link to="/">Go back home</Link>
    </div>
  );
};
