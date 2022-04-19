import { faCode, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UiContext } from '../../../context';

interface Props {
	logo: String;
}

export const HeaderLogo = ({ logo }: Props) => {
	const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
	return (
		<div className="logo">
			<NavLink to="/" className="logo">
				{/* <FontAwesomeIcon className="icon" icon={faCode} /> */}
				<img src={`${logo}`} alt="" />
			</NavLink>
		</div>
	);
};
