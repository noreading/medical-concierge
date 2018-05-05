import React from "react";
import TaskItem from "./TaskItem";

class Step6 extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateStep(6);

    this.state = {
      tasks: {
        "6ff1ebfe-2b56-493c-83b8-c0e5ff45fcaa": {
          uuid: "6ff1ebfe-2b56-493c-83b8-c0e5ff45fcaa",
          text: "Get your first appointments at the closest physiotherapist.",
          done: true
        },
        "922b1464-d8f3-4668-b3b2-37d59492f3a6": {
          uuid: "922b1464-d8f3-4668-b3b2-37d59492f3a6",
          text:
            "Get an appointment at your primary doctor and bring your documents.",
          done: false
        },
        "ea9b3cc6-8996-4c64-96f4-d6e1dc34649f": {
          uuid: "ea9b3cc6-8996-4c64-96f4-d6e1dc34649f",
          text: "Go to the nearest medical supply store to get a custom brace.",
          done: false
        },
        "1f3a623d-a022-4cd7-a586-62e8bf51cf4e": {
          uuid: "1f3a623d-a022-4cd7-a586-62e8bf51cf4e",
          text: "Get a new pair of shoes without laces, if you don't have one.",
          done: false
        },
        "1630c4e4-cbbf-49c0-a2c5-9960a5902136": {
          uuid: "1630c4e4-cbbf-49c0-a2c5-9960a5902136",
          text:
            "Check your entitlement to sickness benefit with your health insurance.",
          done: false
        },
        "2dd91b37-fc7c-4faa-ae6d-f7889410bfab": {
          uuid: "2dd91b37-fc7c-4faa-ae6d-f7889410bfab",
          text:
            "Inform your employer that you might not be able to work for several months.",
          done: false
        }
      }
    };
  }

  toggleDone = uuid => {
    this.setState(state => {
      state.tasks[uuid].done = !this.state.tasks[uuid].done;
      return state;
    });
  };

  render() {
    return (
      <div>
        <h2>Your next tasks</h2>

        <ul className="list-group tasks">
          {Object.keys(this.state.tasks).map(uuid => {
            const task = this.state.tasks[uuid];

            return (
              <TaskItem
                task={task}
                key={task.uuid}
                toggleDone={this.toggleDone}
              />
            );
          })}
        </ul>

        <br />
        <br />
      </div>
    );
  }
}

export default Step6;
