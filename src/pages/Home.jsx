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
              <div className="skills-grid">
                <div className="skill">
                  <h3 aria-label="Development">
                    <FaCode aria-hidden="true" />
                  </h3>
                </div>
                <div className="skill">
                  <h3 aria-label="Design">
                    <FaFigma aria-hidden="true" />
                  </h3>
                </div>
                <div className="skill">
                  <h3 aria-label="Languages">
                    <FaGlobe aria-hidden="true" />
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;