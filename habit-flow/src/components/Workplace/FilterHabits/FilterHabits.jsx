import { useState } from 'react';
import AddHabit from '../AddHabits/AddHabit';
import './FilterHabits.css';

function FilterHabits({habits, setHabits, icons}){
    const [filter, setFilter] = useState('All');
    
    const filteredHabits = filter === 'All' ? habits : filter === 'Completed' ?
    habits.filter((habit) => habit.status === 'Completed') : habits.filter((habit) => habit.status === 'Pending');
    
    const totalHabits = habits.length;

    const completedCount = habits.filter((habit)=> habit.status === 'Completed').length;

    const pendingCount = habits.filter((habit)=> habit.status === 'Pending').length;
    
    return(
          <>
          <div className="filters-btn">
            <button className={filter === 'All'  ? 'active-btn' : 'filter-btn'} onClick={()=>{setFilter('All')}}>All ({totalHabits})</button>
            <button className={filter === 'Completed' ? 'active-btn' : 'filter-btn'} onClick={()=>{setFilter('Completed')}}>Completed ({completedCount})</button>
            <button className={filter === 'Pending'  ? 'active-btn' : 'filter-btn'} onClick={()=>{setFilter('Pending')}}>Pending ({pendingCount})</button>
          </div>
          <AddHabit habits={filteredHabits} setHabits={setHabits} icons={icons}/>
          </>
    );
}

export default FilterHabits;