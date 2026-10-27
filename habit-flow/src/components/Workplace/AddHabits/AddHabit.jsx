import './AddHabits.css';
import EditDeleteHabit from '../EditDeleteHabit/EditDeleteHabit';

function AddHabit({ habits, setHabits, icons }) {

    function changeHabitStatus(habitId) {
        setHabits(
            habits.map((habit)=>{
                if(habit.id === habitId){
                    return {
                        ...habit,
                        status: habit.status === 'Completed' ? 'Pending' :'Completed'
                    };
                }
                return habit;
            })
        );
    }

    return (
        <div className="add-habit">
            {habits.map((habit) => {

                const selectedIcon = icons.find((icon) => {
                    return icon.id === habit.icon;
                });
                return (
                    <div key={habit.id} className="habit-container">
                        <div className="habit-content">
                            {selectedIcon && (
                                <img
                                    src={selectedIcon.src}
                                    alt={`${habit.name} icon`}
                                />
                            )}
                            <div className="habit-texts">
                                <h3>{habit.name}</h3>
                                <div className="habit-span">
                                    <p>{habit.type}</p><span> . Daily</span>
                                </div>
                            </div>
                        </div>
                        <div className="habit-status">
                            <button onClick={()=>{changeHabitStatus(habit.id)}} className={habit.status === 'Completed' ? 'active' : 'status-btn'}>{habit.status}</button>
                            <EditDeleteHabit habit={habit} habits={habits} setHabits={setHabits} icons={icons}/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default AddHabit;