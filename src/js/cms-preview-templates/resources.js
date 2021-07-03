/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import ImageHero from "./components/ImageHero";

export default class ResourcesPreview extends React.Component {
  render() {
    const {entry} = this.props;

    return <div>
      <div className="hero-full">
        <ImageHero image={entry.getIn(["data", "hero", "img", "image" ])} alt={entry.getIn(["data", "hero", "img", "alt" ])} credit={entry.getIn(["data", "hero", "img", "credit" ])}/>
        <div className="hero-text resources">
          <h1>{entry.getIn(["data", "hero", "title"])}</h1>
          <div className="center">{entry.getIn(["data", "hero", "subtitle"])}</div>
        </div>
      </div>

      <div class="card-grid resources border">
        {(entry.getIn(["data", "resource"]) || []).map((card, index) => <div className="card" key={index}>
          {card.getIn(["img", "image"]) ?
            <img class="hide-sm" src={card.getIn(["img", "image"])}/>
            :
            <div class="no-img">
              <h4>{card.get("title")}</h4>
            </div>
          }
          <div>
            <h4 class="show-sm">{card.get("title")}</h4>
            <p>{card.get("description")}</p>
            {card.getIn(["link_1", "pdf"]) ?
              <a class="arrow-link db" href={card.getIn(["link_1", "pdf"])} target="_blank" rel="noopener">{card.getIn(["link_1", "link_text"])} →</a>
              : null
            }
            {card.getIn(["link_2", "pdf"]) ?
              <a class="arrow-link db" href={card.getIn(["link_2", "pdf"])} target="_blank" rel="noopener">{card.getIn(["link_2", "link_text"])} →</a>
              : null
            }
          </div>
        </div>)}
      </div>

      <div class="hero-full resources bg-rose white">
        <ImageHero image={entry.getIn(["data", "publications", "img", "image" ])} alt={entry.getIn(["data", "publications", "img", "alt" ])} credit={entry.getIn(["data", "publications", "img", "credit" ])}/>
        <div class="hero-text resources">
          <h2>{entry.getIn(["data", "publications", "title" ])}</h2>
          <p class="center">{entry.getIn(["data", "publications", "subtitle" ])}</p>
        </div>
        <div class="card-grid resources">
          {(entry.getIn(["data", "publication"]) || []).map((card, index) => <div className="card" key={index}>
            {card.getIn(["img", "image"]) ?
              <img class="hide-sm" src={card.getIn(["img", "image"])}/>
              :
              <div class="no-img">
                <h4>{card.get("title")}</h4>
              </div>
            }
            <div>
              <h4 class="show-sm">{card.get("title")}</h4>
              <p>{card.get("description")}</p>
              {card.getIn(["link_1", "pdf"]) ?
                <a class="arrow-link db" href={card.getIn(["link_1", "pdf"])} target="_blank" rel="noopener">{card.getIn(["link_1", "link_text"])} →</a>
                : null
              }
              {card.getIn(["link_2", "pdf"]) ?
                <a class="arrow-link db" href={card.getIn(["link_2", "pdf"])} target="_blank" rel="noopener">{card.getIn(["link_2", "link_text"])} →</a>
                : null
              }
            </div>
          </div>)}
        </div>
      </div>

    </div>;
  }
}
