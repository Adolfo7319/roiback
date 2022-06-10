import React from 'react';
import './Input.Styles.css'

const Input = ({ data, setData, tipo, label, placeholder, name }) => {

  const handleChangeInput = (e) => {
    setData(e.target.value)
  }  

  return (
    <div>
      <label className="label">
        {label}
      </label>

      <div className="bloqueInput">
        <input
          className="input"
          id={name}
          type={tipo}
          value={data}
          placeholder={placeholder}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
}

export default Input