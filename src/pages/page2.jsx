import React, { useState, useEffect } from 'react'


const Page = () => {

	const [visible, setVisible] = useState(false);
	const [barHeight, setBarHeight] = useState(null);

	useEffect(() => {
		const actualheight = window.innerHeight;
		const elementheight = document.getElementById('control-height').clientHeight;

		const barheight = elementheight - actualheight;
		const menuheight = "100% - 100px - "+ barheight;
		setBarHeight(menuheight)
		// console.log(barHeight)
	}, [])

	return (
		<>
			<div id="control-height" />
			<div>
				<div className="page2-div">
					<button className="button2" onClick={() => setVisible((s) => !s)}>hi</button>
					<div className="page2-overlay flex-menu" style={{ display: visible ? "flex" : "none" }}>
						<h1 className="f1">1</h1>
						<h1 className="f1">2</h1>
						<h1 className="f1">3</h1>
						<h1 className="f1">4</h1>
					</div>
					<div style={{ position: visible ? "fixed" : "initial", width: "100vw" }}>
						<h1>test</h1>
						<br /><br /><br /><br /><br /><br />
						<h1>hi</h1>
						<br /><br /><br /><br /><br /><br /><br />
						<h1>brrr</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
