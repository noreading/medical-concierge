import React from "react";
import { Link, withRouter } from "react-router-dom";

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateStep(3);
  }

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    console.log(this);
  };

  render() {
    return (
      <div>
        <h2>Find a physiotherapist near you</h2>

        <input className="form-control" placeholder="Your location" />
        <br />
        <img src="/google-map.png" style={{ maxWidth: "100%" }} alt="" />
        <br />
        <br />
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Kima Center for Physiotherapy</strong>
            <br />
            131 East 31st Street<br />
          </li>
          <li className="list-group-item">
            <strong>Equilibrium Therapy</strong>
            <br />
            2 W 22nd St<br />
          </li>
        </ul>

        <br />

        <Link to="/4" className="btn btn-primary">
          What happens next? &nbsp;<i className="fa fa-arrow-right" />
        </Link>

        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Step3);
