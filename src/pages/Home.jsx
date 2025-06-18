import {Link} from "react-router-dom";
import portrait from "../images/20230920_105540.jpg"
import { FaCode, FaFigma, FaGlobe } from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="header-container">
        <div className="contents row">
          <div className="col-xxl-8">
            <h1>MIIA-MARIA STENIUS PORTFOLIO</h1>
            <section>
              <h2>PROFESSIONAL BACKGROUND</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in semper ex. Praesent sollicitudin mollis diam, at porttitor urna auctor id. Nulla aliquet luctus lacus, at pharetra sem. In diam neque, dictum et viverra a, rhoncus euismod velit. Mauris faucibus leo nec leo tincidunt, eu lobortis nisl faucibus. Donec vitae hendrerit ante. Ut sit amet quam non dolor cursus auctor. Sed iaculis risus non blandit aliquam. In ut dignissim sem.</p>
            </section>
          </div>
          <div className="col col-lg-4">
            <img src={portrait} alt="Portrait of Miia-Maria Stenius" className="portrait-img" />
          </div>
        </div>
      </div>
      <div className="secondary-container">
        <div className="contents">
          <div className=" row">
            <section>
              <h2>SKILLS AND EXPERTISE</h2>
              <div className="skills-grid row pt-2">
                <div className="skill col">
                  <h3 aria-label="Development" className="skill-container">
                    <FaCode size={42} color="white" aria-hidden="true" />
                  </h3>
                  <p>I enjoy building clean, functional websites with HTML, CSS, and JavaScript. I also have knowledge in React and React Native, as well as WordPress development. I'm focused on writing accessible, responsive code that works for everyone.</p>
                </div>
                <div className="skill col">
                  <h3 aria-label="Design" className="skill-container">
                    <FaFigma size={42} color="white" aria-hidden="true" />
                  </h3>
                  <p>I use Figma to design and plan layouts before development. It helps me visualize and iterate ideas efficiently. Other image editing software I’ve used are Adobe Photoshop and Illustrator.</p>
                </div>
                <div className="skill col">
                  <h3 aria-label="Languages" className="skill-container">
                    <FaGlobe size={42} color="white" aria-hidden="true" />
                  </h3>
                  <p>Finnish is my native language, and I’m fluent in English. I’m also learning Japanese and really enjoy practicing it at an intermediate level. I appreciate how language connects people. I've also studied Swedish and German in school, which gave me a broader perspective.</p>
                </div>
              </div>
              <Link to="/projects" className="btn">
                CHECK MY PROJECTS
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;