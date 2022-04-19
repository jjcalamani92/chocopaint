import {
	faBars,
	faCaretDown,
	faCartShopping,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { initialData } from '../../../data';
import { CartLayout } from '../cart/CartLayout';
import { HeaderIcon_1 } from './HeaderIcon';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNavbar } from './HeaderNavbar';
import { HeaderRRSS } from './HeaderRRSS';
import { HeaderSearch } from './HeaderSearch';

export const HeaderLayout = () => {
	const { date } = initialData;
	const { name, domain, logo, phoneNumber, map } = date;

	return (
		<>
			<header>
				<div className="logo-navbar">
					<HeaderLogo logo={logo} />
					<HeaderNavbar logo={logo} />
				</div>
				{/* <HeaderRRSS /> */}
				<HeaderIcon_1 />
			</header>
		</>
	);
};
