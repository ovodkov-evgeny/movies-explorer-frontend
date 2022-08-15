import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ value, handler }) {
  return (
    <label className="filter-checkbox" htmlFor="shorts">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        name="shorts"
        id="shorts"
        checked={value}
        onChange={handler}
      />
      <div className="filter-checkbox__switch">
        <div className="filter-checkbox__switch-slider" />
      </div>
    </label>
  );
}
