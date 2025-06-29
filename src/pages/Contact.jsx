import { useState } from "react";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState('no-preference');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = "Please enter your full name."
    } else if (!/^[A-Za-zÀ-ÿ'\-\s]+$/.test(name.trim())) {
      newErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes (e.g. Anna-Maria O'Neil)."
    }

    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (phone.trim() && !/^[0-9\s\-()+]+$/.test(phone.trim())) {
      newErrors.phone = "Phone number can only contain numbers, spaces, hyphens, and parentheses."
    }

    if (!contactMethod) {
      newErrors.contactMethod = "Please select how you would like me to contact you."
    }

    if (!message.trim()) {
      newErrors.message = "Please enter your message."
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      setName('');
      setEmail('');
      setPhone('');
      setContactMethod('no-preference');
      setMessage('');

    } else {
      setSuccess(false);
    }
  }

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
            <section aria-labelledby="contact-form">
              <h2>CONTACT FORM</h2>

              <div >
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Name <span className="form-required" aria-hidden="true">Required</span></label><br />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="John Doe"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name} /><br />
                    {errors.name && (
                      <span id="name-error" className="error-message" role="alert">
                        <span aria-hidden="true"><FaExclamationCircle /></span>
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email <span className="form-required" aria-hidden="true">Required</span></label><br />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="johndoe@example.com"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email} /><br />
                    {errors.email && (
                      <span id="email-error" className="error-message" role="alert">
                        <span aria-hidden="true"><FaExclamationCircle /></span>
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone number</label><br />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="123 456 7890"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      aria-invalid={!!errors.phone} /><br />
                    {errors.phone && (
                      <span id="phone-error" className="error-message" role="alert">
                        <span aria-hidden="true"><FaExclamationCircle /></span>
                        {errors.phone}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <fieldset
                      aria-describedby={errors.contactMethod ? "contact-method-error" : undefined}
                      aria-invalid={!!errors.contactMethod} className="form-check-group">
                      <legend>Preferred contact method <span className="form-required" aria-hidden="true">Required</span></legend>
                      <div>
                        <input
                          type="radio"
                          id="no-preference"
                          name="contact-method"
                          value="no-preference"
                          required
                          className="form-check-input"
                          checked={contactMethod === 'no-preference'}
                          onChange={(e) => setContactMethod(e.target.value)}
                          aria-describedby={errors.contactMethod ? "contact-method-error" : undefined}
                          aria-invalid={!!errors.contactMethod} />
                        <label htmlFor="no-preference">No preference</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="email-contact"
                          name="contact-method"
                          value="email"
                          className="form-check-input"
                          checked={contactMethod === 'email'}
                          onChange={(e) => setContactMethod(e.target.value)}
                          aria-describedby={errors.contactMethod ? "contact-method-error" : undefined}
                          aria-invalid={!!errors.contactMethod} />
                        <label htmlFor="email-contact">Email</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="phone-contact"
                          name="contact-method"
                          value="phone"
                          className="form-check-input"
                          checked={contactMethod === 'phone'}
                          onChange={(e) => setContactMethod(e.target.value)}
                          aria-describedby={errors.contactMethod ? "contact-method-error" : undefined}
                          aria-invalid={!!errors.contactMethod} />
                        <label htmlFor="phone-contact">Phone</label>
                      </div>
                      {errors.contactMethod && (
                        <span id="contact-method-error" className="error-message" role="alert">
                          <span aria-hidden="true"><FaExclamationCircle /></span>
                          {errors.contactMethod}
                        </span>
                      )}
                    </fieldset>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message <span className="form-required" aria-hidden="true">Required</span></label><br />
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      placeholder="Your message here..."
                      aria-describedby={errors.message ? "message-error" : undefined}
                      aria-invalid={!!errors.message}></textarea><br />
                    {errors.message && (
                      <span id="message-error" className="error-message" role="alert">
                        <span aria-hidden="true"><FaExclamationCircle /></span>
                        {errors.message}
                      </span>
                    )}
                    {success && (
                      <div
                        className="success-message"
                        role="status"
                        aria-live="polite"
                      >
                        <FaCheckCircle aria-hidden="true" className="success-icon" />
                        Your message was sent successfully! Thank you for reaching out. I will get back to you soon.
                      </div>
                    )}
                    <div className="submit-btn">
                      <button type="submit" className="btn">SEND MESSAGE</button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;