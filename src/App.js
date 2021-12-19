import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';

import Main from './pages/main.jsx'
import Page from './pages/page2.jsx'

function App() {
    return (
		<div className="App">
			<Routes>
				<Route path="/page2" element={<Page />} />
				<Route path="/" element={<Main />} />
			</Routes>
		</div>

    );
}

export default App;
