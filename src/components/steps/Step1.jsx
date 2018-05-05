import React from "react";
import { withRouter } from "react-router-dom";

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  icd = React.createRef();

  componentDidMount() {
    this.icd.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = [];

    if (!this.icd.current.value.match(/[a-z][0-9.]+/i)) {
      errors.push("That's not a valid ICD Number.");
    }

    this.setState(state => {
      state.errors = errors;
      return state;
    });

    if (errors.length === 0) {
      this.props.history.push("/2");
    }
  };

  render() {
    return (
      <div>
        <h1 className="splash-headline">
          Your Medical<br />Concierge
        </h1>

        <form className="icd-form" onSubmit={this.handleSubmit}>
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
          {this.state.errors.length !== 0 && (
            <div className="alert alert-danger">
              {this.state.errors.map(message => <span>{message}</span>)}
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default withRouter(Step1);
