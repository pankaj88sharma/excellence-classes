import React from "react";
import shortid from "shortid";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBAnimation } from "mdbreact";

export default class FooterPage extends React.PureComponent {

  reRender() {
    this.forceUpdate()
  }

  getId = () => {
    const id = shortid.generate();
    return id;
  };

  render() {
    return (
      <MDBAnimation key={this.getId()} reveal type="fadeIn" delay="" duration="0.5s">
        <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center">
            <MDBRow>
              <MDBCol size="12">
                <div className="text-center">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a className="btn-floating btn-lg" href="https://www.facebook.com/excellenceclasses100" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"> </i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-lg" href="https://twitter.com/ExcellenceClas3" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"> </i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-lg" href="http://www.linkedin.com/in/excellenceclasses" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"> </i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-lg" href="https://www.instagram.com/excellence_classes_yamunavihar/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"> </i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-lg" href="https://wa.me/919899393300" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"> </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="/"> <strong>ExcellenceClasses.co.in</strong> </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </MDBAnimation>
    );
  }
}