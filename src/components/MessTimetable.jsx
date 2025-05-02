"use client"

import { useState } from "react"

const MessTimetable = () => {
  const [activeDay, setActiveDay] = useState("monday")

  const timetableData = {
    monday: {
      breakfast: "Poha, Boiled Eggs, Tea/Coffee",
      lunch: "Roti, Dal Fry, Rice, Aloo Gobi, Salad",
      snacks: "Biscuits, Tea",
      dinner: "Roti, Paneer Butter Masala, Rice, Dal Tadka, Gulab Jamun",
    },
    tuesday: {
      breakfast: "Idli Sambar, Fruits, Tea/Coffee",
      lunch: "Roti, Rajma, Rice, Mixed Veg, Curd",
      snacks: "Samosa, Tea",
      dinner: "Roti, Egg Curry/Soya Chunks, Rice, Dal, Fruit Custard",
    },
    wednesday: {
      breakfast: "Upma, Boiled Eggs, Tea/Coffee",
      lunch: "Roti, Chole, Rice, Bhindi Fry, Salad",
      snacks: "Bread Pakora, Tea",
      dinner: "Roti, Chicken Curry/Paneer Bhurji, Rice, Dal, Ice Cream",
    },
    thursday: {
      breakfast: "Aloo Paratha, Curd, Tea/Coffee",
      lunch: "Roti, Dal Makhani, Rice, Aloo Matar, Salad",
      snacks: "Vada Pav, Tea",
      dinner: "Roti, Mix Veg Curry, Rice, Dal Tadka, Kheer",
    },
    friday: {
      breakfast: "Bread Omelette/Bread Butter Jam, Tea/Coffee",
      lunch: "Roti, Kadhi Pakora, Rice, Aloo Jeera, Salad",
      snacks: "Kachori, Tea",
      dinner: "Roti, Butter Chicken/Matar Paneer, Rice, Dal, Jalebi",
    },
    saturday: {
      breakfast: "Dosa, Chutney, Tea/Coffee",
      lunch: "Roti, Dal Tadka, Rice, Cabbage Poriyal, Curd",
      snacks: "Pav Bhaji, Tea",
      dinner: "Roti, Fish Curry/Veg Kofta, Rice, Dal, Fruit Salad",
    },
    sunday: {
      breakfast: "Chole Bhature, Tea/Coffee",
      lunch: "Veg Biryani, Raita, Papad, Pickle",
      snacks: "Cake, Tea",
      dinner: "Roti, Mutton Curry/Malai Kofta, Rice, Dal, Rasmalai",
    },
  }

  return (
    <div className="mess_container">
      <h2>Mess Timetable</h2>
      <p className="mess_intro">
        Our in-house mess provides nutritious and delicious meals. Check out our weekly menu below:
      </p>

      <div className="day_selector">
        {Object.keys(timetableData).map((day) => (
          <button
            key={day}
            className={activeDay === day ? "day_btn active" : "day_btn"}
            onClick={() => setActiveDay(day)}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>

      <div className="timetable_display">
        <div className="meal_card">
          <h3>Breakfast</h3>
          <p className="time">7:30 AM - 9:30 AM</p>
          <p className="meal_items">{timetableData[activeDay].breakfast}</p>
        </div>

        <div className="meal_card">
          <h3>Lunch</h3>
          <p className="time">12:30 PM - 2:30 PM</p>
          <p className="meal_items">{timetableData[activeDay].lunch}</p>
        </div>

        <div className="meal_card">
          <h3>Evening Snacks</h3>
          <p className="time">5:00 PM - 6:00 PM</p>
          <p className="meal_items">{timetableData[activeDay].snacks}</p>
        </div>

        <div className="meal_card">
          <h3>Dinner</h3>
          <p className="time">8:00 PM - 10:00 PM</p>
          <p className="meal_items">{timetableData[activeDay].dinner}</p>
        </div>
      </div>

      <div className="mess_notes">
        <p>Note: Menu is subject to change based on seasonal availability. Special meals on festivals and holidays.</p>
      </div>
    </div>
  )
}

export default MessTimetable
