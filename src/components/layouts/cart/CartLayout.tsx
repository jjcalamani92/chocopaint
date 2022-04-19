import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

interface State {
	Menu: any;
	Shopping: any;
}

export const CartLayout = () => {
	const { cart } = useSelector((state: State) => state.Menu);
	const { productsCart } = useSelector((state: State) => state.Shopping);
	return (
		<div className={cart ? 'cart active ' : 'cart'}>
			{productsCart.map((data: any) => (
				<div className="cart-item" key={data.id}>
					<span>
						{' '}
						<FontAwesomeIcon icon={faTimes} />{' '}
					</span>
					<img src={`${data.image[0]}`} alt={`${data.title}`} />
					<div className="content">
						<h3>{data.title}</h3>
						<div className="price">
							{' '}
							<p>Precio:</p> Bs {data.price}
						</div>
						<div className="amount">
							{' '}
							<p>Cantidad:</p> 1
						</div>
					</div>
				</div>
			))}

			{/* {product.map((data: any) => (
					<CardLayout key={data.id} {...data} />
				))} */}

			<a href="#" className="btn">
				ver detalles
			</a>
		</div>
	);
};
