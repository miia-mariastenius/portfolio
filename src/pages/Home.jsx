import { Link } from "react-router-dom";
import portrait from "../images/20230920_105540.jpg"
import { FaCode, FaFigma, FaGlobe } from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="header-container">
        <div className="contents">
          <div className="row align-items-start">

            <div className="col-12 col-lg-7 col-xl-8 order-1 order-lg-1">
              <h1>MIIA-MARIA STENIUS PORTFOLIO</h1>

              <div className="d-block d-lg-none text-center mb-4 mb-lg-0">
                <img src={portrait} alt="Portrait of Miia-Maria Stenius." className="portrait-img" />
              </div>

              <section aria-labelledby="professional-background" className="mt-0">
                <h2>PROFESSIONAL BACKGROUND</h2>
                <p>I'm a business information systems student passionate about creating user-friendly digital experiences. Although my background is in tourism, where I developed strong communication and problem-solving skills, I'm now focused on web development and design. I'm currently building my portfolio and honing my skills in coding, Figma, and multimedia editing.</p>
              </section>
            </div>

            <div className="col-12 col-lg-4 order-2 order-lg-2 d-none d-lg-flex justify-content-center justify-content-lg-start align-self-start">
              <img src={portrait} alt="Portrait of Miia-Maria Stenius" className="portrait-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="secondary-container">
        <div className="contents">
          <div className=" row">
            <section aria-labelledby="skills-and-expertise">
              <h2 className="">SKILLS AND EXPERTISE</h2>
              <div className="skills-grid row pt-2">
                <div className="skill col-md mb-2 mb-md-0">
                  <div className="d-flex flex-row flex-md-column">
                    <div>
                      <div className="skill-container">
                        <FaCode size={42} color="white" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="mb-3 m-md-0 px-3 px-md-0">
                      <h3 className="mt-0">DEVELOPMENT</h3>
                      <p>
                        I enjoy building clean, functional websites with HTML, CSS, and JavaScript. I also have knowledge in React and React Native, as well as WordPress development. I'm focused on writing accessible, responsive code that works for everyone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="skill col-md mb-2 mb-md-0">
                  <div className="d-flex flex-row flex-md-column">
                    <div>
                      <div className="skill-container">
                        <FaFigma size={42} color="white" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="mb-3 m-md-0 px-3 px-md-0">
                      <h3 className="mt-0">DESIGN</h3>
                      <p>
                        I use Figma to design and plan layouts before development. It helps me visualize and iterate ideas efficiently. Other image editing software I’ve used are Adobe Photoshop and Illustrator.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="skill col-md">
                  <div className="d-flex flex-row flex-md-column">
                    <div>
                      <div className="skill-container">
                        <FaGlobe size={42} color="white" aria-hidden="true"/>
                      </div>
                    </div>
                    <div className="mb-3 m-md-0 px-3 px-md-0">
                      <h3 className="mt-0">LANGUAGES</h3>
                      <p>
                        Finnish is my native language, and I’m fluent in English. I’m also learning Japanese and really enjoy practicing it at an intermediate level. I appreciate how language connects people. I've also studied Swedish and German in school, which gave me a broader perspective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center text-md-start home-btn">
                <Link to="/projects" className="btn" aria-label="Projects">
                  CHECK MY PROJECTS
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;