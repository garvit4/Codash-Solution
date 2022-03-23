import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import {navDataConfig} from '../mock-data/configData'
import { TabMenu } from 'primereact/tabmenu';
import logo from '../logo.svg';
import { Button } from 'primereact/button';
import { SlideMenu } from 'primereact/slidemenu';

const Header = () => {
	const navigate = useNavigate();
	const menu = useRef(null);
	const [navData, setNavData] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		setNavData(navDataConfig.nav);
	}, []);

	function setActiveValue(selectedValue, selectedIndex) {
		let selectedElement = selectedValue.path
		setActiveIndex(selectedIndex);
		navigate(selectedElement)
	}

	function handleClick() {
		alert("button clicked")
	}

	const tabNavData = () => {
		let TabMenuNavData = navData.slice(0, -1)
		return TabMenuNavData;
	}


	return (
		<div className='header-container'>
			<div className='flex w-10/12 md:container mx-auto items-center'>
				<img className='w-15 h-12 self-center' src={logo} alt="Company logo" />
				<div className='hidden md:flex flex-row items-center w-full justify-center'>
					<TabMenu model={tabNavData()}
						activeIndex={activeIndex}
						onTabChange={(e) => setActiveValue(e.value, e.index)}
					/>
					<Button className='inset-x-4 h-9 w-25 ' label="Contact Us" onClick={handleClick} />
				</div>
				<div className='flex w-full justify-end md:hidden h-8 container mx-auto'>
					<SlideMenu ref={menu} model={navData} popup autoZIndex={true}
						viewportHeight={'100%'} menuWidth={'100%'}
					/>
					<Button type="button" icon="pi pi-bars"
						onClick={(event) => menu.current.toggle(event)}
					/>
				</div>
			</div>
		</div>
	)
}
export default Header;