import { Routes, Route } from "react-router"
import Layout from "./components/Layout";
import Workplace from './components/Workplace/Workplace';
import './App.css';
import Habits from "./pages/Habits";
import Statistics from "./pages/Statistics";

function App() {


  return (
      <Routes>
          <Route element={<Layout />}>
          <Route index element={<Workplace />} />
          <Route path="habits" element={<Habits />} />
          <Route path="statistics" element={<Statistics />} />
          </Route>
      </Routes>
  )
}

export default App;
