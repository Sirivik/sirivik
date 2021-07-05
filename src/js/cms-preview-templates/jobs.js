/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from "react";

export default class JobsPreview extends React.Component {

  render() {
    const {entry} = this.props;


    return <div className="bg-purple opportunities">
      <section className="accordion-wrapper">
        <button className="accordion active">
          <h5 className="center">{entry.getIn(["data", "title"])}</h5>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(255,255,255,1)"/></svg>
        </button>
        <div className="panel" style={{display: "block", maxHeight: "max-content"}}>
          <div>{entry.getIn(["data", "description"])}</div>
          <a href={entry.getIn(["data", "link", "file"])} title={entry.getIn(["data", "title"])} target="_blank" rel="noopener">{entry.getIn(["data", "link", "text"])}</a>
        </div>
      </section>
    </div>;
  }
}
