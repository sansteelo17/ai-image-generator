import React from "react";

const GeneratedImage = ({ imageURL }) => {
  return (
    <section className="image">
      <div className="image-container">
        <img src={imageURL} alt="AI generated img" id="image" />
      </div>
    </section>
  );
};

export default GeneratedImage;
