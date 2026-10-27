import { useEffect, useState } from "react";
import './AddHabitForm.css';

function AddHabitForm({ habits, setHabits, icons }) {
    const [habitName, setHabitName] = useState('');
    const [habitType, setHabitType] = useState('');
    const [habitIcon, setHabitIcon] = useState('1');
    const [habitStatus, setHabitStatus] = useState('Pending');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const habitExists = habits.some((habit) => {
        return habit.name.trim().toLowerCase() === habitName.trim().toLowerCase();
    });

    function handleHabitName(event) {
        setHabitName(event.target.value);
    }

    function handleHabitType(event) {
        setHabitType(event.target.value);
    }

    function changeHabitStatus(event) {
        setHabitStatus(event.target.value)
    }

    function handleClickButton() {
        const newError = {};

        if (habitName.trim() === '') {
            newError.habitName = 'Habit name is required.'

        } else if (habitExists){
            newError.habitName = 'This Habit name is already exist.'
        }
        if (habitType.trim() === '') {
            newError.habitType = 'Habit Type is required.'
        }
        setErrors(newError);

        if (Object.keys(newError).length > 0) {
            return;
        }

        setHabits([
            ...habits,
            {
                id: crypto.randomUUID(),
                name: habitName,
                icon: habitIcon,
                type: habitType,
                status: habitStatus
            }
        ]);

        setHabitName('');
        setHabitType('');
        setHabitIcon('1');
        setHabitStatus('Pending');
        setIsModalOpen(false);
        setErrors({});
    }

    function handleModalClose(event) {
        if (event.target === event.currentTarget) {
            setHabitName('');
            setHabitType('');
            setHabitIcon('1');
            setHabitStatus('pending');
            setIsModalOpen(false);
            setErrors({});
        }
    }

    function chooseIcon(iconId) {
        setHabitIcon(iconId);
    }

    function cancelHabitBtn() {
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (habits.id === null) return;

        function handleKeyCancel(event) {
            if (event.key === 'Escape' || event.target === event.currentTarget) {
                setHabitName('');
                setHabitType('');
                setHabitIcon('1');
                setHabitStatus('Pending');
                setIsModalOpen(false);
                setErrors({});
            }
        }
        window.addEventListener('keydown', handleKeyCancel);

        return () => {
            window.removeEventListener('keydown', handleKeyCancel)
        };
    }, [habits.id]);

    function handleClickButtonOpen() {
        setIsModalOpen(true);
    }

    return (
        <>
            <div className="add-form-habit">
                <div className="habit-text">
                    <h3>Today’s habits</h3>
                    <p>Your everyday rituals, a little more intentional.</p>
                </div>
                <button className="add-habit-btn" onClick={handleClickButtonOpen}>Add Habit</button>
            </div>
            <div className="open-modal">
                {isModalOpen &&
                    <div className="modal-overlay" onClick={handleModalClose}>
                        <div className="form">
                            <div className="cancel-texts">
                                <h3>Add habit to your progress</h3>
                                <button className="cancel-btn" onClick={cancelHabitBtn}>Cancel</button>
                            </div>
                            <div className="form-inputs">
                                <input type="text" value={habitName} onChange={handleHabitName} placeholder="Enter your habit name" />
                                {errors.habitName && (
                                    <p className="error-message" role="alert">
                                        {errors.habitName}
                                    </p>
                                )}
                                <input type="text" value={habitType} onChange={handleHabitType} placeholder="Enter your habit Type" />
                                {errors.habitType && (
                                    <p className="error-message" role="alert">
                                        {errors.habitType}
                                    </p>
                                )}
                                <div className="habit-image" id="habit-image">
                                    <p>Choose an Icon:</p>
                                    {icons.map((icon) => {
                                        return <button className={habitIcon === icon.id ? 'active-icon' : ''} key={icon.id} onClick={() => { chooseIcon(icon.id) }}><img src={icon.src} /></button>;
                                    })
                                    }
                                </div>
                                <p>Choose Habit Status:</p>
                                <div className="radio-checkes">
                                    <input type="radio" name="status" checked={habitStatus === 'Completed'} value="Completed" id="Completed" onChange={changeHabitStatus} />
                                    <label htmlFor='Completed'>Completed</label>
                                    <input type="radio" name="status" checked={habitStatus === 'Pending'} value="Pending" id="Pending" onChange={changeHabitStatus} />
                                    <label htmlFor='Pending'>Pending</label>
                                </div>
                                <button className="add-habit-project" onClick={handleClickButton}>Add Habit</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

export default AddHabitForm;