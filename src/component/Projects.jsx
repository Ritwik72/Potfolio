import React from 'react'
import ProjectItems from './ProjectItems'

   
const data =[ 
        { 
          year: 1,
          title: 'ICIN-BANK',
          duration: 'Angular-SpringBoot-MySQL',
          roles:  'The project simulates online banking system. It allows to register/login, deposit/withdraw money from accounts, add/edit recipients, transfer money between accounts and recipients, view transactions, make appointments.',
        },{
          year: 2,
          title: 'FoodBox',
          duration: 'JavaScript-SpringBoot-Full-Stack Website',
          roles:  'This project simulates an online meal booking service. It is an intrusive website with both a user login and an admin login. It also has a demo pamyment page.',
        },{
          year: 3,
          title: 'Mwdicare',
          duration: 'SpringBoot, Java, MySQL, CSS',
          roles:  'This project demonstrates a well-defined medicine-buying website that includes a user login page, an admin login page, and a backend data management system. There, every order and product available may be managed.',
        },{
          year: 4,
          title: 'Logistics-Webiste',
          duration: 'JavaScript-HTML-CSS',
          roles:  ' A visually appealing website for a logistics workforce firm. The website was built entirely from scratch, using JavaScript, HTML, and CSS. ',
        },{
          year: 5,
          title: 'Personal Website',
          duration: 'React-Vite-Tailwind-CSS',
          roles:  'This project consist of creating and implement visually appealing and responsive user interfaces using HTML for structure, TailWind-CSS for styling, and JavaScript for interactivity in React-Vite framewok. Here all my project and my experiance are shown  ',
        }
        
      ]
      const Projects = () => {
        return (
          <div id='projects' className='maz-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-black'>Project </h1>
            {data.map((item, idx) => (
              <ProjectItems
               key ={idx} 
               year={item.year} 
               title={item.title} 
               duration={item.duration}
                roles={item.roles}
                />
            )
            
            )}
          </div>
        )
      }
      
      export default Projects
      
  