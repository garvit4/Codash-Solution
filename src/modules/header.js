import React, { useState, useEffect } from 'react';
import navDataConfig from '../mock-data/navbarConfig.json'
import { TabMenu } from 'primereact/tabmenu';
import logo from '../logo.svg';

function Header() {
	const [navData, setNavData] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [valueSelected, setValueSelected] = useState({});

	useEffect(() => {
		setNavData(navDataConfig.nav);
	}, []);

	function setActiveValue(selectedValue, selectedIndex) {
		console.log(selectedValue, 'selectedValue')
		console.log(selectedIndex, 'selectedIndex')
		setActiveIndex(selectedIndex);
		setValueSelected(selectedValue);
	}

	return (
		<div className='flex w-full border-b bg-slate-400'>
			<div className='flex w-1/3'>
				<img style={{ width: 70, Height: 70 }} src={logo} alt="Company logo" />
			</div>
			<div className='w-2/3'>
				<TabMenu model={navData}
					activeIndex={activeIndex}
					onTabChange={(e) => setActiveValue(e.value, e.index)}
				/>
			</div>
		</div>
	)
}
export default Header;