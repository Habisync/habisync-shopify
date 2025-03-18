import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const getRecommendations = (roomType) => ({
  Bedroom: {
    essential: ["Smart Lock", "Indoor Camera"],
    advanced: ["Smart Thermostat", "Ambient Lighting"],
    luxury: ["Automated Blinds", "Premium Speaker System"]
  },
  "Living Room": {
    essential: ["Smart Speaker", "Entertainment Hub"],
    advanced: ["Smart Blinds", "Ambient Lighting"],
    luxury: ["Home Theater System", "Mood Lighting"]
  },
  Kitchen: {
    essential: ["Smart Plug", "Smoke Detector"],
    advanced: ["Energy Monitor", "Smart Thermostat"],
    luxury: ["Smart Refrigerator", "Voice-Controlled Oven"]
  },
  Outdoor: {
    essential: ["Floodlight Camera", "Motion Sensor"],
    advanced: ["Smart Lock", "Outdoor Speaker"],
    luxury: ["Weather Station", "Advanced Surveillance"]
  },
  Custom: {
    essential: ["Basic Smart Device Bundle"],
    advanced: ["Advanced Configuration Bundle"],
    luxury: ["Premium Custom Integration"]
  },
})[roomType] || {};

export default function Customizer() {
  const [rooms, setRooms] = useState([]);
  const [roomCount, setRoomCount] = useState(0);

  const addRoom = () => {
    const newRoom = { name: "", type: "", devices: {} };
    setRooms([...rooms, newRoom]);
  };

  const updateRoom = (index, field, value) => {
    const updatedRooms = rooms.map((room, i) =>
      i === index ? { ...room, [field]: value, devices: field === "type" ? getRecommendations(value) : room.devices } : room
    );
    setRooms(updatedRooms);
  };

  return (
    <div className="bg-futuristicGray min-h-screen text-white">
      <Navigation />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-futuristicGreen">Smart Home Customizer</h1>
        <p className="mt-4 text-gray-300">Add rooms and configure smart devices tailored to your needs.</p>
        <button onClick={addRoom} className="mt-4 px-6 py-3 bg-futuristicGreen text-black rounded-lg hover:bg-futuristicLightGray">
          Add Room
        </button>
        <div className="mt-6 grid grid-cols-1 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="p-4 bg-futuristicLightGray rounded shadow">
              <label>
                Room Name:
                <input
                  className="w-full p-2 mt-1 rounded"
                  type="text"
                  value={room.name}
                  onChange={(e) => updateRoom(index, "name", e.target.value)}
                />
              </label>
              <label className="mt-4 block">
                Room Type:
                <select
                  className="w-full p-2 mt-1 rounded"
                  value={room.type}
                  onChange={(e) => updateRoom(index, "type", e.target.value)}
                >
                  <option value="">Select Type</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Living Room">Living Room</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Custom">Custom</option>
                </select>
              </label>
              {room.devices && (
                <div className="mt-4">
                  <h3 className="font-bold text-futuristicGreen">Recommendations:</h3>
                  <ul className="mt-2">
                    <li><strong>Essential:</strong> {room.devices.essential.join(", ")}</li>
                    <li><strong>Advanced:</strong> {room.devices.advanced.join(", ")}</li>
                    <li><strong>Luxury:</strong> {room.devices.luxury.join(", ")}</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
