import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const links = ['tienda', 'linea automotriz', 'servicios', 'contacto'];
export const FooterLink = () => {
	// const { links } = useSelector( (state: State) => state.Start )
	return (
		<div className="box">
			<h3>Links directos</h3>
			{links.map((link: any, i: number) => (
				<NavLink to={`/${link}`} key={i}>
					<FontAwesomeIcon className="icon" icon={faChevronRight} />
					{link}
				</NavLink>
			))}
		</div>
	);
};
