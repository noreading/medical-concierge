import React from "react";
import { Link } from "react-router-dom";

class Step5 extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateStep(5);
  }

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    console.log(this);
  };

  render() {
    return (
      <div>
        <ul className="list-group tips">
          <li className="list-group-item">
            <h3>How to shower with a sling</h3>
            <p>
              <iframe
                width="300"
                height="195"
                src="https://www.youtube.com/embed/OIzfaLJk1xs"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                title="How to shower with a sling"
                allowFullScreen
              />
            </p>
            <p>
              As you have to remove the sling, when you want to take a shower,
              we will guide you how to attach it again.
            </p>
          </li>
          <li className="list-group-item">
            <h3>How to cook with one arm</h3>
            <p>
              You should buy some convenience food, as it can be very hard to
              slice vegetables or lift heavy items.
            </p>
          </li>
        </ul>

        <Link to="/6" className="btn btn-primary">
          What to do next&nbsp;<i className="fa fa-arrow-right" />
        </Link>

        <br />
      </div>
    );
  }
}

export default Step5;
