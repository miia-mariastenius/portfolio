import { useEffect } from "react";
import { Link } from "react-router-dom";

function AccessibilityStatement() {

  useEffect(() => {
    document.title = "Miia-Maria Stenius Portfolio - Accessibility Statement";
  }, [])

  return (
    <>
      <div className="header-container">
        <div className="contents">
          <h1>ACCESSIBILITY STATEMENT FOR MIIA-MARIA STENIUS PORTFOLIO</h1>
          <p>
            This is an accessibility statement from Miia-Maria Stenius Portfolio.
          </p>
          <section aria-labelledby="conformance-status">
            <h2 id="conformance-status" className="mt-3">Conformance status</h2>
            <p>
              The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Miia-Maria Stenius Portfolio is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>
          </section>
        </div>
      </div>
      <div className="secondary-container">
        <div className="contents">
          <section aria-labelledby="feedback">
            <h2 id="feedback">Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of Miia-Maria Stenius Portfolio.
              Please let us know if you encounter accessibility barriers on Miia-Maria Stenius Portfolio:
            </p>
            <ul className="basic-information feedback h-card">
              <li>
                E-mail:&nbsp;
                <a className="email u-email" href="mailto:n3stmi00@students.oamk.fin3stmi00@students.oamk.fi">n3stmi00@students.oamk.fi</a>
              </li>
              <li className="contact-other p-note">On the&nbsp;
                <Link to="/contact">contact page</Link>
              </li>
            </ul>
          </section>
          <section aria-labelledby="date">
            <h2 id="date">Date</h2>
            <p>
              This statement was created on 26 June 2025 using the <a href="https://www.w3.org/WAI/planning/statements/">W3C Accessibility Statement Generator Tool</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default AccessibilityStatement;