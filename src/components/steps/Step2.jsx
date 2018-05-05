import React from "react";
import { Link } from "react-router-dom";

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateStep(2);
  }

  render() {
    return (
      <div>
        <h2>Fracture of shoulder and upper arm</h2>

        <img src="/shoulder-image.jpg" style={{ maxWidth: "100%" }} alt="" />
        <br />
        <br />
        <p>
          Trauma to the shoulder is common. Injuries range from a separated
          shoulder resulting from a fall onto the shoulder to a car accident
          that fractures the shoulder blade (scapula) or collarbone (clavicle).
          One thing is certain: everyone injures his or her shoulder at some
          point in life.
        </p>

        <br />

        <Link to="/3" className="btn btn-primary">
          Find a physio therapist &nbsp;<i className="fa fa-arrow-right" />
        </Link>
      </div>
    );
  }
}

export default Step2;
