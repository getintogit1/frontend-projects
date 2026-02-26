import { useState, useEffect } from "react";
import Profile from "./mini_components/Profile.jsx";
import Counter from "./mini_components/Counter.jsx";
import ColorPicker from "./mini_components/ColorPicker.jsx";
import ToDoList from "./mini_components/ToDoList.jsx";
import DigitalClock from "./mini_components/DigitalClock.jsx";
import StopWatch from "./mini_components/StopWatch.jsx";
import FitnesTimer from "./mini_components/FitnesTimer.jsx";
import ClickForEffect from "./mini_components/ClickForEffect.jsx";

const base = import.meta.env.BASE_URL;
function ComponentManager() {
  // Liste der aktivierten Komponenten
  const [activeComponents, setActiveComponents] = useState([]);
  const [isFilled, setIsFilled] = useState("");

  useEffect(() => {
    setIsFilled(activeComponents.length > 0);
  }, [activeComponents]);

  // Komponenten-Mapping (Name → Komponente)
  const componentsMap = {
    profile: (
      <Profile
        name="Bart Simpson"
        picture={base + "/tutorial/bart.jpg"}
        info="Ay Caramba! I didn't do it!"
      />
    ),
    counter: <Counter />,
    color_picker: <ColorPicker />,
    to_do_list: <ToDoList />,
    digital_clock: <DigitalClock />,
    stop_watch: <StopWatch />,
    fitnes_timer: <FitnesTimer />,
    click_for_effect: <ClickForEffect />,
  };

  // Funktion zum Ein/Aus-Schalten
  const toggleComponent = (name) => {
    setActiveComponents(
      (prev) =>
        prev.includes(name)
          ? prev.filter((c) => c !== name) // entfernen
          : [...prev, name], // hinzufügen
    );
  };

  const isActive = (name) => activeComponents.includes(name);
  return (
    <section>
      <div className="container">
        <div
          className={`component-manager-container ${isFilled ? "filled" : ""}`}
        >
          {/* Buttons */}
          <div
            className="container   
                grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 
                gap-2 p-2 mt-7"
          >
            <button
              className={`secondary-btn hover:!bg-[#fec795] hover:text-white
    ${isActive("counter") ? "!bg-[#fec795] text-white" : ""}`}
              onClick={() => toggleComponent("counter")}
            >
              Counter
            </button>
            <button
              className={`secondary-btn hover:!bg-[#e280bb] hover:text-white
    ${isActive("color_picker") ? "!bg-[#e280bb] text-white" : ""}`}
              onClick={() => toggleComponent("color_picker")}
            >
              Color Picker
            </button>
            <button
              className={`secondary-btn hover:!bg-[#8b49a3] hover:text-white
    ${isActive("to_do_list") ? "!bg-[#8b49a3] text-white" : ""}`}
              onClick={() => toggleComponent("to_do_list")}
            >
              ToDo List
            </button>
            <button
              className={`secondary-btn hover:!bg-[#7148b9] hover:text-white
    ${isActive("digital_clock") ? "!bg-[#7148b9] text-white" : ""}`}
              onClick={() => toggleComponent("digital_clock")}
            >
              Digital Clock
            </button>
            <button
              className={`secondary-btn hover:!bg-[#1475a6] hover:text-white
    ${isActive("stop_watch") ? "!bg-[#1475a6] text-white" : ""}`}
              onClick={() => toggleComponent("stop_watch")}
            >
              Stopwatch
            </button>
            <button
              className={`secondary-btn hover:!bg-[#018a80] hover:text-white
    ${isActive("fitnes_timer") ? "!bg-[#018a80] text-white" : ""}`}
              onClick={() => toggleComponent("fitnes_timer")}
            >
              Fitness Timer
            </button>
            <button
              className={`secondary-btn hover:!bg-[#85c866] hover:text-white
    ${isActive("click_for_effect") ? "!bg-[#85c866] text-white" : ""}`}
              onClick={() => toggleComponent("click_for_effect")}
            >
              Click Effect
            </button>

            <button
              className={`secondary-btn hover:!bg-[#d6ef59] hover:text-white
    ${isActive("profile") ? "!bg-[#d6ef59] text-white" : ""}`}
              onClick={() => toggleComponent("profile")}
            >
              Profile
            </button>
          </div>

          {/* Container für aktive Komponenten */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
            {activeComponents.map((name) => (
              <div key={name} className="component-box">
                {componentsMap[name]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentManager;
