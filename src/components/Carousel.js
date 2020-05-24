import React from 'react';
import '../css/Carousel.css';
import { MDBAnimation, MDBIcon, MDBBtn, MDBCol, MDBMask } from 'mdbreact';
import shortid from "shortid";
import { Swipeable } from 'react-swipeable'

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.size = this.props.homePageData.length;
    this.state = {
      currentIndex: 0
    };
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
    this.handleBulletClick = this.handleBulletClick.bind(this);
  }

  componentDidMount() {
    this.setInterval();
  }

  setInterval() {
    this.interval = setInterval(() => this.setState(state => ({
      currentIndex: state.currentIndex === this.size - 1 ? 0 : state.currentIndex + 1
    })), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onNextClick() {
    clearInterval(this.interval);
    this.setState(state => ({
      currentIndex: state.currentIndex === this.size - 1 ? 0 : state.currentIndex + 1
    }));
    this.setInterval();
  }

  onPrevClick() {
    clearInterval(this.interval);
    this.setState(state => ({
      currentIndex: state.currentIndex === 0 ? this.size - 1 : state.currentIndex - 1
    }));
    this.setInterval();
  }

  handleBulletClick(index) {
    clearInterval(this.interval);
    this.setState(state => ({
      currentIndex: index
    }));
    this.setInterval();
  }

  getId = () => {
    const id = shortid.generate();
    return id;
  };

  getBackgroundStyle(url) {
    return {
      'backgroundImage': 'url(' + url + ')',
      'backgroundPosition': 'center',
      'backgroundRepeat': 'no-repeat',
      'backgroundSize': 'cover'
    }
  }

  render() {

    const items = this.props.homePageData.map((item, index) =>
      <MDBAnimation key={index} type="fadeIn" duration="0.1s">
        <div className="h-100vh z-depth-1" style={this.getBackgroundStyle(item.src)}>
          <MDBMask overlay="black-strong" className="d-flex flex-column justify-content-between text-center text-white w-100 h-100">
            <div></div>
            <div>
              <MDBAnimation type={item.animation} delay="0.5s" duration="1s">
                <div className="carousel-heading">
                  <ChildHeading heading={item.heading} />
                </div>
              </MDBAnimation>
              <MDBAnimation type={item.animation} duration="1s" delay="0.8s">
                <div className="pt-2 pb-2 font-weight-500">
                  <p className="h1-responsive">{item.body}</p>
                </div>
              </MDBAnimation>
              <MDBAnimation type={item.animation} duration="1s" delay="1.2s">
                <div className="border carousel-line ">

                </div>
              </MDBAnimation>
            </div>
            <div className="pb-2">
              <div className="d-flex flex-row justify-content-center">

              </div>
            </div>
          </MDBMask>
        </div>
      </MDBAnimation>
    );

    return (
      <Swipeable onSwipedRight={this.onPrevClick} preventDefaultTouchmoveEvent={true} trackMouse={true} onSwipedLeft={this.onNextClick} >
        <div className="carousel-bg-color">
          {items[this.state.currentIndex]}
          {this.props.showControlButtons &&
            <MDBCol size="12">
              <div className="d-flex flex-row justify-content-center">
                <div className="pr-1">
                  <MDBAnimation reveal type="fadeIn" duration="1s">
                    <MDBBtn className="pl-4 pr-4 light-blue darken-4 border border-radius-50" onClick={this.onPrevClick}>
                      <MDBIcon size="2x" icon="angle-left" />
                    </MDBBtn>
                  </MDBAnimation>
                </div>
                <div className="pl-1">
                  <MDBAnimation reveal type="fadeIn" duration="2s">
                    <MDBBtn className="pl-4 pr-4 light-blue darken-4 border-radius-50" onClick={this.onNextClick} color="primary">
                      <MDBIcon size="2x" icon="angle-right" />
                    </MDBBtn>
                  </MDBAnimation>
                </div>
              </div>
            </MDBCol>
          }
        </div>
      </Swipeable>
    );
  }
}


function ChildHeading(props) {
  return (
    props.heading.map((item, index) =>
      <p className="mb-0 text-uppercase line-height-1" key={index}>{item}</p>
    )
  )
}
