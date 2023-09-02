import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header id="home">
        <Navbar className="navbar" fixed="top" style={{ zIndex: 1000 }}>
        <Navbar.Brand>
        <Switch
              checked={this.state.checked}
              onChange={this.onThemeSwitchChange}
              offColor="#f0ede8"
              onColor="#353535"
              className="react-switch mx-auto"
              width={60}
              height={25}
              uncheckedIcon={
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="40" viewBox="0 0 24 24"><path d="M9.8216 2.23796C9.29417 3.38265 9 4.65697 9 6C9 10.9706 13.0294 15 18 15C19.343 15 20.6174 14.7058 21.762 14.1784C20.7678 18.6537 16.7747 22 12 22C6.47715 22 2 17.5228 2 12C2 7.22532 5.3463 3.23221 9.8216 2.23796ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z"></path></svg>
                </span>
              }
              checkedIcon={
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="18" viewBox="0 0 256 256"><path fill="white" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64Zm-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"></path></svg>
                </span>
              }
              id="icon-switch"
            />
          </Navbar.Brand>
          <Nav className="ml-auto" style={{ fontSize: "14px" }}>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              About Me
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Skills
            </Link>
            <Link
              to="resume"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Experience
            </Link>
          </Nav>
        </Navbar>
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;