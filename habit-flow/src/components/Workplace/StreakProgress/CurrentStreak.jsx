import './StreakProgress.css';

function CurrentStreak({streakCount}) {
    return (
        <div className="current-streak">
            <div className="streak-icon">
                <p className="current-content">Current streak</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99999 2.25C9.50005 4.25008 10.5002 5.87515 12.0003 7.12521C13.5005 8.37526 14.2506 9.75032 14.2506 11.2504C14.2506 12.6428 13.6974 13.9782 12.7127 14.9628C11.728 15.9475 10.3925 16.5006 8.99999 16.5006C7.60744 16.5006 6.27193 15.9475 5.28725 14.9628C4.30258 13.9782 3.74939 12.6428 3.74939 11.2504C3.74939 10.439 4.01259 9.64942 4.49948 9.00028C4.49948 9.49759 4.69704 9.97452 5.04871 10.3262C5.40038 10.6778 5.87735 10.8754 6.37469 10.8754C6.87203 10.8754 7.349 10.6778 7.70067 10.3262C8.05234 9.97452 8.2499 9.49759 8.2499 9.00028C8.2499 7.50022 7.12478 6.75019 7.12478 5.25013C7.12478 4.25008 7.74985 3.25004 8.99999 2.25Z" strokeWidth={1.6} strokeLinecap={"round"} stroke="#168364" />
                </svg>
            </div>
            <div className="streak-day">
                <p>{streakCount}</p> <span>days</span>
            </div>
            <p className="small-note">Keep the rhythm going</p>
        </div>
    );
}

export default CurrentStreak;