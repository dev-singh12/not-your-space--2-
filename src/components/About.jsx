const About = () => {
  return (
    <div className="about_section">
      <h2>About Not YourSpace</h2>

      <div className="about_content">
        <div className="about_text">
          <p>
            Established in 2018, Not YourSpace started with a simple mission: to create a living space that feels like
            home for students and young professionals in Pune. What began as a small 10-room facility has now grown into
            a vibrant community housing over 250 residents across multiple properties.
          </p>

          <p>
            Our Lohegaon property is strategically located near the airport and major IT hubs, making it an ideal choice
            for those who value convenience without compromising on comfort. We understand the challenges of moving to a
            new city, which is why we've designed our spaces to foster community and belonging.
          </p>

          <p>
            At Not YourSpace, we believe in creating more than just a place to sleep. Our community events, shared
            spaces, and friendly staff create an environment where lifelong friendships are formed. Whether you're a
            student at a nearby university or a professional starting your career, you'll find a supportive community
            here.
          </p>

          <div className="values">
            <h3>Our Values</h3>
            <ul>
              <li>
                <strong>Community:</strong> Fostering connections and friendships
              </li>
              <li>
                <strong>Comfort:</strong> Creating spaces that feel like home
              </li>
              <li>
                <strong>Convenience:</strong> Making daily life easier for our residents
              </li>
              <li>
                <strong>Care:</strong> Prioritizing the well-being of our community
              </li>
            </ul>
          </div>
        </div>

        <div className="about_images">
          <div className="image_box">
            <img src="/placeholder.svg?height=200&width=300" alt="Hostel common area" />
            <p>Our vibrant common area</p>
          </div>

          <div className="image_box">
            <img src="/placeholder.svg?height=200&width=300" alt="Hostel exterior" />
            <p>The building exterior</p>
          </div>

          <div className="team_section">
            <h3>Our Team</h3>
            <div className="team_members">
              <div className="team_member">
                <img src="/placeholder.svg?height=100&width=100" alt="Team member" className="team_photo" />
                <h4>Diptendra Halder</h4>
                <p>Property Manager</p>
              </div>

              <div className="team_member">
                <img src="/placeholder.svg?height=100&width=100" alt="Team member" className="team_photo" />
                <h4>Hairy Raj</h4>
                <p>Community Coordinator</p>
              </div>

              <div className="team_member">
                <img src="/placeholder.svg?height=100&width=100" alt="Team member" className="team_photo" />
                <h4>Akshay</h4>
                <p>Maintenance Supervisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
