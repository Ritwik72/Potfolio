import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2023,
    title: 'LR Logistics (Web Developer)',
    duration: 'From October 2023 to till now',
    roles: 'Cordinating and managing the application development team for the Mobile Application Development for our compny along with Doing Digital marketing for the company. ',
    roles1:'Create and implement visually appealing and responsive user interfaces frontend of the website using HTML for structure, CSS for styling, and JavaScript for interactivity. Administrative work, marketing, and Creating and maintaining documentation Deploy and manage web applications on servers, ensuring smooth and secure operation.',
  }, {
    year: 2023,
    title: 'B2W (Web Developer)',
    duration: 'May 2023 to October 2023 (5 months)',
    roles: 'My job responsibilities involve designing and developing an interactive website for a furniture company using JavaScript, CSS, and HTML. Also, get an opportunity to develop on the Flutter framework. ',
  }, {
    year: 2022,
    title: 'National Institute of Technology Silchar (Junior Research Fellow-Robotic Engineer)',
    duration: 'November 2022 to April 2023 (6 Months)',
    roles: 'Design and development of a three-dimensional printer using robotic manipulators.',
    roles1: 'Conducting a literature review involves acquiring and analysing data using Matlab, and documenting the experiment.',
  }, {
    year: 2021,
    title: 'DST Lab IIEST (Reseach Assistance)',
    duration: 'May 2021-Aug 2022 (1y 6 Months)',
    roles: 'Design and development of ZrB2-B4C composiste and testing its properties. ',
    roles1: 'Analysis of research data utilising statistical methods to detect, analyse and explain patterns and trends in complicated data sets to make it simple and convenient.',
  }, {
    year: 2020,
    title: 'Chegg inc (Education Pofessional) ',
    duration: 'May 2020- Oct 2020 (8 Months)',
    roles: 'Clearing the student question related to mathamatics and science,',
    roles1:'Here my job role include providing explanation of question in step by step and ensuring accurate and clear understand of the subject',
  },{
    year: 2016,
    title: 'Automotive skills development council(ASDC Intership) ',
    duration: 'Sep 2016- Aug 2018 (2 Years)',
    roles: 'Brand Promotion and creating awarness about the ASDC project',
    roles1:'Its include creationg web content, socila media management, motivating student and classmate to actively paticpate in the skill development program. ',
  }

]
const Work = () => {
  return (
    <div id='work' className='maz-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-black'>Work </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          roles={item.roles}
          roles1={item.roles1}
        />
      )

      )}
    </div>
  )
}

export default Work;
