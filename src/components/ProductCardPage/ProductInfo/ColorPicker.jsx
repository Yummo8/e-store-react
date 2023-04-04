import React from 'react';

const ColorPicker = ({ colors, currentId, onColorBtnClick }) => {
  return (
    <div className="color-picker">
      {colors.map((item) => (
        <button
          type="button"
          className={
            currentId === item.id ? 'color-picker__item active' : 'color-picker__item'
          }
          key={item.id}
          onClick={onColorBtnClick(item.id)}
        >
          <span
            className="color-picker__item-color"
            style={{ backgroundColor: item.hex }}
          />
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
