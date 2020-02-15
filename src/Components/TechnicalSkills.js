import React from 'react';

function TechnicalSkills(){
    return(
        <div>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="techskills">
            <div className="w-100">
                <h2 className="mb-5">Technical Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-python"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-r-project"></i>
          </li>
          <li className="list-inline-item">
            <i className="fas fa-database"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-wordpress"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Also:</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            MongoDB, Express, Tableau, and SQL</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Debugging &amp; cross-browser testing</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross-functional Teams</li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; LSS</li>
        </ul>
            </div>
    </section>
    <hr className="m-0" />
    </div>
    );
}

export default TechnicalSkills;