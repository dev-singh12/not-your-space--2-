const Footer = () => {
  return (
    <footer className="site_footer">
      <div className="footer_content">
        <div className="footer_section">
          <h3>Not YourSpace</h3>
          <p>A home away from home in Lohegaon, Pune</p>
          <p className="address">
            Near Airport Road, Lohegaon
            <br />
            Pune, Maharashtra - 411032
          </p>
        </div>

        <div className="footer_section">
          <h3>Quick Links</h3>
          <ul className="footer_links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#rooms">Room Directory</a>
            </li>
            <li>
              <a href="#facilities">Facilities</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#enquiry">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer_section">
          <h3>Connect With Us</h3>
          <div className="social_links">
            <a href="#" className="social_link">
              Facebook
            </a>
            <a href="#" className="social_link">
              Instagram
            </a>
            <a href="#" className="social_link">
              Twitter
            </a>
          </div>
          <p className="contact_info">
            <span>Phone: +91 98765 43210</span>
            <br />
            <span>Email: info@notyourspace.com</span>
          </p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Not YourSpace. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
