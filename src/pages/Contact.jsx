function Contact() {

  return (
    <>
      <div className="header-container">
        <div className="contents">
          <h1>CONTACT ME</h1>
          <p>If you’d like to get in touch, have questions, or just want to say hello, feel free to use the form below. I’ll get back to you as soon as I can.</p>
        </div>
      </div>
      <div className="secondary-container">
        <div className="contents">
          <h2>CONTACT FORM</h2>
          <div>
            <form>
              <label for="name">Name <span aria-hidden="true">Required</span></label><br/>
              <input type="text" id="name" name="name" required placeholder="John Doe" /><br/>
              <label for="email">Email <span aria-hidden="true">Required</span></label><br/>
              <input type="text" id="email" name="email" required placeholder="johndoe@example.com" /><br/>
              <label for="phone">Phone number</label><br/>
              <input type="tel" id="phone" name="phone" required placeholder="123 456 7890" /><br/>
              <fieldset>
                <legend>Preferred contact method</legend>
                <div>
                  <input type="radio" id="no-preference" name="contact-method" checked value="no-preference" required/>
                  <label for="no-preference">No preference</label>
                </div>
                <div>
                  <input type="radio" id="email-contact" name="contact-method" value="email"/>
                  <label for="email-contact">Email</label>
                </div>
                <div>
                  <input type="radio" id="phone-contact" name="contact-method" value="phone" />
                  <label for="phone-contact">Phone</label>
                </div>
              </fieldset>
              <label for="message">Message <span aria-hidden="true">Required</span></label><br/>
              <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea><br/>
              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;