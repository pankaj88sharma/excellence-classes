import React from 'react';
import '../css/Testimonials.css';
import { MDBAnimation, MDBIcon, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import shortid from "shortid";
import { Swipeable } from 'react-swipeable'

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.size = this.props.testinomialsData.length;
    this.state = {
      currentIndex: 0,
      translateX: '0%'
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
      currentIndex: state.currentIndex === this.size - 1 ? 0 : state.currentIndex + 1,
      translateX: '-' + (state.currentIndex === this.size - 1 ? 0 : (state.currentIndex + 1) * 100) + '%'
    })), 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onNextClick() {
    clearInterval(this.interval);
    this.setState(state => ({
      currentIndex: state.currentIndex === this.size - 1 ? 0 : state.currentIndex + 1,
      translateX: '-' + (state.currentIndex === this.size - 1 ? 0 : (state.currentIndex + 1) * 100) + '%'
    }));
    this.setInterval();
  }

  onPrevClick() {
    clearInterval(this.interval);
    this.setState(state => ({
      currentIndex: state.currentIndex === 0 ? this.size - 1 : state.currentIndex - 1,
      translateX: '-' + (state.currentIndex === 0 ? (this.size - 1) * 100 : (state.currentIndex - 1) * 100) + '%'
    }));
    this.setInterval();
  }

  handleBulletClick(index) {
    clearInterval(this.interval);
    this.setState(state => ({
      currentIndex: index,
      translateX: '-' + (index * 100) + '%'
    }));
    this.setInterval();
  }

  getId = () => {
    const id = shortid.generate();
    return id;
  };

  render() {
    const items = this.props.testinomialsData.map((item, index) =>
      <div key={index} className="w-100 flex-shrink-0 pl-4 pr-4 pt-4 pb-2">
        <p className="font-size-1-25rem">
          <MDBIcon icon='quote-left' /> {item.comment}
        </p>
        <h4 className='font-weight-bold pb-0'>{item.name}</h4>
      </div>
    );

    var bullets = [];
    for (var i = 0; i < this.size; i++) {
      var className = (i === this.state.currentIndex ? 'darken-4' : 'lighten-2') + ' testimonial-bullet blue-grey mx-1 mb-0';
      bullets.push(
        <div key={i} >
          <MDBBtn onClick={i === this.state.currentIndex ? null : this.handleBulletClick.bind(this, i)} className={className}>
          </MDBBtn>
        </div>
      )
    }

    return (
      <section className="text-center my-3">
        <MDBRow className="justify-content-center">
          <MDBCol size="12">
            <Swipeable onSwipedLeft={this.onNextClick} preventDefaultTouchmoveEvent={true} trackMouse={true} onSwipedRight={this.onPrevClick} >
              <div>
                <MDBAnimation reveal type="flipInX" duration="2s">
                  <h1 className="font-weight-bold">
                    Our Happy Students
                </h1>
                  <div className="d-flex flex-row testimonial-carousel" style={{ transform: 'translateX(' + this.state.translateX + ')' }}>
                    {items}
                  </div>
                </MDBAnimation>
              </div>
            </Swipeable>
          </MDBCol>
          { this.props.showControlButtons &&
            <MDBCol size="12">
              <div className="d-flex flex-row justify-content-center">
                <div className="pr-1">
                  <MDBAnimation reveal type="fadeIn" duration="2s">
                    <MDBBtn className="pl-4 pr-4 light-blue darken-4 border-radius-50" onClick={this.onPrevClick}>
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
          { this.props.showBullets && 
          <MDBCol size="12 pb-2">
            <MDBAnimation reveal type="fadeIn" duration="2s">
              <div className="d-flex flex-row justify-content-center">
                {bullets}
              </div>
            </MDBAnimation>
          </MDBCol> }
        </MDBRow>
      </section>
    );
  }
}
