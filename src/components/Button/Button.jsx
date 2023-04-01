import React from 'react';

const Button = ({children, clickFunction, id}) => {
    return (
        <>
          <button id={id} className="btn  btn-error mx-auto block my-5" onClick={clickFunction}>{children}</button>
        </>
    );
};

export default Button;