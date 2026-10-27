import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import './Workplace.css';
import Welcome from './Welcome/Welcome';
import StreakProgress from './StreakProgress/StreakProgress';
import habitIcon1 from '../../assets/Light-mode/Habit-icon-1.svg';
import habitIcon2 from '../../assets/Light-mode/Habit-icon-2.svg';
import habitIcon3 from '../../assets/Light-mode/Habit-icon-3.svg';
import habitIcon4 from '../../assets/Light-mode/Habit-icon-4.svg';
import habitIcon5 from '../../assets/Light-mode/Habit-icon-5.svg';
import AddHabitForm from './AddHabitForm/AddHabitForm';
import FilterHabits from './FilterHabits/FilterHabits';
import HabitCalendar from './HabitCalendar/HabitCalendar';
import TakeNote from './TakeNote/TakeNote';

function Workplace() {

        const icons = [
        {
            id: '1',
            src: habitIcon1
        }, {
            id: '2',
            src: habitIcon2
        }, {
            id: '3',
            src: habitIcon3
        }, {
            id: '4',
            src: habitIcon4
        }, {
            id: '5',
            src: habitIcon5
        }
    ]

    const hour = dayjs().hour();
    
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
        <div className="workplace">
            <div className="welcome-date-container">
                <Welcome hour={hour} />
            </div>
            <div className="daily-picture">
                <div className="quick-stats">
                    <p className="daily">YOUR DAILY PICTURE</p>
                    <p className="stats">Quick stats</p>
                </div>
                <StreakProgress habits={habits} />
            </div>
            <div className="add-habit-section">
                <div className="habits-container">
                    <AddHabitForm habits={habits} setHabits={setHabits} icons={icons} />
                    <FilterHabits habits={habits} setHabits={setHabits} icons={icons} />
                </div>
                <div className="habit-calendar-and-note">
                    <HabitCalendar />
                    <TakeNote />
                </div>
            </div>
        </div>
    );
}

export default Workplace;