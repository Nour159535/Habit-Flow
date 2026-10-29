import { useState } from 'react';
import { Link } from 'react-router';
import './ListItems.css';

function ListItems() {

    const [activeItem, setActiveItem] = useState("Home");
    
    function activeStatus (itemName) {
        if(itemName === "Habits"){
            setActiveItem("Habits");
        } else if(itemName === "Statistics"){
            setActiveItem("Statistics");
        } else if(itemName === "Settings"){
            setActiveItem("Settings");
        } else {
            setActiveItem("Home");
        }
    }
    return (
        <ul className="menu-list">
            <li className="list-item">
                <Link to='/'>
                    <div className={activeItem === "Home" ? "div-item active" : "div-item"} onClick={activeStatus}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 17.4993V10.8327C12.5 10.6117 12.4122 10.3997 12.2559 10.2434C12.0996 10.0871 11.8877 9.99933 11.6667 9.99933H8.33333C8.11232 9.99933 7.90036 10.0871 7.74408 10.2434C7.5878 10.3997 7.5 10.6117 7.5 10.8327V17.4993M2.5 8.33307C2.49994 8.09062 2.55278 7.85109 2.65482 7.63116C2.75687 7.41124 2.90566 7.21623 3.09083 7.05973L8.92417 2.05973C9.22499 1.80549 9.60613 1.666 10 1.666C10.3939 1.666 10.775 1.80549 11.0758 2.05973L16.9092 7.05973C17.0943 7.21623 17.2431 7.41124 17.3452 7.63116C17.4472 7.85109 17.5001 8.09062 17.5 8.33307V15.8331C17.5 16.2751 17.3244 16.699 17.0118 17.0116C16.6993 17.3241 16.2754 17.4997 15.8333 17.4997H4.16667C3.72464 17.4997 3.30072 17.3241 2.98816 17.0116C2.67559 16.699 2.5 16.2751 2.5 15.8331V8.33307Z" strokeWidth={1.6} strokeLinecap={"round"} stroke="#78817A" />
                        </svg>
                        Home
                   </div>
                </Link>
            </li>
            <li className="list-item">
                <Link to='/habits'>
                    <div className={activeItem === "Habits" ? "div-item active" : "div-item"} onClick={()=> {activeStatus("Habits")}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8333 4.166H17.5M10.8333 10H17.5M10.8333 15.834H17.5M2.5 14.1671L4.16667 15.834L7.5 12.5003M2.5 5.83286L4.16667 7.49971L7.5 4.166" strokeWidth={1.6} strokeLinecap={"round"} stroke="#78817A" />
                        </svg>
                        Habits
                    </div>
               </Link> 
            </li>
            <li className="list-item">
                <Link to='/statistics'>
                    <div className={activeItem === "Statistics" ? "div-item active" : "div-item"} onClick={()=>{activeStatus("Statistics")}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99998 13.3333V17.5M13.3336 11.6667V17.5M16.6672 8.33333V17.5M18.334 2.5L11.1284 9.705C11.0897 9.7438 11.0437 9.77459 10.9931 9.79559C10.9425 9.8166 10.8882 9.82741 10.8334 9.82741C10.7786 9.82741 10.7243 9.8166 10.6737 9.79559C10.6231 9.77459 10.5771 9.7438 10.5384 9.705L7.79481 6.96167C7.71667 6.88355 7.6107 6.83967 7.5002 6.83967C7.38971 6.83967 7.28374 6.88355 7.2056 6.96167L1.66599 12.5M3.33279 15V17.5M6.66638 11.6667V17.5" strokeWidth={1.6} strokeLinecap={"round"} stroke="#78817A" />
                        </svg>
                        Statistics
                    </div>
                </Link>
            </li>
            <li className="list-item">
                <Link to='settings'>
                    <div className={activeItem === "Settings" ? "div-item active" : "div-item"} onClick={()=>{activeStatus("Settings")}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6665 14.1663H4.16726M11.6665 14.1663C11.6665 15.5468 12.7857 16.666 14.1663 16.666C15.5468 16.666 16.666 15.5468 16.666 14.1663C16.666 12.7857 15.5468 11.6665 14.1663 11.6665C12.7857 11.6665 11.6665 12.7857 11.6665 14.1663ZM15.8328 5.83376H8.33351M8.33351 5.83376C8.33351 7.21434 7.21434 8.33351 5.83376 8.33351C4.45319 8.33351 3.33401 7.21434 3.33401 5.83376C3.33401 4.45319 4.45319 3.33401 5.83376 3.33401C7.21434 3.33401 8.33351 4.45319 8.33351 5.83376Z" strokeWidth={1.6} strokeLinecap={"round"} stroke="#78817A" />
                        </svg>
                        Settings
                    </div>
                </Link>
            </li>
        </ul>
    );
}

export default ListItems;