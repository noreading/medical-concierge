import React from "react";

class TaskItem extends React.Component {
  toggleDone = uuid => {
    this.props.toggleDone(uuid);
  };

  render() {
    const task = this.props.task;
    const id = `task-${task.uuid}`;

    return (
      <li className="list-group-item">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={task.uuid}
            id={id}
            checked={task.done}
            onChange={e => {
              this.toggleDone(task.uuid);
            }}
          />
          <label
            className={`form-check-label ${task.done ? "done" : ""}`}
            htmlFor={id}
          >
            {task.text}
          </label>
        </div>
      </li>
    );
  }
}

export default TaskItem;
