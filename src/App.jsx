"use client"

import { useState } from "react"
import "./index.css"

function App() {
  const [page, setPage] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const changePage = (newPage) => {
    setPage(newPage)
    setMenuOpen(false)
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-red-500">Not YourSpace</h1>
            <p className="text-sm text-gray-500">Lohegaon, Pune</p>
          </div>

          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-800"></div>
          </div>

          <nav
            className={`${menuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 right-0 md:top-0 bg-white md:bg-transparent w-48 md:w-auto shadow-md md:shadow-none p-4 md:p-0 z-10`}
          >
            <ul className="md:flex gap-4">
              <li>
                <button
                  onClick={() => changePage("home")}
                  className={`${page === "home" ? "text-red-500" : "text-gray-700"} hover:text-red-500`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => changePage("mess")}
                  className={`${page === "mess" ? "text-red-500" : "text-gray-700"} hover:text-red-500`}
                >
                  Mess Timetable
                </button>
              </li>
              <li>
                <button
                  onClick={() => changePage("rooms")}
                  className={`${page === "rooms" ? "text-red-500" : "text-gray-700"} hover:text-red-500`}
                >
                  Room Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => changePage("facilities")}
                  className={`${page === "facilities" ? "text-red-500" : "text-gray-700"} hover:text-red-500`}
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => changePage("faqs")}
                  className={`${page === "faqs" ? "text-red-500" : "text-gray-700"} hover:text-red-500`}
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => changePage("enquiry")}
                  className={`${page === "enquiry" ? "text-red-500" : "text-gray-700"} hover:text-red-500`}
                >
                  Enquiry
                </button>
              </li>
              <li>
                <button
                  onClick={() => changePage("about")}
                  className={`${page === "about" ? "text-red-500" : "text-gray-700"} hover:text-red-500`}
                >
                  About
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="p-4">
        {page === "home" && <Home />}
        {page === "mess" && <MessTimetable />}
        {page === "rooms" && <RoomDirectory />}
        {page === "facilities" && <Facilities />}
        {page === "faqs" && <Faqs />}
        {page === "enquiry" && <Enquiry />}
        {page === "about" && <About />}
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Not YourSpace</h3>
              <p>Near Airport Road, Lohegaon</p>
              <p>Pune, Maharashtra - 411032</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@notyourspace.com</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; {new Date().getFullYear()} Not YourSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Not YourSpace</h2>
      <p className="text-center mb-6">A home away from home in Lohegaon, Pune</p>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/2">
          <p className="mb-4">
            Nestled in the vibrant neighborhood of Lohegaon, our hostel offers comfortable living spaces for students
            and young professionals. With modern amenities and a community-focused environment, we strive to make your
            stay memorable.
          </p>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Book a Visit</button>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=300&width=400" alt="Hostel building" className="w-full rounded shadow" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Community Living</h3>
          <p>Join a vibrant community of like-minded individuals</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Prime Location</h3>
          <p>Just 10 minutes from the airport and major IT hubs</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Affordable</h3>
          <p>Quality accommodation that doesn't break the bank</p>
        </div>
      </div>
    </div>
  )
}

function MessTimetable() {
  const [day, setDay] = useState("monday")

  const menu = {
    monday: {
      breakfast: "Poha, Boiled Eggs, Tea/Coffee",
      lunch: "Roti, Dal Fry, Rice, Aloo Gobi, Salad",
      snacks: "Biscuits, Tea",
      dinner: "Roti, Paneer Butter Masala, Rice, Dal Tadka",
    },
    tuesday: {
      breakfast: "Idli Sambar, Fruits, Tea/Coffee",
      lunch: "Roti, Rajma, Rice, Mixed Veg, Curd",
      snacks: "Samosa, Tea",
      dinner: "Roti, Egg Curry/Soya Chunks, Rice, Dal",
    },
    wednesday: {
      breakfast: "Upma, Boiled Eggs, Tea/Coffee",
      lunch: "Roti, Chole, Rice, Bhindi Fry, Salad",
      snacks: "Bread Pakora, Tea",
      dinner: "Roti, Chicken Curry/Paneer Bhurji, Rice, Dal",
    },
    thursday: {
      breakfast: "Aloo Paratha, Curd, Tea/Coffee",
      lunch: "Roti, Dal Makhani, Rice, Aloo Matar, Salad",
      snacks: "Vada Pav, Tea",
      dinner: "Roti, Mix Veg Curry, Rice, Dal Tadka",
    },
    friday: {
      breakfast: "Bread Omelette/Bread Butter Jam, Tea/Coffee",
      lunch: "Roti, Kadhi Pakora, Rice, Aloo Jeera, Salad",
      snacks: "Kachori, Tea",
      dinner: "Roti, Butter Chicken/Matar Paneer, Rice, Dal",
    },
    saturday: {
      breakfast: "Dosa, Chutney, Tea/Coffee",
      lunch: "Roti, Dal Tadka, Rice, Cabbage Poriyal, Curd",
      snacks: "Pav Bhaji, Tea",
      dinner: "Roti, Fish Curry/Veg Kofta, Rice, Dal",
    },
    sunday: {
      breakfast: "Chole Bhature, Tea/Coffee",
      lunch: "Veg Biryani, Raita, Papad, Pickle",
      snacks: "Cake, Tea",
      dinner: "Roti, Mutton Curry/Malai Kofta, Rice, Dal",
    },
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Mess Timetable</h2>
      <p className="mb-6">
        Our in-house mess provides nutritious and delicious meals. Check out our weekly menu below:
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(menu).map((d) => (
          <button
            key={d}
            onClick={() => setDay(d)}
            className={`px-3 py-1 rounded ${day === d ? "bg-red-500 text-white" : "bg-gray-200"}`}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Breakfast</h3>
          <p className="text-sm text-gray-500">7:30 AM - 9:30 AM</p>
          <p className="mt-2">{menu[day].breakfast}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Lunch</h3>
          <p className="text-sm text-gray-500">12:30 PM - 2:30 PM</p>
          <p className="mt-2">{menu[day].lunch}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Snacks</h3>
          <p className="text-sm text-gray-500">5:00 PM - 6:00 PM</p>
          <p className="mt-2">{menu[day].snacks}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Dinner</h3>
          <p className="text-sm text-gray-500">8:00 PM - 10:00 PM</p>
          <p className="mt-2">{menu[day].dinner}</p>
        </div>
      </div>
    </div>
  )
}

function RoomDirectory() {
  const [floor, setFloor] = useState("first")

  const generateRooms = (floorNum, start, end) => {
    const rooms = []
    for (let i = start; i <= end; i++) {
      rooms.push({
        number: `${floorNum}${i.toString().padStart(2, "0")}`,
        occupants: [getRandomName(), getRandomName(), getRandomName()],
      })
    }
    return rooms
  }

  const getRandomName = () => {
    const names = [
      "Rahul Sharma",
      "Amit Patel",
      "Priya Singh",
      "Neha Gupta",
      "Vikram Kumar",
      "Sanjay Joshi",
      "Ankit Verma",
      "Ravi Yadav",
      "Deepak Mishra",
      "Suresh Shah",
      "Anil Reddy",
      "Raj Patil",
    ]
    return names[Math.floor(Math.random() * names.length)]
  }

  const rooms = {
    first: generateRooms(1, 1, 28),
    second: generateRooms(2, 1, 28),
    third: generateRooms(3, 1, 28),
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Room Directory</h2>
      <p className="mb-6">Our hostel has 3 floors with 28 rooms on each floor. Each room accommodates 3 residents.</p>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setFloor("first")}
          className={`px-3 py-1 rounded ${floor === "first" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          First Floor (100-128)
        </button>
        <button
          onClick={() => setFloor("second")}
          className={`px-3 py-1 rounded ${floor === "second" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          Second Floor (201-228)
        </button>
        <button
          onClick={() => setFloor("third")}
          className={`px-3 py-1 rounded ${floor === "third" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          Third Floor (301-328)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms[floor].map((room) => (
          <div key={room.number} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Room {room.number}</h3>
            <div>
              <h4 className="font-bold">Occupants:</h4>
              <ul className="list-disc pl-5">
                {room.occupants.map((person, i) => (
                  <li key={i}>{person}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Facilities() {
  const facilities = [
    { name: "High-Speed WiFi", desc: "Stay connected with our 100 Mbps fiber internet connection" },
    { name: "Furnished Rooms", desc: "Comfortable beds, study tables, wardrobes, and air conditioning" },
    { name: "Common Room", desc: "Spacious common area with TV and indoor games" },
    { name: "Laundry Service", desc: "In-house laundry service available at nominal charges" },
    { name: "Gym", desc: "Small but well-equipped gym with basic equipment" },
    { name: "Mess", desc: "Nutritious and tasty meals served three times a day" },
    { name: "Security", desc: "24/7 security with CCTV surveillance" },
    { name: "Housekeeping", desc: "Regular cleaning of rooms and common areas" },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Our Facilities</h2>
      <p className="mb-6">We provide a range of amenities to make your stay comfortable and convenient.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {facilities.map((facility, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
            <p>{facility.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Faqs() {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: "What is the minimum duration of stay?",
      a: "The minimum duration of stay is 3 months. However, we offer flexible options based on requirements.",
    },
    {
      q: "Are meals included in the rent?",
      a: "Yes, three meals plus evening snacks are included in the monthly rent.",
    },
    {
      q: "What is the check-in and check-out time?",
      a: "Check-in time is 12:00 PM and check-out time is 11:00 AM.",
    },
    {
      q: "Is there a curfew time?",
      a: "Yes, the hostel gates close at 11:00 PM. Late entry is allowed with prior information.",
    },
    {
      q: "Can I have guests over?",
      a: "Guests are allowed in common areas during visiting hours (10:00 AM to 8:00 PM).",
    },
    {
      q: "Is WiFi available?",
      a: "Yes, high-speed WiFi is available throughout the premises at no additional cost.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="mb-6">Find answers to common questions about our hostel and services.</p>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded overflow-hidden">
            <div
              className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <h3 className="font-bold">{faq.q}</h3>
              <span>{openFaq === i ? "-" : "+"}</span>
            </div>
            {openFaq === i && (
              <div className="p-4 bg-white">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Make an Enquiry</h2>
      <p className="mb-6">Interested in staying with us? Fill out the form below and we'll get back to you soon.</p>

      {submitted ? (
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-xl font-bold mb-2">Thank you for your enquiry!</h3>
          <p>We have received your message and will contact you soon.</p>
          <button onClick={() => setSubmitted(false)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Your Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>

          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
            Send Enquiry
          </button>
        </form>
      )}

      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="text-xl font-bold mb-2">Contact Us Directly</h3>
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

function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Not YourSpace</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <p className="mb-4">
            Established in 2018, Not YourSpace started with a simple mission: to create a living space that feels like
            home for students and young professionals in Pune. What began as a small facility has now grown into a
            vibrant community.
          </p>

          <p className="mb-4">
            Our Lohegaon property is strategically located near the airport and major IT hubs, making it an ideal choice
            for those who value convenience without compromising on comfort.
          </p>

          <p className="mb-4">
            At Not YourSpace, we believe in creating more than just a place to sleep. Our community events, shared
            spaces, and friendly staff create an environment where lifelong friendships are formed.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <ul className="list-disc pl-5">
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

        <div className="md:w-1/3">
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Hostel common area"
            className="w-full rounded shadow mb-4"
          />
          <img src="/placeholder.svg?height=200&width=300" alt="Hostel exterior" className="w-full rounded shadow" />
        </div>
      </div>
    </div>
  )
}

export default App
