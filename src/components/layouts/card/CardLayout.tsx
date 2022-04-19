import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { IProduct } from '../../../interface';
import { FC } from 'react';

interface Props {
	Products: IProduct;
}

export const CardLayout: FC<Props> = ({ Products }) => {
	return (
		<NavLink
			to={`/${Products.category}/${Products.subCategory}/${Products.id}`}
		>
			<div className="card">
				<div className="image">
					<img src={`${Products.image[0]}`} alt={`${Products.title}`} />
				</div>
				<div className="content">
					<h3>{Products.title}</h3>
					<div className="stars">
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
					</div>
					<div className="price">
						Bs {Products.price} <span>Bs {Products.oldPrice}</span>
					</div>
				</div>
			</div>
		</NavLink>
	);
};
