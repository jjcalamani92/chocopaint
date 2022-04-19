import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faCartShopping,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { UiContext } from '../../../context';

export const HeaderIcon_1 = () => {
	const { toggleSideMenu } = useContext(UiContext);

	useEffect(() => {
		const scrollListener = () => {};
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	});

	return (
		<div className="icons">
			{/* <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} /> */}
			<FontAwesomeIcon
				className="icon bars-icon"
				icon={faBars}
				onClick={toggleSideMenu}
			/>
			<FontAwesomeIcon className="icon search-icon" icon={faSearch} />
			<NavLink to="checkout" className="cartx">
				<FontAwesomeIcon className="icon shopping-icon" icon={faCartShopping} />
				<span>0</span>
			</NavLink>
		</div>
	);
};
