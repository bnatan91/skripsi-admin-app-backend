import React from 'react';

function Modal(props) {
  const onClickHandler = (e) => {
    e.preventDefault();
    props.onBack(false);
  };
  return (
    <div>
      <button onClick={onClickHandler}>
        <p>back</p>
      </button>
    </div>
  );
}

export default Modal;
