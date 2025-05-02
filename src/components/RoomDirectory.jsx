"use client"

import { useState } from "react"

const RoomDirectory = () => {
  const [activeFloor, setActiveFloor] = useState("first")

  // Generate dummy data for rooms
  const generateRoomData = (floorPrefix, startRoom, endRoom) => {
    const rooms = {}
    for (let i = startRoom; i <= endRoom; i++) {
      const roomNumber = `${floorPrefix}${i.toString().padStart(2, "0")}`
      rooms[roomNumber] = {
        occupants: [generateRandomName(), generateRandomName(), generateRandomName()],
        type: Math.random() > 0.3 ? "Standard" : "Deluxe",
      }
    }
    return rooms
  }

  // Generate random names for dummy data
  const generateRandomName = () => {
    const firstNames = [
      "Rahul",
      "Amit",
      "Priya",
      "Neha",
      "Vikram",
      "Sanjay",
      "Ankit",
      "Ravi",
      "Deepak",
      "Suresh",
      "Anil",
      "Raj",
      "Ajay",
      "Vijay",
      "Sonia",
      "Pooja",
      "Meera",
      "Kavita",
    ]
    const lastNames = [
      "Sharma",
      "Patel",
      "Singh",
      "Gupta",
      "Kumar",
      "Joshi",
      "Verma",
      "Yadav",
      "Mishra",
      "Shah",
      "Reddy",
      "Patil",
      "Nair",
      "Das",
      "Choudhary",
    ]

    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
  }

  const roomData = {
    first: generateRoomData(1, 1, 28),
    second: generateRoomData(2, 1, 28),
    third: generateRoomData(3, 1, 28),
  }

  return (
    <div className="room_directory_wrapper">
      <h2>Room Directory</h2>
      <p className="directory_intro">
        Our hostel has 3 floors with 28 rooms on each floor. Each room accommodates 3 residents.
      </p>

      <div className="floor_tabs">
        <button
          className={activeFloor === "first" ? "floor_tab active" : "floor_tab"}
          onClick={() => setActiveFloor("first")}
        >
          First Floor (100-128)
        </button>
        <button
          className={activeFloor === "second" ? "floor_tab active" : "floor_tab"}
          onClick={() => setActiveFloor("second")}
        >
          Second Floor (201-228)
        </button>
        <button
          className={activeFloor === "third" ? "floor_tab active" : "floor_tab"}
          onClick={() => setActiveFloor("third")}
        >
          Third Floor (301-328)
        </button>
      </div>

      <div className="rooms_grid">
        {Object.entries(roomData[activeFloor]).map(([roomNumber, roomInfo]) => (
          <div key={roomNumber} className="room_card">
            <div className="room_header">
              <h3>Room {roomNumber}</h3>
              <span className="room_type">{roomInfo.type}</span>
            </div>
            <div className="occupants">
              <h4>Occupants:</h4>
              <ul>
                {roomInfo.occupants.map((occupant, index) => (
                  <li key={index}>{occupant}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default RoomDirectory
