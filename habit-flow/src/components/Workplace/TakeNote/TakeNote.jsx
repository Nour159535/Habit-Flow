import './TakeNote.css';

function TakeNote(){
    return(
        <>
        <div className="note">
            <p className='grow'>GROW AT YOUR OWN PACE</p>
            <h3>Keep your momentum going!</h3>
            <p className='small-note'>Every small action brings you closer to your goals.</p>    
        </div>
        <div className="latest-note">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_19_415)">
                <path d="M1.08289 11.375C1.08289 10.2199 1.58923 9.23989 2.51049 8.6452M2.51049 8.6452C2.88528 8.40327 3.32874 8.2251 3.83471 8.12485C5.14561 7.86484 6.49986 7.04147 7.04155 6.49978M2.51049 8.6452C2.71963 9.09328 3.01619 9.50001 3.3874 9.83952C4.0893 10.4815 5.00683 10.8362 5.95802 10.8333C8.78567 10.8333 11.375 8.39569 11.375 5.4164C11.375 3.34715 10.8333 2.16626 10.2916 1.08289C9.2082 2.42628 8.39565 2.70795 5.30798 3.30381C4.37037 3.46399 3.52721 3.9707 2.94572 4.72344C2.36423 5.47618 2.08689 6.41997 2.1687 7.36763C2.20725 7.81409 2.32418 8.24605 2.51049 8.6452Z" strokeWidth={1.6} strokeLinecap={"round"} stroke="#168364"/>
                </g>
                <defs>
                <clipPath id="clip0_19_415">
                <rect width="13" height="13" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p>Consistency, not perfection.</p>
        </div>
        </>
    );
}

export default TakeNote;