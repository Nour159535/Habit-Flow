import { Routes, Route } from "react-router"
import Layout from "./components/Layout";
import Workplace from './components/Workplace/Workplace';
import './App.css';
import Habits from "./pages/Habits";
import useLocalStorage from "./hooks/useLocalStorage";
import useTheme from "./hooks/useTheme";

function App() {
    const initialHabits = [
        {
            id: 1,
            name: "Drink Water",
            icon: '1',
            type: "Health",
            status: "Completed",
            completedDates: ["2026-10-26"]
        }, {
            id: 2,
            name: "Read 10 Pages",
            icon: '2',
            type: "Learning",
            status: "Completed",
            completedDates: ["2026-10-27"]
        }, {
            id: 3,
            name: "Morning Stretch",
            icon: '3',
            type: "Fitness",
            status: "Pending",
            completedDates: ["2026-10-25"]
        }
    ];

    const [habits, setHabits] = useLocalStorage("habit-flow-habits", initialHabits);
    const [theme, setTheme] = useTheme("habit-flow-theme", "light");

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Workplace habits={habits} setHabits={setHabits} theme={theme} setTheme={setTheme}/>} />
                <Route path="habits" element={<Habits habits={habits} setHabits={setHabits} theme={theme} setTheme={setTheme}/>} />
            </Route>
        </Routes>
    )
}

export default App;
