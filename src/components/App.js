import React from 'react';
import '../css/App.css';
import { Route, Switch } from 'react-router-dom';
import { MDBBtn, MDBIcon } from "mdbreact";
import smoothscroll from 'smoothscroll-polyfill';
import _ from 'lodash';
import shortid from "shortid";
import Header from './Header';
import { menuLinksData } from '../data/MenuLinksData';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import { coursesData } from '../data/CoursesData';
import Gallery from './Gallery';
import { photosData } from "../data/PhotosData";
import Contact from './Contact';
import Resources from './Resources';
import { resourcesData } from '../data/ResourcesData';
import Footer from './Footer';
import Faculty from './Faculty';
import { facultyData } from '../data/FacultyData';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true,
      showHeader: true,
      yOffset: 0,
      showScrollToTop: false
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
          <Header showHeader={this.state.showHeader} menuLinksData={menuLinksData} updateLinkClick={this.updateLinkClick} />
        </header>
        <main>
          <Switch>
            <Route path="/" render={(props) => <Home showAvatar={true} {...props} />} exact />
            <Route path="/about" component={About} />
            <Route path="/courses" render={(props) => <Courses coursesData={coursesData} {...props} />} />
            <Route path="/faculty" render={(props) => <Faculty facultyData={facultyData}  {...props} />} />
            <Route path="/gallery" render={(props) => <Gallery photosData={photosData} {...props} handleScreenChange={this.handleScreenChange} />} />
            <Route path="/resources" render={(props) => <Resources resourcesData={resourcesData} {...props} />} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <div className={"scroll-top" + (this.state.showScrollToTop ? ' scroll-top-visible' : '')}>
          <MDBBtn onClick={this.handleOnTopClick} className="p-0 scroll-top-btn" color="elegant"><MDBIcon icon="angle-up" /></MDBBtn>
        </div>
        {this.state.showFooter &&
          <Footer ref={this.footerRef} />}
      </div>
    );
  }
}

export default App;