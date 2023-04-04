import React from 'react';

export const ItemState = ({ state }) => {
  return (
    <>
      {state && (
        <div className="item__state">
          {state === 'sale' ? (
            <span className="item__state-sale">Sale</span>
          ) : (
            <span className="item__state-new">New</span>
          )}
        </div>
      )}
    </>
  );
};
