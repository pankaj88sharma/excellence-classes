import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBView, MDBMask } from 'mdbreact';

export default class About extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentDidMount() {
    document.title = "Excellence Classes | About";
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/about-bg_aPLgCxaZr.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>About Us</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="mt-5">
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="h1-responsive font-weight-500">Imagining Teaching and Learning</p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  Learning and teaching are two recurrent processes which have been followed by human from its inception.
                  Modes, models and styles evolved over centuries but the quest of human to achieve knowledge never exhausted.
                  The last century experienced a revolution in the Indian education system, predominantly in the urban sphere where coaching classes laid its footprint.
            </p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  <strong>Excellence Classes</strong> too is an inspiration of this evolved education system catering to the aspiration
            of thousands of young buds to excel themselves in their academics and groom them to be a professional of next generation.
            </p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  <strong>Excellence Classes</strong> derives its inspiration from the legends of academics which speaks about understanding the subject ant its applications for the betterment of their life,
              enrichment of society and upliftment of their soul.
            </p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  We always say <strong>"SMILE - You are at Excellence"</strong>
                </p>
              </MDBAnimation>

              <MDBAnimation reveal type="slideInUp" delay="" duration="2s" className="mt-4">
                <p className="h1-responsive font-weight-500">Our Vision</p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  Teaching process has stayed the same for decades. The traditional teaching and offline education system are plagued with multiple inefficiencies.
            </p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  Our vision is to reimagine and evolve the way teaching and learning have been happening for decades.
                  By combining quality teachers, engaging content and superior technology we are able
                  to create a superior learning experience for students and aid in their outcome improvement.
            </p>
              </MDBAnimation>
              <MDBAnimation reveal type="slideInUp" delay="" duration="2s">
                <p className="font-size-1-1rem">
                  Teaching and learning are set to transform at a rapid pace and our mission is to accelerate these transformations.
            </p>
              </MDBAnimation>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}