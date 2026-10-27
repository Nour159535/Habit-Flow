import { useState, useEffect } from "react";
import "./EditHabitForm.css";

function EditHabitForm({ habit, habits, setHabits, icons }) {
    const [habitName, setHabitName] = useState("");
    const [habitType, setHabitType] = useState("");
    const [habitIcon, setHabitIcon] = useState("1");
    const [habitStatus, setHabitStatus] = useState("Pending");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState({});

    // Fill the inputs with the selected habit's current data
    function handleEditButton() {
        setHabitName(habit.name);
        setHabitType(habit.type);
        setHabitIcon(String(habit.icon));
        setHabitStatus(habit.status);
        setErrors({});
        setIsModalOpen(true);
    }

    function handleHabitName(event) {
        setHabitName(event.target.value);
    }

    function handleHabitType(event) {
        setHabitType(event.target.value);
    }

    function changeHabitStatus(event) {
        setHabitStatus(event.target.value);
    }

    function chooseIcon(iconId) {
        setHabitIcon(String(iconId));
    }

    function resetForm() {
        setHabitName("");
        setHabitType("");
        setHabitIcon("1");
        setHabitStatus("Pending");
        setErrors({});
        setIsModalOpen(false);
    }

    function handleModalClose(event) {
        // Close only when clicking the overlay itself
        if (event.target === event.currentTarget) {
            resetForm();
        }
    }

    function cancelHabitBtn() {
        resetForm();
    }

    useEffect(() => {
        if (!isModalOpen) return;

        function handleKeyCancel(event) {
            if (event.key === "Escape") {
                resetForm();
            }
        }

        window.addEventListener("keydown", handleKeyCancel);

        return () => {
            window.removeEventListener("keydown", handleKeyCancel);
        };
    }, [isModalOpen]);

    function handleSaveHabit() {
        const newErrors = {};
        const trimmedName = habitName.trim();
        const trimmedType = habitType.trim();

        const habitExists = habits.some((item) => {
            return (
                item.id !== habit.id &&
                item.name.trim().toLowerCase() ===
                trimmedName.toLowerCase()
            );
        });

        if (!trimmedName) {
            newErrors.habitName = "Habit name is required.";
        } else if (habitExists) {
            newErrors.habitName = "This habit name already exists.";
        }

        if (!trimmedType) {
            newErrors.habitType = "Habit type is required.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setHabits((currentHabits) =>
            currentHabits.map((item) => {
                if (item.id === habit.id) {
                    return {
                        ...item,
                        name: trimmedName,
                        type: trimmedType,
                        icon: habitIcon,
                        status: habitStatus,
                    };
                }

                // Keep every other habit unchanged
                return item;
            })
        );

        resetForm();
    }

    return (
        <>
            <button type="button" onClick={handleEditButton} className="handle-edit-btn">Edit Habit</button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleModalClose}>
                    <div className="form"
                        onClick={(event) => event.stopPropagation()}>
                        <div className="cancel-texts">
                            <h3>Edit your habit</h3>
                            <button type="button" className="cancel-btn" onClick={cancelHabitBtn}>Cancel</button>
                        </div>

                        <div className="form-inputs">
                            <input type="text" value={habitName} onChange={handleHabitName} placeholder="Enter your habit name" />

                            {errors.habitName && (
                                <p className="error-message" role="alert">
                                    {errors.habitName}
                                </p>
                            )}

                            <input type="text" value={habitType} onChange={handleHabitType} placeholder="Enter habit type" />

                            {errors.habitType && (
                                <p className="error-message" role="alert">
                                    {errors.habitType}
                                </p>
                            )}

                            <div className="habit-image" id="habit-image">
                                <p>Choose an Icon:</p>

                                {icons.map((icon) => (
                                    <button
                                        type="button"
                                        key={icon.id}
                                        className={
                                            habitIcon === String(icon.id)
                                                ? "active-icon"
                                                : ""
                                        }
                                        onClick={() => chooseIcon(icon.id)}
                                        aria-label={`Choose icon ${icon.id}`}
                                        aria-pressed={
                                            habitIcon === String(icon.id)
                                        }
                                    >
                                        <img src={icon.src} alt="" />
                                    </button>
                                ))}
                            </div>

                            <p>Choose Habit Status:</p>

                            <div className="radio-checkes">
                                <input type="radio" name={`status-${habit.id}`} checked={habitStatus === "Completed"}
                                    value="Completed"
                                    id={`Completed-${habit.id}`}
                                    onChange={changeHabitStatus} />

                                <label htmlFor={`Completed-${habit.id}`}>
                                    Completed
                                </label>

                                <input type="radio" name={`status-${habit.id}`} checked={habitStatus === "Pending"}
                                    value="Pending"
                                    id={`Pending-${habit.id}`}
                                    onChange={changeHabitStatus} />

                                <label htmlFor={`Pending-${habit.id}`}>
                                    Pending
                                </label>
                            </div>

                            <button type="button" className="add-habit-project" onClick={handleSaveHabit}> Save Habit </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default EditHabitForm;
