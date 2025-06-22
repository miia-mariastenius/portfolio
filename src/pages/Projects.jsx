import rescueproject1 from "../images/HopeTailsRescue1.jpg"
import rescueproject2 from "../images/HopeTailsRescue2.jpg"
import locationproject1 from "../images/LocationApp1.jpg"
import locationproject2 from "../images/LocationApp2.jpg"
import locationproject3 from "../images/LocationApp3.jpg"

function Projects() {
  return (
    <>
      <div className="header-container">
        <div className="contents">
          <div className="row">
            <h1>MIIA-MARIA STENIUS PROJECTS</h1>
            <section aria-labelledby="project1-title">
              <div className="row align-items-start">
                <div className="col-lg-6 order-lg-2">
                  <h2 id="project1-title">HOPE TAILS RESCUE: Pet adoption platform</h2>
                  <p className="project-description">A responsive web platform built with a team of 3 for pet lovers to browse and adopt rescue animals. Users can view pet profiles, read stories, and contact the shelter directly.</p>
                  <h3>KEY FEATURES</h3>
                  <ul>
                    <li>Built with React and Bootstrap</li>
                    <li>Users can browse pets and read their profiles</li>
                    <li>Mobile-friendly UI with responsive features</li>
                    <li>Collaborative team project (3 members)</li>
                  </ul>
                  <h3>MY ROLE</h3>
                  <p>I was responsible for 5 of the 11 pages (including Home, Blog, Info/Guides, FAQ, and the Adoption landing page), as well as implementing the navigation bar and footer. I also acted as project manager — handling task division, scheduling, and meetings. My focus was on structure and ensuring that the pages closely followed the visual designs created by our team’s UI designer.</p>
                  <h3>TECH STACK</h3>
                  <p>HTML / CSS / JavaScript, React, Bootstrap, GitHub, Figma, Canva</p>
                </div>
                <div className="col-lg-6 order-lg-1">
                  <img src={rescueproject1} alt="Hope Tails Rescue website homepage and About section with image of a dog high-fiving a woman. Group project screenshot." className="project1-img" />
                  <img src={rescueproject2} alt="Footer of Hope Tails Rescue project website showing contact details and logo." className="project1-img" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="secondary-container">
        <div className="contents">
          <div className="row">
            <section aria-labelledby="project2-title">
              <div className="row align-items-start">
                <div className="col-lg-6 order-lg-2">
                  <h2 id="project2-title">LOCATION SAVER APP</h2>
                  <p className="project-description">A mobile app for saving favorite locations and learning about countries. Locations are saved to Firebase per user and displayed on a personalized map.</p>
                  <h3>KEY FEATURES</h3>
                  <ul>
                    <li>Built with React Native, using Firebase Authentication and Firestore for user management and data storage</li>
                    <li>Users can save custom locations (city names) tied to their individual accounts</li>
                    <li>Markers displayed on Google Maps or Apple Maps, unique to each user</li>
                    <li>Search tool fetches country info, flags, and capitals from the REST Countries API</li>
                    <li>Bottom tab navigation for intuitive movement between views</li>
                  </ul>
                  <h3>MY ROLE</h3>
                  <p>Solo developer – responsible for the entire design, development, and deployment of the application</p>
                  <h3>TECH STACK</h3>
                  <p>React Native, Google Firebase, REST Countries API, GitHub, Figma</p>
                </div>
                <div className="col-lg-6 d-flex order-lg-1">
                  <div className="me-3">
                    <img src={locationproject1} alt="Location App login screen" className="project2-img" />
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                    <img src={locationproject2} alt="Map view showing a saved location" className="project2-img project2-img2" />
                    <img src={locationproject3} alt="List of saved locations" className="project2-img project2-img3" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;