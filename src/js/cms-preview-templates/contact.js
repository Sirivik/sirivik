import React from "react";
// eslint-disable-next-line no-unused-vars
import ImageHero from "./components/ImageHero";

export default class ContactPreview extends React.Component {
  render() {
    const {entry} = this.props;

    return <div>
      <div className="hero bg-purple white">
        <ImageHero
          image={entry.getIn(["data", "hero", "img", "image" ])}
          alt={entry.getIn(["data", "hero", "img", "alt" ])}
          credit={entry.getIn(["data", "hero", "img", "credit" ])}
        />
        <div className="hero-text">
          <h1>{entry.getIn(["data", "hero", "title"])}</h1>
          <div className="address">
            <p>{entry.getIn(["data", "hero", "address", "street"])}</p>
            <p>{entry.getIn(["data", "hero", "address", "city"])}</p>
            <p>{entry.getIn(["data", "hero", "address", "country"])}</p>
            <p>{entry.getIn(["data", "hero", "address", "post"])}</p>
            <br/>
            <a className="contact-link" href={entry.getIn(["data", "hero", "phone"])}>{entry.getIn(["data", "hero", "phone"])}</a>
            <a className="contact-link" href={entry.getIn(["data", "hero", "email"])}>{entry.getIn(["data", "hero", "email"])}</a>
          </div>
          <div className="socials">
            {entry.getIn(["data", "hero", "linkedin"]) ?
              <a href={entry.getIn(["data", "hero", "linkedin"])} target="_blank" rel="noopener">
                <img src="/resources/icon_socials_linkedin-fill.svg" alt="LinkedIn" />
              </a>
              : null
            }
            {entry.getIn(["data", "hero", "twitter"]) ?
              <a href={entry.getIn(["data", "hero", "twitter"])} target="_blank" rel="noopener">
                <img src="/resources/icon_socials_twitter-fill.svg" alt="Twitter" />
              </a>
              : null
            }
            {entry.getIn(["data", "hero", "fb"]) ?
              <a href={entry.getIn(["data", "hero", "fb"])} target="_blank" rel="noopener">
                <img src="/resources/icon_socials_facebook-fill.svg" alt="Facebook" />
              </a>
              : null
            }
            {entry.getIn(["data", "hero", "ig"]) ?
              <a href={entry.getIn(["data", "hero", "ig"])} target="_blank" rel="noopener">
                <img src="/resources/icon_socials_instagram-fill.svg" alt="Instagram" />
              </a>
              : null
            }
          </div>
        </div>
      </div>

      <div className="bg-white visit">
        <div className="section-header">
          <h2>{entry.getIn(["data", "visit", "title"])}</h2>
          <p>{entry.getIn(["data", "visit", "subtitle"])}</p>
          <a href={entry.getIn(["data", "visit", "link"])} target="_blank" rel="noopener" title="Directions to Sirivik">
            <img className="img-map" src={entry.getIn(["data", "visit", "map"])} title={entry.getIn(["data", "visit", "title"])}/>
          </a>
        </div>
      </div>
    </div>;
  }
}
