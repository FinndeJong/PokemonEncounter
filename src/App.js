import React, { useState } from 'react';

import './App.css';

function App() {

    const [Count, setCount] = useState(0);
    const [LastHunt, setLastHunt] = useState(0);

    const handleNext = () => {
        setLastHunt(Count);
        setCount(0);
    }

    return (
        <div className="App">
            <div className="Container">
                {/* Counter */}
                <div>
                    <h1>{ Count }</h1>
                </div>
                {/* Buttons */}
                <div>
                    <button className="button" onClick={() => setCount(Count + 1)}>+</button>
                    <button className="button" onClick={() => setCount(0)}>reset</button>
                    <button className="button" onClick={ handleNext }>next</button>
                    <button className="button" onClick={() => setCount(Count - 1)}>-</button>
                </div>
                {/* Last Hunt */}
                <div>
                    <h2>{ LastHunt }</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
