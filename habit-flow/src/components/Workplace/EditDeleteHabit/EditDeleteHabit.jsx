import { useState, useEffect, useRef } from "react";
import './EditDeleteHabit.css';
import EditHabitForm from "../EditHabitForm/EditHabitForm";

function EditDeleteHabit({ habit, habits, setHabits, icons }) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const containerRef = useRef(null);

    function handleHabit() {
        setDropdownOpen((open) => !open);
    }
    function changeHabitStatus(habitId) {
        setHabits(
            habits.map((habit) => {
                if (habit.id === habitId) {
                    return {
                        ...habit,
                        status: habit.status === 'Completed' ? 'Pending' : 'Completed'
                    };
                }
                return habit;
            })
        );
    }

    function deleteHabit(habitId) {
        setHabits(
            habits.filter((habit) => {
                return habit.id !== habitId
            })
        )
    }
    useEffect(() => {
        function RefConatiner(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        function handleKeyClose(event) {
            if (event.key === 'Escape') {
                setDropdownOpen(false);
            }
        }
        window.addEventListener('keydown', handleKeyClose);
        document.addEventListener('click', RefConatiner);

        return () => {
            window.removeEventListener('keydown', handleKeyClose);
            document.removeEventListener('click', RefConatiner);
        };
    }, []);

    return (
        <div className="container-ref" ref={containerRef}>
            <button className='edit-btn' onClick={handleHabit} >...</button>
            {dropdownOpen &&
                    <div className="handle-key-down">
                        <div className="edit-delete-dropdown">
                            <EditHabitForm habit={habit} habits={habits} setHabits={setHabits} icons={icons} />
                            <button className="handle-delete-btn" onClick={() => { deleteHabit(habit.id) }}>Delete</button>
                            <button className="handle-toggle-btn" onClick={() => { changeHabitStatus(habit.id) }}>Change Status</button>
                        </div>
                    </div>
            }
        </div>
    );
}

export default EditDeleteHabit;