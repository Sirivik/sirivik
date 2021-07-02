/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";
import parse from "html-react-parser";
import Image from "./components/Image";
import ImageHero from "./components/ImageHero";
import ImageCredit from "./components/ImageCredit";

export default class HomePreview extends React.Component {

  render() {
    const {entry, widgetsFor, getAsset} = this.props;
    const showFeatured = entry.getIn(["data", "featured", "show"]);
    const card1 = entry.getIn(["data", "facts", "card1"]);
    const icon1 = entry.getIn(["data", "facts", "card1", "icon"]);
    const card2 = entry.getIn(["data", "facts", "card2"]);
    const icon2 = entry.getIn(["data", "facts", "card2", "icon"]);
    const card3 = entry.getIn(["data", "facts", "card3"]);
    const icon3 = entry.getIn(["data", "facts", "card3", "icon"]);

    return <div>
      <div className="hero bg-teal white flip">
        <ImageHero image={entry.getIn(["data", "hero", "img", "image" ])} alt={entry.getIn(["data", "hero", "img", "alt" ])} credit={entry.getIn(["data", "hero", "img", "credit" ])}/>
        <div className="hero-text">
          <h1>{entry.getIn(["data", "hero", "title"])}</h1>
          <p className="center">{entry.getIn(["data", "hero", "subtitle"])}</p>
          <a href="/about" className="btn bg-rose">{entry.getIn(["data", "hero", "button"])}</a>
        </div>
      </div>

      <div class="fact-card-section">
        <h2>{entry.getIn(["data", "facts", "title"])}</h2>
        <div class="fact-card-wrapper">
          {card1 ?
            <div class="fact-card bg-green">
              <div class="card-img-wrapper">
                {icon1 ?
                  <img src={entry.getIn(["data", "facts", "card1", "icon"])} />
                  :
                  <p>{entry.getIn(["data", "facts", "card1", "number"])}</p>}
              </div>
              <p>{entry.getIn(["data", "facts", "card1", "fact"])}</p>
            </div>
            : null }

          {card2 ?
            <div class="fact-card bg-yellow">
              <div class="card-img-wrapper">
                {icon2 ?
                  <img src={entry.getIn(["data", "facts", "card2", "icon"])} />
                  :
                  <p>{entry.getIn(["data", "facts", "card2", "number"])}</p>}
              </div>
              <p>{entry.getIn(["data", "facts", "card2", "fact"])}</p>
            </div>
            : null }

          {card3 ?
            <div class="fact-card bg-orange">
              <div class="card-img-wrapper">
                {icon3 ?
                  <img src={entry.getIn(["data", "facts", "card3", "icon"])} />
                  :
                  <p>{entry.getIn(["data", "facts", "card3", "number"])}</p>}
              </div>
              <p>{entry.getIn(["data", "facts", "card3", "fact"])}</p>
            </div>
            : null }
        </div>
      </div>

      <div className="section-half">
        <div className="section-half-wrapper">
          <Image image={entry.getIn(["data", "approach", "img", "image"])} alt={entry.getIn(["data", "approach", "img", "alt" ])} credit={entry.getIn(["data", "approach", "img", "credit" ])}/>
          <div className="half-text">
            <h2>{entry.getIn(["data", "approach", "title"])}</h2>
            <p>{entry.getIn(["data", "approach", "subtitle"])}</p>
          </div>
        </div>
      </div>

      {showFeatured === "true" ?
        <div class="img-popout-container bg-blue">
          <div class="img-popout-wrapper">
            <Image image={entry.getIn(["data", "featured", "img", "image"])} alt={entry.getIn(["data", "featured", "img", "alt"])} credit={entry.getIn(["data", "featured", "img", "credit"])} />
            <div class="img-popout-text">
              <h2>{entry.getIn(["data", "featured", "title"])}</h2>
              <p>{entry.getIn(["data", "featured", "subtitle"])}</p>
              <a href={entry.getIn(["data", "featured", "link"])} class="btn bg-green">{entry.getIn(["data", "featured", "button"])}</a>
            </div>
          </div>
        </div> : null}

      <div className="home-programs-container">
        <div className="home-programs-text">
          <h2>{entry.getIn(["data", "programs", "title"])}</h2>
          <p>{entry.getIn(["data", "programs", "subtitle"])}</p>
        </div>
        <div className="card-grid border">
          <div className="card">
            <img src="https://ucarecdn.com/a95dd8c2-beba-43ed-bbb5-edafe504a940/-/resize/800x/logo_nbgvca.svg"/>
            <h4>Program Title</h4>
            <p>On the real website, programs that are marked with "Show" will appear here. This will be replaced with the program title, image, and short blurb that are set on each program's page.</p>
            <a className="arrow-link">{entry.getIn(["data", "programs", "btn"])}</a>
          </div>
          <div className="card">
            <img src="https://ucarecdn.com/a95dd8c2-beba-43ed-bbb5-edafe504a940/-/resize/800x/logo_nbgvca.svg"/>
            <h4>Program Title</h4>
            <p>This will be replaced with the program title, image, and short blurb that are set on each program's page.</p>
            <a className="arrow-link">{entry.getIn(["data", "programs", "btn"])}</a>
          </div>
          <div className="card">
            <img src="https://ucarecdn.com/a95dd8c2-beba-43ed-bbb5-edafe504a940/-/resize/800x/logo_nbgvca.svg"/>
            <h4>Program Title</h4>
            <p>Unfortunately, this preview doesn't let us see content that is updated on another page, in the same way the real website does. To see what programs and text will appear here, go to the "Programs" collection.</p>
            <a className="arrow-link">{entry.getIn(["data", "programs", "btn"])}</a>
          </div>
        </div>

        {/* <div className="card-grid border">
          {{ $programs := where .Site.Pages "Type" "programs" }}
          {{ range $programs }}
            {{ if eq .Params.show "Show" }}
            <div className="card">
              {{ partial "image" .Params.img }}
              <div className="card-text">
                <h4>{{ .Title }}</h4>
                <p>{{ .Params.blurb }}</p>
                <a className="arrow-link" href="{{ .RelPermalink | relLangURL }}">{{ $.Param "programs.btn" }}</a>
              </div>
            </div>
            {{ end }}
          {{ end }}
        </div> */}
      </div>

      <div className="support-container">
        <div className="support-text">
          <h2>{entry.getIn(["data", "getInvolved", "title"])}</h2>
          <p>{entry.getIn(["data", "getInvolved", "subtitle"])}</p>
        </div>
        <div className="card-grid support">
          <a href="/contribute" className="no-underline">
            <div className="card bg-yellow">
              <img className="support" src={entry.getIn(["data", "getInvolved", "icon1"])} alt={entry.getIn(["data", "getInvolved", "title1"])}/>
              <h4>{entry.getIn(["data", "getInvolved", "title1"])}</h4>
            </div>
          </a>
          <a href="/contribute" className="no-underline">
            <div className="card bg-green">
              <img className="support" src={entry.getIn(["data", "getInvolved", "icon2"])} alt={entry.getIn(["data", "getInvolved", "title2"])}/>
              <h4>{entry.getIn(["data", "getInvolved", "title2"])}</h4>
            </div>
          </a>
          <a href="/contribute" className="no-underline">
            <div className="card bg-teal">
              <img className="support" src={entry.getIn(["data", "getInvolved", "icon3"])} alt={entry.getIn(["data", "getInvolved", "title3"])}/>
              <h4>{entry.getIn(["data", "getInvolved", "title3"])}</h4>
            </div>
          </a>
          <a href="/contribute" className="no-underline">
            <div className="card bg-blue">
              <img className="support" src={entry.getIn(["data", "getInvolved", "icon4"])} alt={entry.getIn(["data", "getInvolved", "title4"])}/>
              <h4>{entry.getIn(["data", "getInvolved", "title4"])}</h4>
            </div>
          </a>
        </div>
      </div>

      {/* <div className="supporters">
        {{ with .Site.GetPage "about" }}

          <h2>{{ .Params.supporters.heading }}</h2>
          <p>{{ .Params.supporters.description }}</p>
        {{ end}}
       {{ partial "supporter" . }}
      </div> */}
    </div>;
  }
}
