import React from 'react';

import '../App.css'

import { useState, useEffect } from 'react';

const Main = () => {

	const [Count, setCount] = useState(Number(localStorage.getItem('saveEncounters')) || 0);
    const [LastHunt, setLastHunt] = useState(Number(localStorage.getItem('saveLastEncounters')) || 0);
    // const [History, setHistory] = useState(false);

    useEffect(() => {
        localStorage.setItem('saveEncounters', [Count]);
    }, [Count]);

    useEffect(() => {
        localStorage.setItem('saveLastEncounters', [LastHunt]);
    }, [LastHunt]);

    const handleNext = () => {
        setLastHunt(Count);
        setCount(0);
    }


	return (
		<>
			<div className="Container">
				{/* Counter */}
				<div>
					<h1>{Count}</h1>
				</div>
				{/* Buttons */}
				<div className="buttons-margin">
					<button className="button" onClick={() => setCount(Count + 1)}>+</button>
					<button className="button" onClick={() => setCount(0)}>reset</button>
					<button className="button" onClick={handleNext}>next</button>
					<button className="button" onClick={() => setCount(Count - 1)}>-</button>
				</div>
				<br />
				<div>
					<button className="button" onClick={() => setCount(Count + 10)}>+10</button>
					<button className="button" onClick={() => setCount(Count + 100)}>+100</button>
					<button className="button" onClick={() => setCount(Count + 1000)}>+1000</button>
					<button className="button" onClick={() => setCount(Count + 10000)}>+10000</button>
				</div>
				{/* Last Hunt */}
				<div>
					<h2>{LastHunt}</h2>
				</div>
				{/* History */}
				{/* <div>
					<button className="button" onClick={() => setHistory(true)}>History</button>
				</div> */}
			</div>
		</>
	)
}

export default Main
