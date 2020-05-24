import React from 'react';
import '../css/Courses.css'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBListGroup, MDBListGroupItem, MDBView, MDBMask, MDBIcon, MDBBtn } from 'mdbreact';

export default class Courses extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "Excellence Classes | Courses";
  }


  render() {
    const items = this.props.coursesData.map((item, index) =>
      <MDBCol key={index} xs="12" sm="12" md="6" lg="6" xl="4">
        <MDBAnimation reveal type={index % 2 === 0 ? 'zoomIn' : 'slideInLeft'} duration="1.5s" delay=''>
          <MDBListGroupItem className="border-0">
            <MDBView rounded zoom waves>
              <img src={item.imgSrc} height="300px" alt="" />
              <MDBMask className="d-flex justify-content-center align-items-end" overlay="black-slight" >
                <MDBBtn color="" className="w-100 m-0 mb-5 text-white pb-3 pt-3 z-depth-1 course-btn">
                  {item.name}
                  <MDBIcon icon="angle" className="ml-3" />
                </MDBBtn>
              </MDBMask>
            </MDBView>
          </MDBListGroupItem>
        </MDBAnimation>
      </MDBCol>
    );
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/subjects-bg_0DqneNjkC2.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>Courses</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="mt-5">
              <MDBListGroup>
                <MDBRow>
                  {items}
                </MDBRow>
              </MDBListGroup>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}