/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import parse from "html-react-parser";
import Image from "./components/Image";
import ImageHero from "./components/ImageHero";

export default class ContributePreview extends React.Component {
  render() {
    const {entry, widgetsFor} = this.props;
    const donorbox = widgetsFor("contribute").getIn(["data", "code"]);

    return <div>
      <div className="bg-teal white">
        <div className="hero-full">
          <ImageHero image={entry.getIn(["data", "hero", "img", "image" ])} alt={entry.getIn(["data", "hero", "img", "alt" ])} credit={entry.getIn(["data", "hero", "img", "credit" ])}/>
          <div className="hero-text">
            <h1>{entry.getIn(["data", "hero", "title"])}</h1>
            <p className="center">{entry.getIn(["data", "hero", "subtitle"])}</p>
          </div>
        </div>

        <div className="col-2">
          <div className="contribute-text">{entry.getIn(["data", "contribute", "md"])}</div>
          <div className="donation">
            {parse(donorbox)}
          </div>
        </div>
      </div>

      <div className="img-popout-container partner">
        <div className="img-popout-wrapper">
          <Image image={entry.getIn(["data", "partner", "img", "image"])} alt={entry.getIn(["data", "partner", "img", "alt" ])} credit={entry.getIn(["data", "partner", "img", "credit" ])}/>
          <div className="img-popout-text">
            <h2>{entry.getIn(["data", "partner", "title"])}</h2>
            <div>{entry.getIn(["data", "partner", "description"])}</div>
            <a href="contact/" className="btn bg-rose">{entry.getIn(["data", "partner", "button"])}</a>
          </div>
        </div>
      </div>
    </div>;
  }
}
