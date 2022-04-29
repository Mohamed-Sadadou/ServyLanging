import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Back1 from '../../Images/arriere1.jpg';
import Back2 from '../../Images/arriere2.jpg';
import Back3 from '../../Images/arriere3.jpg';
const fadeImages = [
  {
  url: Back1,
  caption: 'First Slide'
  },
  {
  url: Back2,
  caption: 'Second Slide'
  },
  {
  url: Back3,
  caption: 'Third Slide'
  },
];

export default function Slideshow  ()  {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}