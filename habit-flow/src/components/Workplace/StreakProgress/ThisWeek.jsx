import './StreakProgress.css';

function ThisWeek({thisWeek, weeklyGoal}) {
    return (
        <div className="this-week">
            <div className="week-icon">
                <p className="week-content">Current streak</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 1.4994V2.99952M6 2.99952V4.49964M6 2.99952H3.75C2.92157 2.99952 2.25 3.67115 2.25 4.49964V7.49988M6 2.99952H12M12 1.4994V2.99952M12 2.99952V4.49964M12 2.99952H14.25C15.0784 2.99952 15.75 3.67115 15.75 4.49964V7.49988M2.25 7.49988H15.75M2.25 7.49988V15.0005C2.25 15.829 2.92157 16.5006 3.75 16.5006H14.25C15.0784 16.5006 15.75 15.829 15.75 15.0005V7.49988M6.75 12.0002L8.25 13.5004L11.25 10.5001" strokeWidth={1.6} strokeLinecap={"round"} stroke="#7964A4" />
                </svg>
            </div>
            <p className="total-habit-achieve">
                {`${thisWeek.length} / ${weeklyGoal}`}
            </p>
            <p className="habits-completed">
                Habits completed
            </p>
        </div>
    );
}

export default ThisWeek;