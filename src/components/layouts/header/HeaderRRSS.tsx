import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export const HeaderRRSS = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<Drawer
			open={isOpen}
			onClose={toggleDrawer}
			direction="right"
			className="bla bla bla"
		>
			<div>Hello World</div>
		</Drawer>
	);
};
