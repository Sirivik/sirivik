/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import parse from "html-react-parser";
import Image from "./components/Image";
import ImageHero from "./components/ImageHero";

export default class VisionPreview extends React.Component {
  render() {
    const {entry, widgetsFor} = this.props;

    return <div>
      <h2 className="bg-purple white tc">{entry.getIn(["data", "hero", "title"])}</h2>
      <div className="bg-yellow">
        <div className="hero flip bg-yellow">
          <ImageHero image={entry.getIn(["data", "hero", "img", "image" ])} alt={entry.getIn(["data", "hero", "img", "alt" ])} credit={entry.getIn(["data", "hero", "img", "credit" ])}/>
          <div className="hero-text">
            <h2>{entry.getIn(["data", "hero", "description"])}</h2>
            <div className="center">{entry.getIn(["data", "hero", "subtitle"])}</div>
          </div>
        </div>
        {entry.getIn("data", "section1") ?
          <div className="img-popout-container bg-rose vision partner">
            <div className="img-popout-wrapper flip">
              <Image image={entry.getIn(["data", "section1", "img", "image" ])} alt={entry.getIn(["data", "section1", "img", "alt" ])} credit={entry.getIn(["data", "section1", "img", "credit" ])}/>
              <div className="img-popout-text">
                <h2>{entry.getIn(["data", "section1", "title" ])}</h2>
                <p>{entry.getIn(["data", "section1", "description" ])}</p>
              </div>
            </div>
          </div>
          : null
        }
      </div>

      {entry.getIn("data", "cardList") ?
        <div className="home-programs-container">
          <div className="home-programs-text">
            <h2>{entry.getIn(["data", "cardSection", "title" ])}</h2>
            <p>{entry.getIn(["data", "cardSection", "subtitle" ])}</p>
          </div>

          <div className="card-grid border">
            {(entry.getIn(["data", "cardList"]) || []).map((card, index) =>
              <div className="card" key={index}>
                {card.getIn(["img", "image"]) ?
                  <img class="hide-sm" src={card.getIn(["img", "image"])}/>
                  : null
                }
                <div class="card-text">
                  <h4>{card.get("title")}</h4>
                  {card.get("description") ?
                    <p>{card.get("description")}</p>
                    : null
                  }
                </div>
              </div>
            )}
          </div>
        </div>
        : null
      }

      {entry.getIn("data", "section2") ?
        <div className="img-popout-container bg-blue vision">
          <div className="img-popout-wrapper">
            <Image image={entry.getIn(["data", "section2", "img", "image" ])} alt={entry.getIn(["data", "section2", "img", "alt" ])} credit={entry.getIn(["data", "section2", "img", "credit" ])}/>
            <div className="img-popout-text">
              <h2>{entry.getIn(["data", "section2", "title" ])}</h2>
              <p>{entry.getIn(["data", "section2", "description" ])}</p>
            </div>
          </div>
        </div>
        : null
      }

      {entry.getIn("data", "section3") ?
        <div className="hero flip bg-yellow">
          <ImageHero image={entry.getIn(["data", "section3", "img", "image" ])} alt={entry.getIn(["data", "section3", "img", "alt" ])} credit={entry.getIn(["data", "section3", "img", "credit" ])}/>
          <div className="hero-text">
            <h2>{entry.getIn(["data", "section3", "title" ])}</h2>
            <p>{entry.getIn(["data", "section3", "description" ])}</p>
          </div>
        </div>
        : null
      }

    </div>;
  }
}
