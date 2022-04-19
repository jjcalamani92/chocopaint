import { HeadingPrimary } from '../../layouts/heading/HeadingLayouts';
import { CartComponent } from './CartComponent';

export const CartPages = () => {
	return (
		<>
			<HeadingPrimary titleP="Resumen de la orden" />
			<CartComponent />
		</>
	);
};
