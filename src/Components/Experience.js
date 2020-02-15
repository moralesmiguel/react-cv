import React from 'react';

function Experience(props){
    const listExperience = props.jobs.map((job)=>
    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
    <div className="resume-content">
      <h3 className="mb-0">{job.position}</h3>
      <div className="subheading mb-3">{job.company}</div>
      <p>{job.description}</p>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{job.date}</span>
    </div>
  </div>
    );
    return(
    <div>
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
            {listExperience}
      </div>
    </section>
    <hr className="m-0" />
    </div>
    );
}

export default Experience;