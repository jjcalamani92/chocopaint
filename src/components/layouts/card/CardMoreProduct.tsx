import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { IProduct } from '../../../interface';

interface Props {
	Products: IProduct;
}

export const CardMoreProduct: FC<Props> = ({ Products }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/${Products.category}/${Products.subCategory}/${Products.id}`, {
			replace: true
		});
	};
	return (
		<div className="card-more" onClick={handleClick}>
			<div className="image">
				<img src={`${Products.image[0]}`} alt={`${Products.title}`} />
			</div>
			<div className="content">
				<h3>{Products.title}</h3>
				{/* <div className="stars">
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
        </div> */}
				{/* <div className="price">
          Bs {price} <span>Bs {oldPrice}</span>
        </div> */}
			</div>
		</div>
	);
};
