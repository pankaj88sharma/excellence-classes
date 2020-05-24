import React from 'react';
import emailjs from 'emailjs-com';
import { MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBRow, MDBCol, MDBAnimation, MDBInput, MDBBtn, MDBIcon, MDBView, MDBMask, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      name: '',
      email: '',
      subject: '',
      message: '',
      buttonDisplay: 'Send',
      buttonDisabled: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = "Excellence Classes | Contact";
  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.state.name === nextState.name && this.state.email === nextState.email
      && this.state.subject === nextState.subject && this.state.message === nextState.message
      && this.state.modal1 === nextState.modal1 && this.state.modal2 === nextState.modal2
      && this.state.buttonDisplay === nextState.buttonDisplay && this.state.buttonDisabled === nextState.buttonDisabled) {
      return false
    } else {
      return true
    }
  }

  handleOnChange(e) {
    if (e.target.name === "name") {
      this.setState({
        name: e.target.value
      })
    } else if (e.target.name === "email") {
      this.setState({
        email: e.target.value
      })
    } else if (e.target.name === "subject") {
      this.setState({
        subject: e.target.value
      })
    } else if (e.target.name === "message") {
      this.setState({
        message: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name !== '' && this.state.email !== '' && this.state.subject !== '' && this.state.message !== '') {
      this.setState({
        buttonDisplay: 'Sending...',
        buttonDisabled: true
      })
      emailjs.send('excellence-gmail', 'excellence-template', this.state, 'user_yhZ19MJX7a6Jd0ci7Xp6Z')
        .then((result) => {
          this.setState({
            modal1: true,
            name: '',
            email: '',
            subject: '',
            message: '',
            buttonDisplay: 'Send',
            buttonDisabled: false
          })
        }, (error) => {
          this.setState({
            modal2: true,
            buttonDisplay: 'Send',
            buttonDisabled: false
          })
        });
    }
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <React.Fragment>
        <MDBContainer fluid className="pl-0 pr-0 mb-5">
          <MDBAnimation type="" duration="2s">
            <MDBView src='https://ik.imagekit.io/excellenceclasses/contact-bg_FuVDrbVU9.jpg' className="h-40vh">
              <MDBMask overlay="black-strong" className="d-flex justify-content-center text-white text-center align-items-end">
                <MDBAnimation type="zoomIn" duration="1s" delay="0.3s">
                  <div className="page-bg">
                    <p>Contact Us</p>
                  </div>
                </MDBAnimation>
              </MDBMask>
            </MDBView>
          </MDBAnimation>
        </MDBContainer>
        <MDBContainer className="">
          <MDBModal isOpen={this.state.modal1} toggle={this.toggle(2)} size="md">
            <MDBModalBody>
              <div className="text-center">
                Thanks for writing to us. We will get back to you shortly!
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="btn btn-sm" color="primary" onClick={this.toggle(1)}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="md">
            <MDBModalBody>
              <div className="text-center">
                Your message was not sent. Please try again after sometime.
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className="btn btn-sm" color="primary" onClick={this.toggle(2)}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <MDBRow className="text-center my-4">
            <MDBCol lg="4">
              <MDBAnimation reveal type="slideInLeft" delay="" duration="2s">
                <a href="https://goo.gl/maps/xUfdfCwLM3jYPBFT7" className="red-text" target="_blank" rel="noopener noreferrer">
                  <MDBIcon size="3x" icon="map-marker-alt" />
                </a>
                <p className="font-weight-500 mb-0">B-2/384, Yamuna Vihar</p>
                <p className="mb-4 font-weight-500">New Delhi, India</p>
              </MDBAnimation>
            </MDBCol>
            <MDBCol lg="4">
              <MDBAnimation reveal type="slideInLeft" delay="" duration="2s">
                <MDBDropdown>
                  <MDBDropdownToggle size="lg" className="cyan-text z-depth-0 p-0" color="">
                    <MDBIcon size="3x" icon="phone" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="unique-color-dark p-0">
                    <MDBDropdownItem href="tel:+918130038068" className="text-white">
                      < MDBIcon className="mr-2" icon="mobile-alt" />+ 91 8130 038 068
                  </MDBDropdownItem>
                    <MDBDropdownItem href="tel:+919650502389" className="text-white"><MDBIcon className="mr-2" icon="mobile-alt" />+ 91 9650 502 389</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                <p className="font-weight-500 mb-0">+ 91 8130 038 068</p>
                <p className="mb-4 font-weight-500">+ 91 9650 502 389</p>
              </MDBAnimation>
            </MDBCol>
            <MDBCol lg="4">
              <MDBAnimation reveal type="slideInLeft" delay="" duration="2s">
                <a href="mailto:excellence.classes.edu@gmail.com" className="orange-text" target="_blank" rel="noopener noreferrer">
                  <MDBIcon size="3x" icon="envelope" />
                </a>
                <p className="font-weight-500">excellence.classes.edu@gmail.com</p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="4" className="mb-4">
              <MDBAnimation reveal type="slideInLeft" delay="" duration="2s">
                <form className="p-4 rounded z-depth-1 h-500px" onSubmit={this.handleSubmit} >
                  <div className="grey-text">
                    <MDBInput label="Your name" autoComplete="off" value={this.state.name} onChange={this.handleOnChange} name="name" icon="user" type="text" required />
                    <MDBInput label="Your email" autoComplete="off" value={this.state.email} onChange={this.handleOnChange} name="email" icon="envelope" type="email" required />
                    <MDBInput label="Subject" autoComplete="off" value={this.state.subject} onChange={this.handleOnChange} name="subject" icon="tag" type="text" required />
                    <MDBInput type="textarea" autoComplete="off" value={this.state.message} onChange={this.handleOnChange} name="message" rows="4" label="Your message" icon="pencil-alt" required />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary" disabled={this.state.buttonDisabled} type="submit">
                      {this.state.buttonDisplay}
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBAnimation>
            </MDBCol>
            <MDBCol lg="8">
              <MDBAnimation reveal type="zoomIn" delay="" duration="2s">
                <div
                  id="map-container"
                  className="rounded z-depth-1-half map-container h-500px"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13998.51240427069!2d77.26068652830016!3d28.70076948971831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc1388864abb%3A0xd076f7ba2ac1fdca!2sB2%20Block%2C%20Block%20B%2C%20Yamuna%20Vihar%2C%20Shahdara%2C%20New%20Delhi%2C%20Delhi%20110053!5e0!3m2!1sen!2sin!4v1589700474213!5m2!1sen!2sin"
                    title="Google Maps"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="border-0"
                  />
                </div>
                <br />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </React.Fragment>
    );
  }
}


export default Contact;