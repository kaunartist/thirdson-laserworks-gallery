import React, { Component } from 'react';
import Img from 'gatsby-image'
import Lightbox from 'react-images';

import "./ProductPage.css";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentImage: 0,
      lightbox: false,
      lightboxPhotos: props.photos.map(photo => Object.assign({ srcSet: photo.node.childImageSharp.fluid.srcSet })),
      photos: props.photos.map(photo => Object.assign({ srcSet: photo.node.childImageSharp.fixed.srcSet })),
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({
      currentImage: photo,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const { photos } = this.props;
    return (
      <div>
        <div className="ProductPage">
          {photos.map((photo, i) => (
            <a className="thumbnail" key={i} href={photo.node.childImageSharp.fixed.src} onClick={e => this.openLightbox(i, e)}
              style={{
                marginRight: 10,
                marginBottom: 10,
                display: "inline-block",
                height: 300,
                padding: 0,
              }}

            >
              <Img className="fullcolor-thumbnail" key={i} fixed={photo.node.childImageSharp.fullcolor} />
              <Img className="duotone-thumbnail" key={i} fixed={photo.node.childImageSharp.fixed} />
            </a>
          ))}
        </div>
        <Lightbox 
          width="1000"
          backdropClosesModal
          images={this.state.lightboxPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default ProductPage;
