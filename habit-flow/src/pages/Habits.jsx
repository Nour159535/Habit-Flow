import dayjs from "dayjs";
import AddHabitForm from '../components/Workplace/AddHabitForm/AddHabitForm'
import FilterHabits from '../components/Workplace/FilterHabits/FilterHabits'
import Welcome from "../components/Workplace/Welcome/Welcome";
import habitIcon1 from '../assets/Light-mode/Habit-icon-1.svg';
import habitIcon2 from '../assets/Light-mode/Habit-icon-2.svg';
import habitIcon3 from '../assets/Light-mode/Habit-icon-3.svg';
import habitIcon4 from '../assets/Light-mode/Habit-icon-4.svg';
import habitIcon5 from '../assets/Light-mode/Habit-icon-5.svg';
import { useState } from "react";
import './Habits.css';

function Habits({habits, setHabits}) {
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
    const [searchTerm, setSearchTerm] = useState('');

    function changeSearch (event) {
        setSearchTerm(event.target.value)
    }
    
    function filteredHabitsSearch(habitName) {

        const searchHabits = habits.filter((habit)=>{
            return habit.name.trim().toLowerCase().includes(habitName.trim().toLowerCase())
        });
        
        return searchHabits;
    }
    
   
    return (
        <div className="workplace">
            <div className="welcome-date-container">
                <Welcome hour={hour} />
            </div>
            <div className="add-habit-section">
                <div className="habits-container">
                    <AddHabitForm habits={habits} setHabits={setHabits} icons={icons} />
                     <input className="search-input" type="search" name="search" id="search" placeholder="Search for a habit" value={searchTerm} onChange={changeSearch}/>
                    <FilterHabits isSearching={searchTerm.trim() !== ""} filteredHabitsSearch={filteredHabitsSearch(searchTerm)} habits={filteredHabitsSearch(searchTerm)} setHabits={setHabits} icons={icons} />
                </div>
            </div>
        </div>
    );
}

export default Habits;