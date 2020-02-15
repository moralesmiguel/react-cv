import React, {Component} from 'react';
import './Components/css/resume.css';
import Navigation from './Components/Navigation';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Education from './Components/Education';
import TechnicalSkills from './Components/TechnicalSkills';
import Skills from './Components/Skills';
import Awards from './Components/Awards';

const jobs=[{id:"1", position: "Finance Manager", company:"STF - Guadalajara Area, Mexico", description:"Created a business intelligence process for AR supported by metrics and visualization using Tableau for a weekly review with management. Established processes for budgeting, hedging, investments, analysis and cash positioning based on forecasting models I developed for the company. Moved the company from estimate guessing to being able to forecast months ahead through models that I made, which included variance analysis and preparation for plan deviations. Designed and defined the annual financial strategy for the organization.",date:"Dec 2017 - Jan 2019"},
{id:"2", position: "Cash and Liquidity Manager", company:"HP Inc. & Hewlett-Packard Co. - Guadalajara Area, Mexico", description:"Cash and liquidity management for Mexico, Puerto Rico, Brazil, Ecuador, Peru, Panama, Colombia, and Argentina. Once a month for Indonesia, South Korea, Thailand, and Singapore. Aided stock repurchase activities through reporting and financing. Prepared high-level reports for SEC reporting, month-end balances, investments, collateral and interest payments, cash and cash equivalents, and bank fees.",date:"Mar 2015 - Dec 2017"},
{id:"3", position: "Financial Operations Analyst", company:"Cyberpuerta - Guadalajara Area, Mexico", description:"Monthly audit of sales to detect any error in the database, transactions, or sales commissions. Assisted the CFO by becoming the focus point for all finance-related issues with vendors, banks, and customers. Handled the launch phase of the company’s proprietary ERP as its main user and tester, which required the ability to troubleshoot and identify opportunities. Cash management activities through careful supervision of AP, incoming payments, balance reviews, and currency exchange operations.",date:"Aug 2014 - Mar 2015"},
{id:"4", position: "Financial Analyst", company:"Hewlett-Packard Co. - Guadalajara, Area, Mexico", description:"Analysis of outstanding credits, payments, and underpayments in the HPFS accounts. Elaboration of strategies, projects, and working methods to improve results across teams. Focal point for WW project to streamline and document a process to adhere to HP’s policy. Weekly meetings with HPFS management to address issues and state action plans. Designed in one month a project to deal with a compliance issue of 75 items involving more than $500,000 USD.",date:"May 2012 - Jun 2014"},
{id:"5", position: "Payroll Financial Associate", company:"Hewlett-Packard Co. - Guadalajara, Area, Mexico", description:"Analyzed and reconciled cases involving salary adjustments and benefits, late payments, off cycle payments, termination payoffs, employees on disability leave and accruals. Developed and implemented a certified Lean Six Sigma LC project and a kaizen. Became an auditor due to maintaining a clean process in all the cells I worked in by preventing backlogs, escalations and keeping clear records in the respective accounts.",date:"Jun 2010 - May 2012"},
{id:"6", position: "Business Operations Analyst", company:"Soluciones Maresa - Puerto Vallarta, Mexico", description:"Assistance in monthly reconciliations (accounting analysis) and organization of the customer database. Preparing a budget and managing customer support through action plans and preventive actions in order to optimize operations.",date:"Jan 2009 - May 2010"},
{id:"7", position: "Marketing and Research Intern", company:"phpAuction - Barcelona, Spain", description:"Set up strategies to locate and identify potential clients, which were taken into account by management. Administered and organized clients through a CRM database. Examined surveys made to customers and prepared a report based on that review.",date:"Jun 2008 - Aug 2008"}
]

const schools=[{id:"1", name:"HyperionDev", degree:"Fullstack Web Development",description:"HTML, CSS, JavaScript, Node.js, MongoDB, Express, React, Next.js,",date:"Oct 2019 - Present"},
{id:"2", name:"EOI", degree:"Master's degree in Business Intelligence and Big Data",description:"Master's degree designed to adquire unique skills in data science, business analytics, and big data management.",date:"Oct 2017 - Nov 2018"},
{id:"3", name:"Universidad Panamericana", degree:"Corporate Finance",description:"Postgraduate degree with a curriculum in financial analysis, economics, capital management, budget and capital structure, investment, project, and company valuation, and risk management.",date:"Nov 2016 - Jun 2017"},
{id:"4", name:"Menlo College", degree:"Bachelor of Arts in Business Management",description:"Magna cum laude and Alpha Chi(given to students in the top 10% and with a GPA above 3.8)", date:"Aug 2005 - December 2008"},
]

class App extends Component {
render(){
  return (
    <div className="App">
      <Navigation />
    <div className="container-fluid p-0">
      <AboutMe />
      <Experience jobs={jobs} />
      <Education schools={schools} />
      <TechnicalSkills />
      <Skills />
      <Awards />
      </div>
    </div>
  );
}
}

export default App;
