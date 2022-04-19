import { useSelector } from 'react-redux';

import { getProductByCategory } from '../../../helpers/getProductByCategory';
import { CardLayout } from '../../layouts/card/CardLayout';

interface Props {
	category: string;
	categoryTitle: string;
}
interface State {
	Product: any;
}
export const LineComponent = ({ category }: Props) => {
	const { products } = useSelector((state: State) => state.Product);
	const product = getProductByCategory(products, category);
	const Product = product.slice(0, 4);
	return (
		<>
			<section className="product">
				{Product.map((data: any) => (
					<CardLayout key={data.id} {...data} />
				))}
			</section>
		</>
	);
};
