import React, { Component } from "react";
import Spinner from "./Spinner";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
  }

  handleImageLoaded = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { imageLoaded } = this.state;

    return (
      <div className="container">
        <div
          className="card mb-3"
          style={{
            margin: "35px 0px",
            marginTop: "90px",
            backgroundColor: "#f0f0f0",
            borderRadius: "30px",
          }}
        >
          {!imageLoaded && <Spinner />}
          <img
            src="https://www.linkpicture.com/q/IMG_20230805_233211.jpg"
            className="card-img-top"
            style={{
              height: "440px",
              objectFit: "contain",
              display: imageLoaded ? "block" : "none",
            }}
            alt="..."
            onLoad={this.handleImageLoaded}
          />
          <div className="card-body">
            <h5 className="card-title">
              <i>About us</i>
            </h5>
            <p className="card-text">
              {" "}
              <i>
                Welcome to NewsMagier! NewsMagier is an innovative and dynamic
                news website created by <strong>Vibhor Arya</strong>, a student
                pursuing a Master's in Computer Applications from Graphic Era
                University. With a passion for technology and a keen interest in
                the world of news, Vibhor has combined his skills and knowledge
                to bring you a cutting-edge news platform like no other. At
                NewsMagier, we believe in providing our readers with the latest
                and most relevant news from around the globe. Powered by React
                JS and utilizing the New York Times News API, we ensure that you
                stay informed about the most significant events, developments,
                and stories shaping our world today. Our mission is to offer a
                seamless and user-friendly experience, allowing you to explore a
                wide range of topics, from politics and technology to
                entertainment and sports. We strive to deliver accurate and
                up-to-date information, presenting it in an engaging and
                visually appealing manner. Whether you're a news enthusiast or
                just seeking to stay informed, NewsMagier is your go-to
                destination. Stay connected with us as we continue to evolve and
                expand our platform to cater to your news needs with the utmost
                dedication and commitment to excellence. Thank you for being a
                part of the NewsMagier community, and we look forward to keeping
                you informed and inspired every step of the way
              </i>
              .
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Team NewsMagier{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-c-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z" />
                </svg>
              </small>
            </p>
          </div>
        </div>
        <div className="card-group">
          <div
            className="card"
            style={{
              backgroundColor: "#B6BDAD",
              borderRadius: "40px",
              marginRight: "10px",
            }}
          >
            <div className="container d-flex justify-content-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <div className="card-body">
              <h5 className="text-center">github</h5>
              <div className="container d-flex justify-content-center">
                <a
                  href="https://github.com/vibhorarya12"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              backgroundColor: "#B82DAD",
              borderRadius: "40px",
              marginRight: "10px",
            }}
          >
            <div className="container d-flex justify-content-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </div>
            <div className="card-body">
              <h5 className="text-center">Instagram</h5>
              <div className="container d-flex justify-content-center">
                <a
                  href="https://instagram.com/iam_vibhor47?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{ backgroundColor: "#4DCDCB", borderRadius: "40px" }}
          >
            <div className="container d-flex justify-content-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                fill="currentColor"
                className="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </div>
            <div className="card-body">
              <h5 className="text-center">Discord</h5>

              <div className="container d-flex justify-content-center">
                <a
                  href="https://discord.com/users/491091986334351360"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
