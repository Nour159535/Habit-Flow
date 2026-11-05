import dayjs from 'dayjs';
import './Welcome.css';

function Welcome({ hour, theme, onToggleTheme }) {
    return (
        <>
            <div className="weclome">
                <p className="matters">MAKE ROOM FOR WHAT MATTERS</p>
                <h3>{hour >= 5 && hour < 12 ? 'Good morning, Guest' : hour >= 12 && hour < 17 ?
                    'Good afternoon, Guest' : 'Good evening, Guest'}</h3>
                <p>Small steps make big changes.</p>
            </div>
            <div className="date-notification">
                <div className="date">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66667 1.4161V2.83288M5.66667 2.83288V4.24966M5.66667 2.83288H3.54167C2.75926 2.83288 2.125 3.46719 2.125 4.24966V7.08322M5.66667 2.83288H11.3333M11.3333 1.4161V2.83288M11.3333 2.83288V4.24966M11.3333 2.83288H13.4583C14.2407 2.83288 14.875 3.46719 14.875 4.24966V7.08322M2.125 7.08322H14.875M2.125 7.08322V14.1671C2.125 14.9496 2.75926 15.5839 3.54167 15.5839H13.4583C14.2407 15.5839 14.875 14.9496 14.875 14.1671V7.08322M5.66667 9.91678H5.67375M8.5 9.91678H8.50708M11.3333 9.91678H11.3404M5.66667 12.7503H5.67375M8.5 12.7503H8.50708M11.3333 12.7503H11.3404" strokeWidth={1.6} strokeLinecap={"round"} stroke="#78817A" />
                    </svg>
                    <p>{dayjs().format('dddd, MMMM D, YYYY')}</p>
                </div>

                <button
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? (
                        // Moon icon
                        <svg width="50" height="50" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill=" #FFFEFB"/>
                            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#E3E6DD"/>
                            <path d="M23.6001 14C19.2001 12.6 14.6001 15.8 14.6001 20.5C14.6001 24.4 17.7001 27.5 21.6001 27.5C24.1001 27.5 26.4001 26.1 27.5001 23.9C24.2001 25.1 20.6001 22.7 20.6001 19.2C20.6001 17.1 21.7001 15.1 23.6001 14Z" strokeWidth={0.9} strokeLinecap={"round"} strokeLinejoin={"round"} stroke="#2B3530"/>
                        </svg>

                    ) : (
                        // Sun icon
                        <svg width="50" height="50" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill="#171D18"/>
                            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="#2B3530"/>
                            <path d="M24 21C24 22.6569 22.6569 24 21 24C19.3431 24 18 22.6569 18 21C18 19.3431 19.3431 18 21 18C22.6569 18 24 19.3431 24 21Z" strokeWidth={1.2} stroke="#344B40"/>
                            <path d="M21 13.5V15.5M21 26.5V28.5M13.5 21H15.5M26.5 21H28.5M15.7 15.7L17.1 17.1M24.9 24.9L26.3 26.3M15.7 26.3L17.1 24.9M24.9 17.1L26.3 15.7" strokeWidth={1.2} strokeLinecap={"round"} stroke="#BAC5B8"/>
                        </svg>
                    )}
                </button>
            </div>
        </>
    );
}

export default Welcome;