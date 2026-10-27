import './StreakProgress.css';

function TodayProgress({progress, completedHabits, totalHabits, remainHabits}) {
    return (
        <div className="today-progress">
            <div className="progress-circle" style={{ "--progress": `${progress}%` }}>
                <span className="progress">{progress} %</span>
            </div>
            <div className="today-progress-content">
                <h3>Today’s progress</h3>
                <p className="compare-habits">{`${completedHabits.length} of ${totalHabits}`} habits</p>
                <p className="short-tweak">{remainHabits === 0 ? "You did it! Every small step counts." : `A lovely start. Just ${remainHabits} 
                    ${remainHabits === 1 ? "more small step" : "more small steps"} to go.`}</p>
            </div>
        </div>
    );
}

export default TodayProgress;