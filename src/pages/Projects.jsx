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
          <h1>MIIA-MARIA STENIUS PROJECTS</h1>
          <div>
            <h2>PROJECT 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in semper ex. Praesent sollicitudin mollis diam, at porttitor urna auctor id. Nulla aliquet luctus lacus, at pharetra sem. In diam neque, dictum et viverra a, rhoncus euismod velit. Mauris faucibus leo nec leo tincidunt, eu lobortis nisl faucibus. Donec vitae hendrerit ante. Ut sit amet quam non dolor cursus auctor. Sed iaculis risus non blandit aliquam. In ut dignissim sem.</p>
          </div>
          <div>
            <img src={rescueproject1} alt="Screenshot of Hope Tails Rescue project" className="project1-img" />
            <img src={rescueproject2} alt="Screenshot of Hope Tails Rescue project" className="project1-img" />
          </div>
        </div>
      </div>
      <div className="secondary-container">
        <div className="contents">
          <div>
            <h2>PROJECT 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in semper ex. Praesent sollicitudin mollis diam, at porttitor urna auctor id. Nulla aliquet luctus lacus, at pharetra sem. In diam neque, dictum et viverra a, rhoncus euismod velit. Mauris faucibus leo nec leo tincidunt, eu lobortis nisl faucibus. Donec vitae hendrerit ante. Ut sit amet quam non dolor cursus auctor. Sed iaculis risus non blandit aliquam. In ut dignissim sem.  </p>
          </div>
          <div>
            <img src={locationproject1} alt="Screenshot of Location App project" className="project2-img" />
            <img src={locationproject2} alt="Screenshot of Location App project" className="project2-img" />
            <img src={locationproject3} alt="Screenshot of Location App project" className="project2-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;