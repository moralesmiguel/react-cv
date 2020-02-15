import React from 'react';

function AboutMe(){
    return(
        <div>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Miguel
            <span className="text-primary">Morales</span>
          </h1>
          <div className="subheading mb-5">Guadalajara, Jalisco. Mexico · (XXX) XXX-XXXX ·
            <a href="mailto:name@email.com">name@email.com</a>
          </div>
          <p className="lead mb-5">Financial management and planning with background in big data, analytics, and web development.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/moralesmiquel/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/moralesmiguel/">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/dataandfinance">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
  
      <hr className="m-0" />
      </div>
    );
}

export default AboutMe;