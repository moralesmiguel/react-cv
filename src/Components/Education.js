import React from 'react';

function Education(props){
    const listEducation = props.schools.map((school)=>
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{school.name}</h3>
      <div className="subheading mb-3">{school.degree}</div>
      <p>{school.description}</p>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{school.date}</span>
    </div>
  </div>
    );
    return(
    <div>
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
            {listEducation}
      </div>
    </section>
    <hr className="m-0" />
    </div>
    );
}

export default Education;