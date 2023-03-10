import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import ListHeader from './ListHeader';
import ListEditHeader from './ListEditHeader';

const ListContent = (p) => {
  if (!p.collapsed) {
    return (
      <ul>
        {p.children}
      </ul>
    );
  }
  return null;
}

const List = (props) => (
  <div className="tasks-list">
    {props.edit
      ? (<ListEditHeader editNameText={props.editNameText} changeCallback={props.changeValue}
            finishEdit={props.finishEdit}
            inputKeyPressed={props.inputKeyPressed}
            cancelEdit={props.cancelEdit}
        />)
      : (<ListHeader name={props.name} clickDelete={props.clickDelete} startEdit={props.startEdit}
                     toggleCollapsed={props.toggleCollapsed} collapsed={props.collapsed} done={props.done}
                     progress={props.progress}
          />)
     }
     <div className="progress-bar" style={{width: `${props.progress}%`}} />
     <CSSTransitionGroup transitionName="collapse" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
       {ListContent(props)}
     </CSSTransitionGroup>
  </div>
)

List.propTypes = {
  name: PropTypes.string.isRequired,
  edit: PropTypes.bool.isRequired,
  editNameText: PropTypes.string.isRequired,
  clickDelete: PropTypes.func.isRequired,
  startEdit: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  finishEdit: PropTypes.func.isRequired,
  inputKeyPressed: PropTypes.func.isRequired,
  children: PropTypes.array,
  collapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired
};

export default List;
