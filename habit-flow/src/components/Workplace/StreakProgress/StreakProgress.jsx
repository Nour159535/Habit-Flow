import dayjs from 'dayjs';
import './StreakProgress.css';
import TodayProgress from './TodayProgress';
import ThisWeek from './ThisWeek';
import CurrentStreak from './CurrentStreak';
import SuccessRate from './SuccessRate';

function StreakProgress({ habits }) {

    // Completed Habits
    const completedHabits = habits.filter((habitStatus) => {
        return habitStatus.status === 'Completed';
    });

    const totalHabits = habits.length;

    const progressCompleted = (completedHabits.length / totalHabits * 100);
    const progress = totalHabits === 0 ? 0 : Math.round(progressCompleted);

    const remainHabits = totalHabits - completedHabits.length;

    //Current Streak
    const todayDate = dayjs();
    const today = todayDate.format("YYYY-MM-DD");
    const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");

    const allCompletedDates = habits.flatMap((habit) => {
        return habit.completedDates;
    });

    const uniqueDates = [...new Set(allCompletedDates)];

    const streakStartDate = uniqueDates.includes(today) ? today :
        uniqueDates.includes(yesterday) ? yesterday : null;

    let streakCount = 0;
    let currentDate = streakStartDate;

    while (currentDate !== null && uniqueDates.includes(currentDate)) {
        streakCount = streakCount + 1;

        currentDate = dayjs(currentDate).subtract(1, "day").format("YYYY-MM-DD");
    }


    //This week
    const dayOfWeek = todayDate.day();
    const daysSinceMonday = (dayOfWeek + 6) % 7;
    const startOfWeek = todayDate.subtract(daysSinceMonday, "day").format("YYYY-MM-DD");

    const thisWeek = allCompletedDates.filter((date) => {
        return date >= startOfWeek && date <= today;
    })

    const weeklyGoal = (daysSinceMonday + 1) * habits.length;

    //Success rate
    const successRate = (completedHabits.length / totalHabits) * 100;
    const success = totalHabits === 0 ? 0 : Math.round(successRate);

    return (
        <div className="streak-progress">
            <TodayProgress progress={progress} completedHabits={completedHabits} 
            totalHabits={totalHabits} remainHabits={remainHabits}/>

            <CurrentStreak streakCount={streakCount} />
            <ThisWeek thisWeek={thisWeek} weeklyGoal={weeklyGoal}/>
            <SuccessRate success={success} />
        </div>
    );
}

export default StreakProgress;