import { FC } from 'react';
import { IProduct } from '../../../interface';

interface Props {
	product: IProduct;
}

export const DetailImageColor: FC<Props> = ({ product }) => {
	// const {image, title }= product;
	return (
		<div className="image">
			<div className="image-display">
				<img src={`${product.image[0]}`} alt={`${product.title}`} />
			</div>

			{/* <h2>Colores de presentación</h2>
			<div className="image-color">
				<div className="color" style={{ background: 'blue' }}></div>
				<div className="color" style={{ background: 'red' }}></div>
				<div className="color" style={{ background: 'green' }}></div>
				<div className="color" style={{ background: 'Aqua' }}></div>
				<div className="color" style={{ background: 'Black' }}></div>
				<div className="color" style={{ background: 'Crimson' }}></div>
			</div> */}
		</div>
	);
};
