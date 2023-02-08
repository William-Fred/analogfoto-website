import React, { useState } from "react";
import "./picturesArray.css";
import CloseIcon from "@material-ui/icons/Close";
import amiralitet from "./amiralitet.jpg";
import baraBraMat1 from "./baraBraMat1.jpg";
import bengans from "./bengans.JPG";
import bron from "./bron.JPG";
import fiskarna from "./fiskarna.jpg";
import karljohan from "./karljohan.jpg";
import folk from "./folk.jpg";
import korvkiosk from "./korvkiosk.JPG";
import kranarna from "./kranarna.jpg";
import materia from "./materia.jpg";
import eriksberg from "./analogaJuli2022/eriksberg.JPG";
import klotter from "./analogaJuli2022/klotter.jpg";
const PictureArray = () => {
  const images = [
    {
      id: 1,
      src: amiralitet,
      alt: "amiralitet",
    },
    {
      id: 2,
      src: baraBraMat1,
      alt: "baraBraMat",
      title: "Bara bra mat",
    },
    {
      id: 3,
      src: bengans,
      alt: "bengans",
      title: "Bengans",
    },
    {
      id: 4,
      src: bron,
      alt: "bron",
    },
    {
      id: 5,
      src: eriksberg,
      alt: "eriksberg",
    },
    {
      id: 6,
      src: karljohan,
      alt: "karljohan",
    },
    {
      id: 7,
      src: korvkiosk,
      alt: "korvkiosk",
    },
    {
      id: 8,
      src: kranarna,
      alt: "kranarna",
    },
    {
      id: 9,
      src: folk,
      alt: "folk",
    },
    {
      id: 10,
      src: materia,
      alt: "materia",
    },
    {
      id: 11,
      src: fiskarna,
      alt: "fiskarna",
    },
    {
      id: 12,
      src: klotter,
      alt: "klotter",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTmpImgSrc] = useState("");
  const getImg = (src) => {
    setTmpImgSrc(src);
    setModel(true);
  };
  return (
    <div>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery-container">
        {images.map((image) => {
          return (
            <div
              className="gallery-pics"
              key={image.id}
              onClick={() => getImg(image.src)}
            >
              <div className="gallery-text">
                <h3>{image.title}</h3>
                <img
                  className="every-image"
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PictureArray;
