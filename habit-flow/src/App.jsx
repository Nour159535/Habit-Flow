import { Routes, Route } from "react-router"
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Workplace from './components/Workplace/Workplace';
import './App.css';
import Habits from "./pages/Habits";

function App() {
     const initialHabits = [
        {
            id: 1,
            name: "Drink Water",
            icon: '1',
            type: "Health",
            status: "Completed",
            completedDates : ["2026-10-26"]
        }, {
            id: 2,
            name: "Read 10 Pages",
            icon: '2',
            type: "Learning",
            status: "Completed",
            completedDates : ["2026-10-27"]
        }, {
            id: 3,
            name: "Morning Stretch",
            icon: '3',
            type: "Fitness",
            status: "Pending",
            completedDates : ["2026-10-25"]
        }
    ];

 const [habits, setHabits] = useState(()=>{
        const savedHabits = localStorage.getItem("Habits");

        if(savedHabits){
            return JSON.parse(savedHabits);
        }

        return initialHabits;
    });
   
    useEffect(()=>{
        localStorage.setItem("Habits", JSON.stringify(habits))
    }, [habits]);

  return (
      <Routes>
          <Route element={<Layout />}>
          <Route index element={<Workplace habits={habits} setHabits={setHabits}/>} />
          <Route path="habits" element={<Habits habits={habits} setHabits={setHabits}/>} />
          </Route>
      </Routes>
  )
}

export default App;
