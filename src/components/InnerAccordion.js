import React from 'react';
import { MDBCollapse, MDBIcon, MDBAnimation, MDBBtn } from 'mdbreact';

export default class InnerAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ''
    }
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(collapseID, e) {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  }

  render() {
    const collapseID = this.state.collapseID;
    const items = this.props.subjects.map((item, index) =>
      <MDBAnimation key={index} type={index % 2 === 0 ? 'zoomIn' : 'zoomIn'} duration="1s" delay="0.3s">
        <div>
          <MDBBtn onClick={this.toggleCollapse.bind(this, item.name)} className="w-100 d-flex justify-content-between align-items-center gradient-bg-primary m-0 p-2">
            <p className="m-0 font-size-1-1rem">{item.name}</p>
            <MDBIcon className={'accordion font-size-1-1rem' + (collapseID === item.name ? ' active-accordion' : '')}
              icon={'angle-down'}
            />
          </MDBBtn>
          <MDBCollapse id={item.name} isOpen={collapseID} className="">
            {
              item.chapters.map((item, index) =>
              <MDBAnimation key={index} type={index % 2 === 0 ? 'slideInLeft' : 'slideInLeft'} duration="1s">
                <div className="pt-2 pb-2 pl-1">
                  <a className="text-white resource-link" href={item.link} target="_blank" rel="noopener noreferrer"> <MDBIcon className="mr-2" icon="link" />Chapter {item.id} {item.title}</a>
                </div>
                </MDBAnimation>
              )
            }
          </MDBCollapse>
        </div>
      </MDBAnimation>
    );
    return (
      <div className="">
        {items}
      </div>
    );
  }
}