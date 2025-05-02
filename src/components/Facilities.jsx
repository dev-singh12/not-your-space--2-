const Facilities = () => {
  const facilities = [
    {
      name: "High-Speed WiFi",
      description: "Stay connected with our 100 Mbps fiber internet connection available throughout the premises.",
      icon: "📶",
    },
    {
      name: "Fully Furnished Rooms",
      description: "Comfortable beds, study tables, wardrobes, and air conditioning in every room.",
      icon: "🛏️",
    },
    {
      name: "Common Room",
      description: "Spacious common area with TV, indoor games, and comfortable seating for socializing.",
      icon: "🎮",
    },
    {
      name: "Laundry Service",
      description: "In-house laundry service available at nominal charges.",
      icon: "👕",
    },
    {
      name: "Gym",
      description: "Small but well-equipped gym with basic equipment for daily workouts.",
      icon: "💪",
    },
    {
      name: "Mess",
      description: "Nutritious and tasty meals served three times a day plus evening snacks.",
      icon: "🍽️",
    },
    {
      name: "Security",
      description: "24/7 security with CCTV surveillance and biometric entry system.",
      icon: "🔒",
    },
    {
      name: "Housekeeping",
      description: "Regular cleaning of rooms and common areas to maintain hygiene.",
      icon: "🧹",
    },
    {
      name: "Power Backup",
      description: "Generator backup for uninterrupted power supply during outages.",
      icon: "⚡",
    },
    {
      name: "Study Area",
      description: "Dedicated quiet zones for focused studying and group discussions.",
      icon: "📚",
    },
  ]

  return (
    <div className="facilities_container">
      <h2>Our Facilities</h2>
      <p className="facilities_intro">We provide a range of amenities to make your stay comfortable and convenient.</p>

      <div className="facilities_grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility_card">
            <div className="facility_icon">{facility.icon}</div>
            <h3>{facility.name}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Facilities
