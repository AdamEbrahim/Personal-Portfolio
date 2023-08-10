import React, { Fragment } from "react";

const videoStyles = {
  maxWidth: '70%', // Adjust this value to your desired maximum width
  margin: '0 auto', // Center the video container horizontally
};

const videoElementStyles = {
  width: '100%', // Make the video element fill the width of its container
  height: 'auto', // Automatically adjust the height based on the aspect ratio
};

class BlogBuilder {
  list = [];

  constructor({ title, image, description, url }) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addParagraph = (props) => {
    this.list.push(
      <p key={this.list.length} className="lead">
        {props}
      </p>
    );
    return this;
  };

  addHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className="">{props}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  addVideo = (props) => {
    this.list.push(
      <div style={videoStyles}>
        <video controls style={videoElementStyles} key={this.list.length}>
          <source src={props} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    );
    return this;
  };

  addImage = (props) => {

  };

  getBlog = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { BlogBuilder };
