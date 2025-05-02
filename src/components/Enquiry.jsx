"use client"

import { useState } from "react"

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    purpose: "student",
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        purpose: "student",
      })
    }, 1000)
  }

  return (
    <div className="enquiry_container">
      <h2>Make an Enquiry</h2>
      <p className="enquiry_intro">
        Interested in staying with us? Fill out the form below and we'll get back to you soon.
      </p>

      {submitted ? (
        <div className="success_message">
          <h3>Thank you for your enquiry!</h3>
          <p>We have received your message and will contact you within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="new_enquiry_btn">
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form className="enquiry_form" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error_text">{errors.name}</span>}
          </div>

          <div className="form_group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error_text">{errors.email}</span>}
          </div>

          <div className="form_group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form_group">
            <label htmlFor="purpose">Purpose of Stay</label>
            <select id="purpose" name="purpose" value={formData.purpose} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="working">Working Professional</option>
              <option value="intern">Intern</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form_group">
            <label htmlFor="message">
              Your Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && <span className="error_text">{errors.message}</span>}
          </div>

          <button type="submit" className="submit_btn">
            Send Enquiry
          </button>
        </form>
      )}

      <div className="contact_info">
        <h3>Contact Us Directly</h3>
        <p>
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Email:</strong> info@notyourspace.com
        </p>
        <p>
          <strong>Address:</strong> Near Airport Road, Lohegaon, Pune - 411032
        </p>
      </div>
    </div>
  )
}

export default Enquiry
