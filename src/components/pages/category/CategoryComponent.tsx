import { getProductByCategory } from '../../../helpers/getProductByCategory';
import { CardLayout } from '../../layouts/card/CardLayout';
import { initialDataProduct } from '../../../data';

interface Props {
	category: string;
}

export const CategoryComponent = ({ category }: Props) => {
	const { products } = initialDataProduct;
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
