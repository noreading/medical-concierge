import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Step4 extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateStep(4);

    this.state = {
      selected: false
    };
  }

  select = e => {
    console.log("change me");
    this.setState(state => {
      state.selected = true;
      return state;
    });
  };

  render() {
    return (
      <div>
        <h2>What is your living situation?</h2>

        <div className="form-group">
          <select
            type="text"
            name="living_situation"
            className="form-control"
            onChange={this.select}
          >
            <option>I am living alone, with family support</option>
            <option>I am living alone, without family support</option>
            <option>I am living in a relationship</option>
          </select>
        </div>

        {this.state.selected && (
          <Fragment>
            <br />
            <h3>Get home after release</h3>

            <ul className="list-group">
              <li className="list-group-item">
                <i className="fa fa-fw fa-taxi" />
                &nbsp; Get a taxi
              </li>
              <li className="list-group-item">
                <i className="fa fa-fw fa-bus" />
                &nbsp; Use public transport
              </li>
              <li className="list-group-item">
                <i className="fa fa-fw fa-phone" />
                &nbsp; Call a friend
              </li>
            </ul>

            <br />

            <h3>Get personal assistance at home</h3>

            <input className="form-control" placeholder="Your location" />
            <br />

            <ul className="list-group">
              <li className="list-group-item">
                <strong>Care 4 you</strong>
                <br />
                2 W 22nd St<br />
              </li>
            </ul>

            <br />
            <Link to="/5" className="btn btn-primary">
              Tips for the home&nbsp;<i className="fa fa-arrow-right" />
            </Link>
          </Fragment>
        )}

        <br />
        <br />
      </div>
    );
  }
}

export default Step4;
