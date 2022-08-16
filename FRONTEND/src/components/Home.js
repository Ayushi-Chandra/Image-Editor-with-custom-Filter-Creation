import React from "react";

import "./home.css";

const Home = () => {


  return (
    <div>
      

      
        <div
          className="p-5 text-center bg-image"
          style={{
                  backgroundImage: `url('https://www.sodapdf.com/blog/wp-content/uploads/2018/06/best-free-photo-editing-software.jpg')`,
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "50% 50%",
                  backgroundColor: "rgba(0, 0, 0, 0)"
                }}
               
              
                
          aria-controls="#picker-editor"></div>

        <div className="container">
          <div
            className="card mx-4 mx-md-5 text-center shadow-5-strong"
            style={{
                    marginTop: "-120px",
                    background: "hsla(0, 0%, 100%, 0.7)",
                    backdropFilter: "blur(30px)"
                  }}
          >
            <div className="card-body px-4 py-5 px-md-5">
              <h1 className="display-3 fw-bold ls-tight mb-4">
                <span>The best <span className="text-primary">Image Editor</span> on the market</span> <br />
                <span >for your photos</span>
              </h1>
              <a
                className="btn btn-primary btn-lg py-3 px-5 mb-2 mb-md-0 me-md-2"
                href="/login"
                role="button"
                aria-controls="#picker-editor"
                draggable="false"
              >
                Get started
              </a>
              <a
                className="btn btn-link btn-lg py-3 px-5 mb-2 mb-md-0"
                data-ripple-color="primary"
                href="#"
                role="button"
                aria-controls="#picker-editor"
                draggable="false"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
     

      <div data-draggable="true" style={{position: "relative"}}>
        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 text-center">
            <h2 className="fw-bold mb-5 text-center">
              <span className="me-1 ">Why is it so</span>
              <u className="text-primary">great?</u>
            </h2>
            <div className="row gx-lg-5">
              <div className="col-md-4 mb-5 mb-md-0">
                <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                  <i
                    className="fas fa-headset fa-lg text-white fa-fw"
                    aria-controls="#picker-editor"
                  ></i>
                </div>
                <h5 className="fw-bold mb-3">Support 24/7</h5>
                <p className="text-muted mb-0">
                  We provide 24/7 support if you face any difficulty while using our product.
                  Edit your image, share on social media and enjoy. This is the best Image Editor 
                  on the market. 
                </p>
              </div>
              <div className="col-md-4 mb-5 mb-md-0">
                <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                  <i
                    className="fas fa-shield-alt fa-lg text-white fa-fw"
                    aria-controls="#picker-editor"
                  ></i>
                </div>
                <h5 className="fw-bold mb-3">Security</h5>
                <p className="text-muted mb-0">
                  This app is extremely secure. Your photos are safely stored in our database 
                  so that next time you login you will find it here.
                </p>
              </div>
              <div className="col-md-4 mb-5 mb-md-0">
                <div className="p-3 bg-primary rounded-4 shadow-2-strong d-inline-block mb-4">
                  <i
                    className="fas fa-shipping-fast fa-lg text-white fa-fw"
                    aria-controls="#picker-editor"
                  ></i>
                </div>
                <h5 className="fw-bold mb-3">Features</h5>
                <p className="text-muted mb-0">
                  This web app has many features - applying custom filters on your images and
                  save those filters to be used on other images. 
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
      <div data-draggable="true" style={{position: "relative"}}>
        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 background-radial-gradient">
            <style></style>
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start">
              <div className="row gx-lg-5 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <h1
                    className="my-4 display-3 fw-bold ls-tight"
                    style={{color: "hsl(218, 81%, 95%)"}}
                  >
                    <span>Do not miss</span> <br />
                    <span style={{color: "hsl(218, 81%, 75%)"}}>any updates</span>
                  </h1>
                  <p
                    className="mb-4 opacity-70 lead"
                    style={{color: "hsl(218, 81%, 85%)"}}
                  >
                    We will write rarely and only high-quality content.
                  </p>
                </div>
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card bg-glass">
                    <div className="card-body py-5 px-md-5">
                      <div className="mb-5 text-center">
                        <h2 className="fw-bold mb-3">
                          Subscribe to the newsletter
                        </h2>
                      </div>
                      <form>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form5Example1"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            
                            style={{marginLeft: "0px"}}
                          >
                            Name
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{width: "9px"}}
                            ></div>
                            <div
                              className="form-notch-middle"
                              style={{width: "42.4px"}}
                            ></div>
                            <div className="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form5Example2"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            
                            style={{marginLeft: "0px"}}
                          >
                            Email address
                          </label>
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{width: "9px"}}
                            ></div>
                            <div
                              className="form-notch-middle"
                              style={{width: "88.8px"}}
                            ></div>
                            <div className="form-notch-trailing"></div>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form5Example3"
                            
                          />
                          <label className="form-check-label">
                            I have read and agree to the terms
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-md-4"
                          aria-controls="#picker-editor"
                        >
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <div data-draggable="true" className="" style={{position: "relative"}}>
        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="mb-10 text-center">
            <div className="p-5">
              <h2 className="my-5 display-5 fw-bold ls-tight">
                <span>Let's stay in touch</span> <br />
                <span className="text-primary">Join our social media</span>
              </h2>

              <a
                className="btn btn-primary btn-lg me-md-2 mb-3"
                style={{backgroundColor: "#3b5998"}}
                href="#!"
                role="button"
              >
                <i
                  className="fab fa-facebook-f me-2"
                  aria-controls="#picker-editor"
                ></i>
                <span>Facebook</span>
              </a>

              <a
                className="btn btn-primary btn-lg me-md-2 mb-3"
                style={{backgroundColor: "#55acee"}}
                href="#!"
                role="button"
              >
                <i
                  className="fab fa-twitter me-2"
                  aria-controls="#picker-editor"
                ></i>
                <span>Twitter</span>
              </a>

              <a
                className="btn btn-primary btn-lg me-md-2 mb-3"
                style={{backgroundColor: "#ed302f"}}
                href="#!"
                role="button"
              >
                <i
                  className="fab fa-youtube me-2"
                  aria-controls="#picker-editor"
                ></i>
                <span>YouTube</span>
              </a>

              <a
                className="btn btn-primary btn-lg me-md-2 mb-3"
                style={{backgroundColor: "#ac2bac"}}
                href="#!"
                role="button"
              >
                <i
                  className="fab fa-instagram me-2"
                  aria-controls="#picker-editor"
                ></i>
                <span>Instagram</span>
              </a>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Home;