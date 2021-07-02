import React from "react";

export default class Image extends React.Component {
  render() {
    const {image, alt, credit} = this.props;
    return <div>
      <img src={image} alt={alt}/>
      <div className="img-credit">
        {credit}
      </div>
    </div>;
  }
}
