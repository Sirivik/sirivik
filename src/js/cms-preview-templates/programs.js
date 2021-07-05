/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import parse from "html-react-parser";
import Image from "./components/Image";
import ImageHero from "./components/ImageHero";

export default class ProgramsPreview extends React.Component {

  render() {
    const {entry, widgetsFor, widgetFor} = this.props;
    const participateShow = entry.getIn(["data", "participate", "show"]);
    const btn_1 = entry.getIn(["data", "participate", "btn_1"]);
    const btn_2 = entry.getIn(["data", "participate", "btn_2"]);
    const testimonial = entry.getIn(["data", "testimonial", "quote"]);


    return <div>
      <div className="hero-full">
        <ImageHero image={entry.getIn(["data", "img", "image" ])} alt={entry.getIn(["data", "img", "alt" ])} credit={entry.getIn(["data", "img", "credit" ])}/>
      </div>

      <div className="program-container">
        <div className="program-text">
          <h1>{entry.getIn(["data", "title"])}</h1>
          <div>{entry.getIn(["data", "description"])}</div>
        </div>
      </div>

      {testimonial ?
        <div className="testimonial">
          <h4>{entry.getIn(["data", "testimonial", "quote"])}</h4>
          <em>{entry.getIn(["data", "testimonial", "citation"])}</em>
        </div>
        : null
      }

      <div className="img-grid">
        <Image image={entry.getIn(["data", "images", "img_1", "image" ])} alt={entry.getIn(["data", "images", "img_1", "alt" ])} credit={entry.getIn(["data", "images", "img_1", "credit" ])}/>
        <Image image={entry.getIn(["data", "images", "img_2", "image" ])} alt={entry.getIn(["data", "images", "img_2", "alt" ])} credit={entry.getIn(["data", "images", "img_2", "credit" ])}/>
        <Image image={entry.getIn(["data", "images", "img_3", "image" ])} alt={entry.getIn(["data", "images", "img_3", "alt" ])} credit={entry.getIn(["data", "images", "img_3", "credit" ])}/>
        {participateShow === "Show" ?
          <div className="program-action-card">
            <h4>{entry.getIn(["data", "participate", "heading"])}</h4>
            <div>
              {btn_1 ?
                <a href="contact/" className="btn bg-yellow">
                  {entry.getIn(["data", "participate", "btn_1"])}
                </a>
                : null
              }
              {btn_2 ?
                <a href="contact/" className="btn bg-green">
                  {entry.getIn(["data", "participate", "btn_2"])}
                </a>
                : null
              }
            </div>
          </div>
          : null
        }
        <Image image={entry.getIn(["data", "images", "img_4", "image" ])} alt={entry.getIn(["data", "images", "img_4", "alt" ])} credit={entry.getIn(["data", "images", "img_4", "credit" ])}/>
      </div>

    </div>;
  }
}
