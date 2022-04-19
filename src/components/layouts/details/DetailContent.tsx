import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import {
	faCheckCircle,
	faMinus,
	faMinusCircle,
	faPlus,
	faPlusCircle,
	faStar,
	faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons';

import {
	faFacebookF,
	faTwitter,
	faLinkedin,
	faWhatsapp,
	faInstagram,
	faPinterestP,
	faPinterest,
	faTelegram
} from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ICartProduct, IProduct, IProducts } from '../../../interface';
import { FC, useContext, useState } from 'react';
import { CartContext } from '../../../context';

interface Props {
	product: IProduct;
}

export const DetailContent: FC<Props> = ({ product }) => {
	const { addProductToCart } = useContext(CartContext);
	const navigate = useNavigate();

	const [temCartProduct, setTemCartProduct] = useState<ICartProduct>({
		id: product.id,
		title: product.title,
		image: product.image[0],
		description: product.description,
		price: product.price,
		line: product.line,
		category: product.category,
		subCategory: product.subCategory,
		quantity: 1
	});

	const onAddProduct = () => {
		addProductToCart(temCartProduct);
		navigate('/checkout');
	};

	return (
		<div className="content">
			<h2 className="product-title">{product.title}</h2>
			{/* <div className="product-rating">
				<FontAwesomeIcon className="icon" icon={faStar} />
				<FontAwesomeIcon className="icon" icon={faStar} />
				<FontAwesomeIcon className="icon" icon={faStar} />
				<FontAwesomeIcon className="icon" icon={faStar} />
				<FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
				<span>4.7(21)</span>
			</div> */}
			{/* <a href = "#" className = "product-link">visit nike store</a> */}

			<div className="product-price">
				<p className="new-price">
					Precio: <span>Bs {product.price}.00 </span>
				</p>
			</div>

			<div className="product-detail">
				{/* <h2>tallas: </h2>
        <div className="size">
          <a href="#">s</a>
          <a href="#">m</a>
          <a href="#">t</a>
        </div> */}
				<h2>descripcion del producto: </h2>
				<p>{product.description}</p>
				<h2>uso y recomendaciones: </h2>
				<p>{product.use}</p>
				<h2>presentaciones: </h2>
				<p>Envase de hojalata de 1Galon(3.785L)</p>
				<ul>
					<li>
						<FontAwesomeIcon className="icon" icon={faCheckCircle} />
						Disponible: <span>en stock</span>
					</li>
					<li>
						<FontAwesomeIcon className="icon" icon={faCheckCircle} />
						Categoria: <span>{product.category}</span>
					</li>
					<li>
						<FontAwesomeIcon className="icon" icon={faCheckCircle} />
						Área de envio: <span>La Paz y El Alto</span>
					</li>
					<li>
						<FontAwesomeIcon className="icon" icon={faCheckCircle} />
						Tarifa de envio: <span>Gratis</span>
					</li>
				</ul>
			</div>

			<div className="purchase-info">
				<div className="purchase-info-row">
					<span>Cantidad:</span>

					<div className="counter">
						<FontAwesomeIcon className="icon" icon={faMinusCircle} />
						<p>1</p>
						<FontAwesomeIcon className="icon" icon={faPlusCircle} />
					</div>
				</div>
				<div className="purchase-info-row">
					<button className="btn" onClick={onAddProduct}>
						Agregar al carrito <i className="fas fa-shopping-cart"></i>
					</button>

					<button className="btn">Realizar pedido</button>
				</div>
			</div>

			<div className="social-links">
				<p>Compartir: </p>
				<div className="share">
					<a href="#">
						<FontAwesomeIcon className="iconS" icon={faFacebookF} />
					</a>
					<a href="#">
						<FontAwesomeIcon className="iconS" icon={faInstagram} />
					</a>
					<a href="#">
						<FontAwesomeIcon className="iconS" icon={faTwitter} />
					</a>
					<a href="#">
						<FontAwesomeIcon className="iconS" icon={faLinkedin} />
					</a>
					<a href="#">
						<FontAwesomeIcon className="iconS" icon={faPinterest} />
					</a>
					<a href="#">
						<FontAwesomeIcon className="iconS" icon={faWhatsapp} />
					</a>
					<a href="#">
						<FontAwesomeIcon className="iconS" icon={faTelegram} />
					</a>
				</div>
			</div>
		</div>
	);
};
