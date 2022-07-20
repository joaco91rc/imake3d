import "./Loader.css";
import * as React from 'react';

const Loader = () => {
  return (
    <>
    <div className="loader-container">
      <div className="lds-heart">
        <div />
      </div>
    </div>
    </>
  );
};

export default Loader;
