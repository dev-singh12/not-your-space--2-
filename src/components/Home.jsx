const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="hero_section">
        <h2>Welcome to Not YourSpace</h2>
        <p className="subtitle">A home away from home in Lohegaon, Pune</p>

        <div className="hero_content">
          <div className="left_col">
            <p>
              Nestled in the vibrant neighborhood of Lohegaon, our hostel offers comfortable living spaces for students
              and young professionals. With modern amenities and a community-focused environment, we strive to make your
              stay memorable.
            </p>
            <button className="cta_button">Book a Visit</button>
          </div>

          <div className="right_col">
            <div className="image_placeholder">
              <img src="public/!.png?height=300&width=400" alt="Not-yourspace logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="highlights">
        <div className="highlight_box">
          <h3>Community Living</h3>
          <p>Join a vibrant community of like-minded individuals</p>
        </div>

        <div className="highlight_box">
          <h3>Prime Location</h3>
          <p>Just 10 minutes from the airport and major IT hubs</p>
        </div>

        <div className="highlight_box">
          <h3>Affordable</h3>
          <p>Quality accommodation that doesn't break the bank</p>
        </div>
      </div>
    </div>
  )
}

export default Home
