import React from "react";
import { withRouter } from "react-router-dom";

class Step1 extends React.Component {
  icd = React.createRef();

  componentDidMount() {
    this.icd.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = [];

    // validate
    if (!this.icd.current.value.match(/[a-z0-9.]+/i)) {
      errors.push("This is an invalid format");
    }

    // form send successfully
    if (errors.length === 0) {
      this.props.history.push("/2");
      //window.history.pushState({}, "test", "/2");
    }

    console.log(errors);
  };

  render() {
    return (
      <div>
        <h1 className="splash-headline">
          Your Medical<br />Concierge
        </h1>

        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-2 splash-input">
            <input
              type="text"
              name="icd"
              id="icd"
              className="form-control"
              ref={this.icd}
              placeholder="ICD Number"
            />
            <div className="input-group-append">
              <button type="submit" className="input-group-text">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Step1);
