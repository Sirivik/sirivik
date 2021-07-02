import React from "react";

export default class ImageHero extends React.Component {
  render() {
    const {image, alt, credit} = this.props;
    return <div>
      <img className="img-hero" src={image} alt={alt}/>
      <div className="img-credit">
        {credit}
      </div>
    </div>;
  }
}
