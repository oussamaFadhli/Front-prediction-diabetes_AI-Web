import React from 'react';

const Button = ({ variant = 'primary', children }) => {
  return (
    <button type="button" className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;
