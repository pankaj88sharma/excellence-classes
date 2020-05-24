import React from 'react';
import '../css/Resources.css'
import InnerAccordion from './InnerAccordion';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBCollapse, MDBView, MDBMask, MDBIcon, MDBBtn } from 'mdbreact';

export default class Resources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    }
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentDidMount() {
    document.title = "Excellence Classes | Resources";
  }


  toggleCollapse(collapseID, e) {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  }

  render() {
    const collapseID = this.state.collapseID;
    const items = this.props.resourcesData.map((item, index) =>
      <MDBAnimation key={index} type={index % 2 === 0 ? 'flipInX' : 'zoomIn'} duration="2s" delay="0.3s">
        <div className="p-2">
          <MDBBtn onClick={this.toggleCollapse.bind(this, item.class)} className="w-100 d-flex justify-content-between align-items-center gradient-bg-primary m-0 p-2">
            <p className="m-0 font-size-1-375rem">Class {item.class}</p>
            <MDBIcon className={'accordion font-size-1-375rem' + (collapseID === item.class ? ' active-accordion' : '')}
              icon={'angle-down'}
            />
          </MDBBtn>
          <MDBCollapse id={item.class} isOpen={collapseID}>
            <div>
              <InnerAccordion subjects={item.subjects} />
            </div>
          </MDBCollapse>
        </div>
      </MDBAnimation>
    );
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0">
          <MDBAnimation type="" duration="">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/patrick-tomasso-Oaqk7qqNh_c-unsplash_sj0sFhbbc.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>Resources</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol sm="12" md="12" lg="10" className="mt-5">
              <MDBAnimation type="flipInX" duration="2s" delay="">
                <p className="h1-responsive text-center"><strong>NCERT Textbook Solutions</strong></p>
              </MDBAnimation>
              <MDBAnimation type="" duration="" delay="">
                <div className="rounded gradient-bg-primary p-2">
                  {items}
                </div>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}