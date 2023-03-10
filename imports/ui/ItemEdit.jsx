import React from 'react';
import PropTypes from 'prop-types';

const ItemEdit = (props) => (
  <span>
    <div className="item-check">
      <input type="checkbox" disabled="disabled"/>
    </div>
    <div className="item-name">
      <input name="item_name" type="text" value={props.text} autoFocus
        onKeyPress={props.onKeyPressed} onBlur={props.onCancel} onChange={props.onInputChange}/>
    </div>
    <div className="item-count">
    </div>
    <div className="item-delete">
      <img src="/images/cross.svg"></img>
    </div>
  </span>
);

ItemEdit.propTypes = {
  text: PropTypes.string.isRequired,
  onFinish: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onKeyPressed: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default ItemEdit;
