import React from 'react';
import { MDBContainer, MDBAnimation, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import Testimonials from './Testimonials';
import Carousel from './Carousel';

export default class Home extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "Excellence Classes | Home";
  }

  render() {
    return (
      <div>
        <MDBContainer fluid className="pl-0 pr-0">
          <Carousel />
        </MDBContainer>
        <MDBContainer>
          <section className="text-center pb-5 pt-2 my-5">
            <MDBAnimation reveal type="zoomIn" duration="1.5s">
              <h1 className="font-weight-bold my-5">
                Why learn with us?
        </h1>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="flipInX" duration="2s">
                  <MDBIcon icon="chalkboard-teacher" size="4x" className="red-text" />
                  <h4 className="font-weight-bold my-4">Best Teachers</h4>
                  <p className="mb-md-0 mb-5">
                    From top tier colleges with 10+ years of experience.
            </p>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="flipInX" duration="2s">
                  <MDBIcon icon="graduation-cap" size="4x" className="cyan-text" />
                  <h4 className="font-weight-bold my-4">Adaptive Learning</h4>
                  <p className="mb-md-0 mb-5">
                    Delivering customized learning based on the student's learning pace.
            </p>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="flipInX" duration="2s">
                  <MDBIcon far icon="comments" size="4x" className="orange-text" />
                  <h4 className="font-weight-bold my-4">Live & Interactive</h4>
                  <p className="mb-md-0 mb-5">
                    2-way Interaction between student & teacher.
            </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </section>

          <section className="text-center pb-5 my-5">
            <MDBAnimation reveal type="zoomIn" duration="1.5s">
              <h1 className="font-weight-bold my-5">
                Our amazing team
        </h1>
            </MDBAnimation>
            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="flipInX" duration="2s">
                  <div>
                    {false && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Chahat</h4>
                  <h6 className="font-weight-bold grey-text mb-3">Bachelor of Education</h6>
                  <p className="">
                    10+ years of diversified teaching experience.
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/chahat-sharma-excellence-classes" target="_blank" rel="noopener noreferrer">
                      <i style={{ fontSize: '1.25em', background: '#0077B5' }} className="fab fa-linkedin-in p-2 rounded"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="flipInX" duration="2s">
                  <div>
                    {false && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Priyanka</h4>
                  <h6 className="font-weight-bold grey-text mb-3">Bachelor of Technology</h6>
                  <p className="">
                    Experience working with reputed organizations.
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/priyanka-b-581393191" target="_blank" rel="noopener noreferrer">
                      <i style={{ fontSize: '1.25em', background: '#0077B5' }} className="fab fa-linkedin-in p-2 rounded"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="4">
                <MDBAnimation reveal type="flipInX" duration="2s">
                  <div>
                    {false && <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Sample avatar"
                    />}
                  </div>
                  <h4 className="font-weight-bold my-4">Preeti</h4>
                  <h6 className="font-weight-bold grey-text mb-3">Bachelor of Physiotherapy</h6>
                  <p className="">
                    Comprehensive knowledge of medical domain.
            </p>
                  <div className="mb-md-0 mb-5">
                    <a className="btn-floating btn-lg mx-1 text-white" href="https://www.linkedin.com/in/preeti-sharma-excellence-classes" target="_blank" rel="noopener noreferrer">
                      <i style={{ fontSize: '1.25em', background: '#0077B5' }} className="fab fa-linkedin-in p-2 rounded"> </i>
                    </a>
                  </div>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
        <MDBContainer fluid className="pl-0 pr-0">
          <Testimonials />
        </MDBContainer>


      </div>
    );
  }
}
