import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../../context';

export const CartComponent = () => {
	const { cart, updateCartQuantity } = useContext(CartContext);
	const deleteItemCart = () => {
		console.log('deleteItemCart');
	};
	const clearCart = () => {
		console.log('clearCart');
	};

	return (
		<>
			<section className="checkout">
				<div className="row">
					<h2>tu carrito</h2>
					{cart.map((data: any, index: number) => (
						<div className="cart-item" key={index}>
							<span onClick={deleteItemCart}>
								{' '}
								<FontAwesomeIcon icon={faTimes} />{' '}
							</span>
							<Link to={`/${data.category}/${data.subCategory}/${data.id}`}>
								<img src={`${data.image}`} alt={`${data.title}`} />
							</Link>

							<div className="content">
								<h3>{data.title}</h3>
								<div className="price">
									{' '}
									<p>Precio:</p> Bs {data.price}
								</div>
								<div className="amount">
									{' '}
									<p>Cantidad:</p> {data.quantity}
									{/* <div className="purchase-info-row">
										<input type="number" min="0" placeholder="1" />
									</div> */}
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="row">
					<h2>tu orden</h2>
					<div className="orders">
						<div className="order">
							<h3>Nro de productos</h3>
							<p> 19 Items</p>
						</div>
						<div className="order">
							<h3>Subtotal</h3>
							<p> 19 </p>
						</div>
						<div className="order">
							<h3>Impuestos</h3>
							<p> 19 </p>
						</div>
						<div className="order">
							<h3>Total</h3>
							<p> 19 </p>
						</div>
					</div>

					<button className="btn">Realizar pedido por whatsapp</button>
					<button onClick={clearCart} className="btn">
						Limpiar carrito
					</button>
				</div>
			</section>
		</>
	);
};
