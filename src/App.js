import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MDBBtn, MDBIcon, MDBAnimation } from "mdbreact";
import smoothscroll from 'smoothscroll-polyfill';
import _ from 'lodash';
import shortid from "shortid";
import Header from './Header';
import Home from './Home';
import About from './About';
import Subjects from './Subjects';
import Gallery from './Gallery';
import Contact from './Contact';
import Resources from './Resources';
import Footer from './Footer';
import Faculty from './Faculty';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true,
      showHeader: true,
      yOffset: 0,
      showScrollToTop: false,
      showCallButton: true
    };
    this.footerRef = React.createRef();
    this.handleScreenChange = this.handleScreenChange.bind(this);
    this.updateLinkClick = this.updateLinkClick.bind(this);
    this.handleScroll = _.debounce(this.handleScroll.bind(this), 10);
    smoothscroll.polyfill();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScreenChange(e) {
    this.setState({
      showFooter: !e,
      showCallButton: !e
    })
  }

  updateLinkClick() {
    this.footerRef.current.reRender();
  }

  getId = () => {
    const id = shortid.generate();
    return id;
  };

  handleScroll() {
    var currentYOffset = window.scrollY;
    if (currentYOffset > 0 && currentYOffset < document.body.clientHeight && document.body.clientHeight > window.innerHeight + 600) {
      this.setState(prevState => ({
        showHeader: currentYOffset > prevState.yOffset ? false : true,
        yOffset: currentYOffset,
        showScrollToTop: currentYOffset > 600 ? true : false
      }))
    } else {
      this.setState(prevState => ({
        showHeader: true,
        yOffset: currentYOffset,
        showScrollToTop: false
      }))
    }
  }

  handleOnTopClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <div>
        <header >
          <Header showHeader={this.state.showHeader} updateLinkClick={this.updateLinkClick} />
        </header>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />} />
            <Route path="/about" component={About} />
            <Route path="/courses" component={Subjects} />
            <Route path="/faculty" component={Faculty} />
            <Route path="/gallery" render={(props) => <Gallery {...props} handleScreenChange={this.handleScreenChange} />} />
            <Route path="/resources" component={Resources} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <div className={"scroll-top" + (this.state.showScrollToTop ? ' scroll-top-visible' : '')}>
          <MDBBtn onClick={this.handleOnTopClick} className="p-0" style={{ borderRadius: "50%", width: "30px", height: "30px" }} color="elegant"><MDBIcon size="" icon="angle-up" /></MDBBtn>
        </div>
        {this.state.showFooter &&
          <Footer ref={this.footerRef} />}

        {this.state.showCallButton && <div className="d-none" style={{ position: 'fixed', left: '10px', bottom: '30px' }}>
          <MDBAnimation type="slideInUp" duration="1s">
            <a href="tel:+918130038068" className="text-white" target="_blank" rel="noopener noreferrer">
              <MDBIcon style={{borderRadius: '50%'}} className="p-2 blue" icon="phone" />
            </a>
          </MDBAnimation>
        </div>
        }
      </div>
    );
  }
}

export default App;