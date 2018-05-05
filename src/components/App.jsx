import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Progress from "./Progress";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1
    };
  }

  updateStep = step => {
    this.setState(state => {
      state.step = step;
      return state;
    });
  };

  render() {
    return (
      <Router>
        <div
          className={`app container ${
            this.state.step === 1 ? "splash-screen" : ""
          }`}
        >
          <Progress step={this.state.step} />

          <Route
            exact
            path="/"
            render={() => <Step1 updateStep={this.updateStep} />}
          />
          <Route
            path="/2"
            render={() => <Step2 updateStep={this.updateStep} />}
          />
          <Route
            path="/3"
            render={() => <Step3 updateStep={this.updateStep} />}
          />
          <Route
            path="/4"
            render={() => <Step4 updateStep={this.updateStep} />}
          />
          <Route
            path="/5"
            render={() => <Step5 updateStep={this.updateStep} />}
          />
          <Route
            path="/6"
            render={() => <Step6 updateStep={this.updateStep} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
