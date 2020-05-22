import React from 'react';
import { testinomialsData } from './TestimonialsData';
import { MDBAnimation, MDBIcon, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import shortid from "shortid";
import { Swipeable } from 'react-swipeable'

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.size = testinomialsData.length;
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
    const items = testinomialsData.map((item, index) =>
      <div key={index} className="w-100 flex-shrink-0 p-4">
        <p>
          <MDBIcon icon='quote-left' /> {item.comment}
        </p>
        <h4 className='font-weight-bold'>{item.name}</h4>
      </div>
    );

    var bullets = [];
    for (var i = 0; i < this.size; i++) {
      var className = (i === this.state.currentIndex ? 'darken-4' : 'lighten-2') + ' blue-grey';
      bullets.push(
        <div key={i} >
          <MDBBtn onClick={i === this.state.currentIndex ? null : this.handleBulletClick.bind(this, i)} className={className} style={{ borderRadius: '50%', transition: '', padding: i === this.state.currentIndex ? '0.450rem' : '0.375rem' }}>
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
          {false &&
            <MDBCol size="12">
              <div className="d-flex flex-row justify-content-center">
                <div className="pr-1">
                  <MDBAnimation reveal type="fadeIn" duration="2s">
                    <MDBBtn className="pl-4 pr-4 light-blue darken-4" onClick={this.onPrevClick} style={{ borderRadius: '50%' }}>
                      <MDBIcon size="2x" icon="angle-left" />
                    </MDBBtn>
                  </MDBAnimation>
                </div>
                <div className="pl-1">
                  <MDBAnimation reveal type="fadeIn" duration="2s">
                    <MDBBtn className="pl-4 pr-4 light-blue darken-4" onClick={this.onNextClick} style={{ borderRadius: '50%' }} color="primary">
                      <MDBIcon size="2x" icon="angle-right" />
                    </MDBBtn>
                  </MDBAnimation>
                </div>
              </div>
            </MDBCol>
          }
          <MDBCol size="12 pb-2">
            <MDBAnimation reveal type="fadeIn" duration="2s">
              <div className="d-flex flex-row justify-content-center">
                {bullets}
              </div>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </section>
    );
  }
}
