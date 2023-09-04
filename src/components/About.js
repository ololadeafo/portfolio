import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="300px"
                    src={require("../Images/Software_engineer.gif")}
                    alt="Avatar placeholder"
                  />
                </span>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 64 64"><path fill="#ec1c24" d="M57.55 14.452c9.697 14.11 6.11 33.405-8 43.1c-14.11 9.697-33.407 6.112-43.1-8c-9.687-14.11-6.111-33.407 8-43.1c14.11-9.697 33.406-6.11 43.1 8"></path></svg></span>{" "}
                    &nbsp;{" "}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#FDCB58"></circle></svg></span>{" "}
                    &nbsp;{" "}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 36 36"><circle cx="18" cy="18" r="18" fill="#78B159"></circle></svg>
                    </span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                     <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                  </div>
                </div>
                <div className="text-center mt-5">
                  <a href={require("../resume/Ololade_Afolabi_Resume.pdf")} download>
                    <button className="resume-button">Download Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;