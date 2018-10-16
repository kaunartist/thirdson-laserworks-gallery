import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import ProductPage from './ProductPage.js';

import './ThirdSonGallery.css';

const coasters = [
  { src: '../images/coasters/castle-coaster-1.jpg', width: 4.5, height: 3 },
  { src: '../images/coasters/castle-coaster-2.jpg', width: 4.5, height: 3 },
  { src: '../images/coasters/leaves-coaster-1.jpg', width: 3, height: 3 },
  { src: '../images/coasters/leaves-coaster-2.jpg', width: 3, height: 3 },
  { src: '../images/coasters/leaves-coaster-3.jpg', width: 4.5, height: 3 },
  { src: '../images/coasters/magicalmystery-coaster-1.jpg', width: 4.5, height: 3 },
  { src: '../images/coasters/beetles-coaster-1.jpg', width: 3, height: 3 },
  { src: '../images/coasters/beetles-coaster-2.jpg', width: 3, height: 3 },
  { src: '../images/coasters/beetles-coaster-3.jpg', width: 4.5, height: 3 },
  { src: '../images/coasters/beetles-coaster-4.jpg', width: 4.5, height: 3 },
  { src: '../images/coasters/paisley-coaster-1.jpg', width: 3, height: 3 },
  { src: '../images/coasters/zigzag-coaster-1.jpg', width: 4.5, height: 3 },
  { src: '../images/coasters/zigzag-coaster-2.jpg', width: 4.5, height: 3 },
];
const boxes = [
  { src: '../images/boxes/cat-glasses-pillbox-cherry-front-web.jpg', width: 3, height: 3 },
  { src: '../images/boxes/cat-glasses-pillbox-cherry-inside-web.jpg', width: 3, height: 3 },
  { src: '../images/boxes/cats2-pillbox-cherry-front.jpg', width: 3, height: 3 },
  { src: '../images/boxes/cats2-pillbox-cherry-open.jpg', width: 3, height: 3 },
  { src: '../images/boxes/cats-pillbox-walnut-front.jpg', width: 3, height: 3 },
  { src: '../images/boxes/cats-pillbox-walnut-open.jpg', width: 3, height: 3 },
];

const jewelry = [
  { src: '../images/jewelry/adventure-time-cufflinks.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/usb-cufflinks-web.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/video-shoot.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/beetle-cufflinks.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/cat-earrings.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/house-of-cards-cufflinks.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/cats-cufflinks-1.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/chevron-cufflinks-1.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/lego-cufflinks-1.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/lego-cufflinks-2.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/chevron-cufflinks-web.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/cufflink-production-1.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/hexagon-cufflinks-1.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/mars-canyon-cufflinks.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/ottawa-cufflinks-1.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/ottawa-cufflinks-2.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/ottawa-cufflinks-progress.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/ottawa-earrings.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/pentagon-cufflinks.jpg', width: 4, height: 3 },
  { src: '../images/jewelry/scales-cherry-front.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/scales-walnut-front.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/scales-walnut-front-web.jpg', width: 3, height: 3 },
  { src: '../images/jewelry/triangle-cufflinks-1.jpg', width: 3, height: 3 },
];
const misc = [
  { src: '../images/misc/bizcard-walnut-front.jpg', width: 3, height: 3 },
  { src: '../images/misc/bike-chain-products.jpg', width: 5, height: 3 },
  { src: '../images/misc/mediastyle-badges.jpg', width: 3, height: 3 },
  { src: '../images/misc/spoon-1.jpg', width: 5, height: 3 },
  { src: '../images/misc/workshop-2.jpg', width: 3, height: 3 },
  { src: '../images/misc/2.png', width: 3, height: 3 },
  { src: '../images/misc/3.png', width: 3, height: 3 },
  { src: '../images/misc/4.png', width: 3, height: 3 },
  { src: '../images/misc/5.png', width: 3, height: 3 },
  { src: '../images/misc/6.png', width: 3, height: 3 },
  { src: '../images/misc/TeaPocket3.jpg', width: 3, height: 3 },
  { src: '../images/misc/workshop-1.jpg', width: 5, height: 3 },
];

const pillows = [
  { src: '../images/pillows/1.jpg', width: 4.5, height: 3 },
  { src: '../images/pillows/3.jpg', width: 4.5, height: 3 },
  { src: '../images/pillows/5.jpg', width: 4.5, height: 3 },
  { src: '../images/pillows/2.jpg', width: 4.5, height: 3 },
  { src: '../images/pillows/4.jpg', width: 4.5, height: 3 },
  { src: '../images/pillows/6.jpg', width: 4.5, height: 3 },
];

class ThirdSonGallery extends Component {

  render() {
    return (
      <div>
        <ProductPage photos={jewelry} />
        <ProductPage photos={pillows} />
        <ProductPage photos={misc} />
        <ProductPage photos={boxes} />
        <ProductPage photos={coasters} />
      </div>
    );
  }
}

export default ThirdSonGallery;
