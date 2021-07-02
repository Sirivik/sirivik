import React from "react";

export default class ImageCredit extends React.Component {
  render() {
    const {credit} = this.props;
    return <div>
      <div className="img-credit">
        {credit}
      </div>
    </div>;
  }
}
