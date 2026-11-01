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

function Workplace({habits, setHabits}) {

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

    return (
        <div className="workplace">
            <div className="first-container-mobile">
               <div className="habit-flow-logo-mobile">
                  <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 14C0 6.26801 6.26801 0 14 0H26C28.2091 0 30 1.79086 30 4V18C30 25.732 23.732 32 16 32H4C1.79086 32 0 30.2091 0 28V14Z" fill="#168364" />
                     <path d="M16.6665 13.9467V13.9466M16.6665 13.9466V11.8333C16.6665 10.9493 17.0177 10.1014 17.6427 9.47631C18.2678 8.85119 19.1155 8.5 19.9995 8.5H21.2494C21.3599 8.5 21.4659 8.5439 21.544 8.62204C21.6221 8.70018 21.666 8.80616 21.666 8.91667V10.1667C21.666 11.0507 21.3149 11.8986 20.6898 12.5237C20.0647 13.1488 19.217 13.5 18.333 13.5C17.7429 13.5 17.1689 13.6565 16.6665 13.9466ZM16.6665 13.9466C16.4164 14.091 16.184 14.2685 15.9762 14.4763C15.3512 15.1014 15 15.9493 15 16.8333M15 16.8333C15 18.5 15.8333 19.3333 15.8333 21C15.8333 21.9015 15.5409 22.7788 15 23.5M15 16.8333C15 16.0595 14.7846 15.301 14.3778 14.6428C13.971 13.9846 13.389 13.4526 12.697 13.1066C12.0049 12.7605 11.2302 12.614 10.4596 12.6835C9.68902 12.753 8.95299 13.0357 8.33401 13.5C8.33401 14.2738 8.54947 15.0323 8.95624 15.6905C9.36301 16.3488 9.94502 16.8807 10.6371 17.2268C11.3291 17.5728 12.1038 17.7193 12.8744 17.6498C13.645 17.5803 14.381 17.2976 15 16.8333ZM15 23.5H9.16726M15 23.5H20.8328" strokeWidth={1.6} strokeLinecap={"round"} stroke={"white"} />
                  </svg>
                  <h3>Habit Flow</h3>
               </div>
            </div>
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
                    <HabitCalendar habits={habits}/>
                    <TakeNote />
                </div>
            </div>
        </div>
    );
}

export default Workplace;