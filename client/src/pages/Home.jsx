import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import ScholarshipDomains from "./ScholarshipDomains";
import comicImage from "../assets/cat.jpg";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';                                                                                                             

const Home = () => {
  return (
    <div className="text-center w-100">
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3 text-primary" href="/">
            ScholarSync
          </a>

          <form className="d-flex mx-auto" style={{ maxWidth: "400px", width: "100%" }}>
            <input 
              className="form-control me-2"
              type="search"
              placeholder="Search scholarships..."
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>

          <div className="d-flex">
            <a href="#categories" className="btn btn-outline-primary me-2">Categories</a>
            <a href="#comic" className="btn btn-outline-info me-2">Need Help?</a>
            <a href="/login" className="btn btn-outline-secondary me-2">Login</a>
            <a href="/register" className="btn btn-primary">Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-4 pb-2 bg-light">


        <div className="text-center container">
          <h1 className="display-4 fw-bold text-primary">Welcome to ScholarSync</h1>
          <p className="lead text-dark">Find the perfect scholarship for your future.</p>
          <a href="#categories" className="btn btn-primary btn-lg mt-3">
            Get Started
          </a>
        </div>
      </section>
      {/* Popular Scholarships Section */}
<section className="py-5 bg-white" id="popular-scholarships">
  <div className="container">
    <h2 className="text-primary fw-bold text-center mb-5">Popular Scholarships</h2>
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="card-body">
            <h5 className="card-title text-primary">National Merit Scholarship</h5>
            <p className="card-text">Awarded to students with exceptional academic achievements.</p>
            <a href="/scholarships/national-merit" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="card-body">
            <h5 className="card-title text-primary">STEM Excellence Award</h5>
            <p className="card-text">For students pursuing degrees in Science, Technology, or Math.</p>
            <a href="/scholarships/stem-excellence" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="card-body">
            <h5 className="card-title text-primary">Community Service Grant</h5>
            <p className="card-text">For students with outstanding volunteer records and leadership.</p>
            <a href="/scholarships/community-service" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div className="card-body">
            <h5 className="card-title text-primary">Arts and Culture Grant</h5>
            <p className="card-text">Supports creative students excelling in fine arts, music, or drama.</p>
            <a href="/scholarships/arts-culture" className="btn btn-outline-primary btn-sm">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Categories Section */}
      <section id="categories">
        <ScholarshipDomains />
        <div className="text-center mt-4">
          <a href="#comic" className="btn btn-outline-info btn-lg">Need Help?</a>
        </div>
      </section>

      {/* Comic Section */}
      <section className="py-5 bg-light" id="comic">
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-4">Still Confused?</h2>
          <p className="text-muted mb-4">Let the cats explain how ScholarSync can help!</p>
          <img 
            src={comicImage}
            alt="Comic"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%", height: "auto", border: "4px solid #0d6efd" }}
          />
        </div>
      </section>

      {/* Info Steps Section */}
      <section className="bg-primary text-white py-5" id="steps">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4 mb-4">
              <Link to="/register" className="text-white text-decoration-none">
                <i className="bi bi-person-plus" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="mt-3">Register Your Account</h4>
                <hr className="border-light w-25 mx-auto" />
                <p>Register now to stay updated with the latest scholarship opportunities.</p>
              </Link>
            </div>
            <div className="col-md-4 mb-4">
              <Link to="/#categories" className="text-white text-decoration-none">
                <i className="bi bi-search" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="mt-3">Search for Scholarships</h4>
                <hr className="border-light w-25 mx-auto" />
                <p>Get leads that match your educational and financial background.</p>
              </Link>
            </div>
            <div className="col-md-4 mb-4">
              <Link to="/login" className="text-white text-decoration-none">
                <i className="bi bi-hand-thumbs-up" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="mt-3">Get Assistance</h4>
                <hr className="border-light w-25 mx-auto" />
                <p>Apply directly or get guided help from our support team.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light" id="faq">
        <div className="container">
          <h2 className="text-primary fw-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                  What is ScholarSync?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  ScholarSync is a platform that helps students find and apply for scholarships based on their profiles.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                  How do I apply for a scholarship?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Simply search for scholarships using the platform, click on a scholarship, and follow the application instructions.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                  Is ScholarSync free to use?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, ScholarSync is completely free for students to use.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                  How can I search for scholarships?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Use our search tool to find scholarships based on your background, educational field, and needs.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
                  What type of scholarships can I find?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  You can find scholarships for various categories like high school, undergraduates, and postgraduates.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading6">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
                  Can I apply for multiple scholarships?
                </button>
              </h2>
              <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, you can apply for as many scholarships as you are eligible for.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading7">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7">
                  How do I know if I’m eligible for a scholarship?
                </button>
              </h2>
              <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Each scholarship page will show you the eligibility requirements and instructions.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading8">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8">
                  How do I track my application status?
                </button>
              </h2>
              <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  You can track your applications from your account dashboard.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="heading9">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9">
                  What should I include in my application?
                </button>
              </h2>
              <div id="collapse9" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Your academic transcripts, letters of recommendation, personal statement, and any other required documents.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-primary fw-bold mb-4">About Us</h2>
          <p>We are a team dedicated to helping students find the best scholarship opportunities that align with their needs.</p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-primary fw-bold mb-4">Contact Us</h2>
          <p className="text-muted mb-4">
            If you have any questions, or if you need assistance, feel free to reach out to us! We’re here to help you with your scholarship journey.
          </p>

          {/* Contact Information */}
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-primary">Get in Touch</h5>
              <p className="text-muted">
                You can contact us by email, phone, or through our social media channels:
              </p>
              <ul className="list-unstyled">
                <li>
                  <strong>Email:</strong> <a href="mailto:contact@scholarsync.com">contact@scholarsync.com</a>
                </li>
                <li>
                  <strong>Phone:</strong> +91 7411292301
                </li>
                <li>
                  <strong>Address:</strong> 132 Aecs Layout, Itpl Main Road, Kundalahalli, Bengaluru, Karnataka 560037
                </li>
                <li>
                  <strong>Follow Us:</strong>
                  <ul className="list-inline mt-2">
                    <li className="list-inline-item">
                      <a href="https://facebook.com/scholarsync" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook fs-4"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://twitter.com/scholarsync" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter fs-4"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://instagram.com/scholarsync" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram fs-4"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <h5 className="text-primary">Send Us a Message</h5>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;