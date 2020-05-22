import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBView, MDBMask } from 'mdbreact';
import ImageGallery from 'react-image-gallery';
import { photos } from "./Photos";
//import bg from './gallery-bg.jpg';


export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.galleryRef = React.createRef();
    this.imageClick = this.imageClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "Excellence Classes | Gallery";
  }

  imageClick() {
    this.galleryRef.current.toggleFullScreen();
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/gallery-bg_LBKn0m8-0.jpg' className="h-70vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div style={{ fontSize: '8vw', fontWeight: '900' }}>
                    <p>Gallery</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBRow>
            <MDBCol className="mt-5 pb-2">
              <MDBAnimation reveal type="fadeIn" duration="2s" delay="">
                <ImageGallery ref={this.galleryRef} isRTL={false} items={photos} onClick={this.imageClick} onScreenChange={this.props.handleScreenChange} showThumbnails={true} useTranslate3D={true} useBrowserFullscreen={false} showPlayButton={false} showNav={false} showBullets={true} autoPlay={true} slideOnThumbnailOver={true} />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}