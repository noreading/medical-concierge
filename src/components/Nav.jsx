import React from "react";

class Nav extends React.Component {
  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  render() {
    const numberOfSteps = 6;
    const percentage = this.precisionRound(
      this.props.step / numberOfSteps * 100,
      3
    );

    return (
      this.props.step !== 1 && (
        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      )
    );
  }
}

export default Nav;
