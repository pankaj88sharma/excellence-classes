import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBView, MDBMask } from 'mdbreact';

export default class Faculty extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "Excellence Classes | Faculty";
  }

  render() {
    const items = this.props.facultyData.map((item, index) =>
      <MDBCol className="mb-4" key={index} sm="12" md="6" lg="4">
        <MDBAnimation reveal type={index % 2 === 0 ? 'zoomIn' : 'slideInLeft'} duration="1.5s" delay=''>
          <div style={{height: '200px', overflowY: 'auto'}} className="p-4 border rounded z-depth-2 gradient-bg-primary text-white">
            <h4>{item.name.toUpperCase()}</h4>
            <p className="m-0 font-size-1-25rem">{item.education}</p>
            <p className="m-0">{item.info}</p>
          </div>
        </MDBAnimation>
      </MDBCol>
    );
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/pang-yuhao-_kd5cxwZOK4-unsplash_lr9vMlAJl.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>Faculty</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12" className="mt-5">
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">Our faculty is an acclaimed group of scholars and researchers whose teaching is augmented by the contemporariness of their academic knowledge and real world experience. Not only are they eminently capable teachers but also compassionate mentors to students. Faculty also include members with outstanding international education background, scholarship, experience and orientation.
                </p>
              </MDBAnimation>
              <MDBRow className="mt-5">
                {items}
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}