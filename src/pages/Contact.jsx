import { useState } from "react";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState('no-preference');
  const [message, setMessage] = useState('');

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
          <div className="form-padding">
            <h2>CONTACT FORM</h2>
            <div >
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name <span className="form-required" aria-hidden="true">Required</span></label><br />
                  <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="John Doe" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email <span className="form-required" aria-hidden="true">Required</span></label><br />
                  <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="johndoe@example.com" /><br />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label><br />
                  <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="123 456 7890" /><br />
                </div>
                <div className="form-group">
                  <fieldset>
                    <legend>Preferred contact method <span className="form-required" aria-hidden="true">Required</span></legend>
                    <div>
                      <input type="radio" id="no-preference" name="contact-method" value="no-preference" required className="form-check-input" checked={contactMethod === 'no-preference'} onChange={(e) => setContactMethod(e.target.value)} />
                      <label htmlFor="no-preference">No preference</label>
                    </div>
                    <div>
                      <input type="radio" id="email-contact" name="contact-method" value="email" className="form-check-input" checked={contactMethod === 'email'} onChange={(e) => setContactMethod(e.target.value)} />
                      <label htmlFor="email-contact">Email</label>
                    </div>
                    <div>
                      <input type="radio" id="phone-contact" name="contact-method" value="phone" className="form-check-input" checked={contactMethod === 'phone'} onChange={(e) => setContactMethod(e.target.value)} />
                      <label htmlFor="phone-contact">Phone</label>
                    </div>
                  </fieldset>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span className="form-required" aria-hidden="true">Required</span></label><br />
                  <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Your message here..."></textarea><br />
                  <button type="submit" className="btn">SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;