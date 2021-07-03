/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import parse from "html-react-parser";
import Image from "./components/Image";
import ImageHero from "./components/ImageHero";

export default class AboutPreview extends React.Component {

  render() {
    const {entry, widgetsFor, widgetFor} = this.props;
    const description = entry.getIn(["data", "story", "description"]);

    return <div>
      <div className="hero-full bg-green">
        <ImageHero image={entry.getIn(["data", "img", "image" ])} alt={entry.getIn(["data", "img", "alt" ])} credit={entry.getIn(["data", "img", "credit" ])}/>
        <div className="about hero-text">
          <h1>{entry.getIn(["data", "story", "heading"])}</h1>
          <div>{description}</div>
        </div>
      </div>

      <div id="our-objectives">
        <h2>{entry.getIn(["data", "objectives", "heading"])}</h2>
        <div class="card-wrapper">
          <div class="card bg-orange">
            <Image image={entry.getIn(["data", "objectives", "icon1"])}/>
            <h4>{entry.getIn(["data", "objectives", "description1"])}</h4>
          </div>
          <div class="card bg-blue">
            <Image image={entry.getIn(["data", "objectives", "icon2"])}/>
            <h4>{entry.getIn(["data", "objectives", "description2"])}</h4>
          </div>
          <div class="card bg-rose">
            <Image image={entry.getIn(["data", "objectives", "icon3"])}/>
            <h4>{entry.getIn(["data", "objectives", "description3"])}</h4>
          </div>
        </div>
      </div>

      <div id="get-to-know-us">
        <h2>{entry.getIn(["data", "knowUsHeading"])}</h2>
        <div>
          <h3>{entry.getIn(["data", "staff", "heading"])}</h3>
          <div className="card-grid people">
            {(entry.getIn(["data", "staff", "members"]) || []).map((member, index) => <div className="card" key={index}>
              <img src={member.getIn(["img", "image"])}/>
              <div>
                <h5>{member.get("name")}</h5>
                <em>{member.get("role")}</em>
                <p>{member.get("bio")}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div>
          <h3>{entry.getIn(["data", "board", "heading"])}</h3>
          <div className="card-grid people">
            {(entry.getIn(["data", "board", "members"]) || []).map((member, index) => <div className="card" key={index}>
              <img src={member.getIn(["img", "image"])}/>
              <div>
                <h5>{member.get("name")}</h5>
                <em>{member.get("role")}</em>
                <p>{member.get("bio")}</p>
              </div>
            </div>)}
          </div>
        </div>
      </div>

      <div className="supporters">
        <h2>{entry.getIn(["data", "supporters", "heading"])}</h2>
        <p>{entry.getIn(["data", "supporters", "description"])}</p>
        <p>Supporters Logos -- updated in the "Supporters and Funders" collection</p>
      </div>
    </div>;
  }
}
