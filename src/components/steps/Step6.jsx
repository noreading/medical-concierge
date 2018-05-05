import React from "react";
import TaskItem from "./TaskItem";

class Step6 extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateStep(6);
  }

  render() {
    return (
      <div>
        <h2>Your next tasks</h2>

        <ul className="list-group tasks">
          <TaskItem
            text="Get an appointment at a physiotherapist."
            done={false}
          />
          <TaskItem
            text="Get an appointment at your primary doctor."
            done={false}
          />
          <TaskItem text="Go to the next medical supply store." done={false} />
          <TaskItem text="Get shoes without laces." done={false} />
          <TaskItem
            text="Check your entitlement to sickness benefit."
            done={false}
          />
        </ul>

        <br />
        <br />
      </div>
    );
  }
}

export default Step6;
